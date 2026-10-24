<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

class ProjectForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make('Project Details')
                    ->columns(2)
                    ->schema([
                        Toggle::make('is_active')
                            ->label('Active')
                            ->default(true)
                            ->helperText('Disable to hide this project from the website.')
                            ->columnSpanFull(),

                        SpatieMediaLibraryFileUpload::make('featured_image')
                            ->label('Featured / Cover Image')
                            ->collection('featured_image')
                            ->visibility('public')
                            ->disk('public')
                            ->image()
                            ->imageEditor()
                            ->columnSpanFull(),

                        TextInput::make('title')
                            ->label('Title')
                            ->required()
                            ->maxLength(255)
                            ->live(debounce: 500)
                            ->afterStateUpdated(function ($state, Set $set) {
                                $set('slug', Str::slug($state));
                            }),

                        TextInput::make('slug')
                            ->label('Slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),

                        Textarea::make('description')
                            ->label('Description')
                            ->helperText('Short overview / summary of the project.')
                            ->rows(3)
                            ->maxLength(1000)
                            ->columnSpanFull(),

                        RichEditor::make('content')
                            ->label('Content')
                            ->helperText('Full details, case study, challenges, equipment used, and results.')
                            ->toolbarButtons([
                                'blockquote',
                                'bold',
                                'bulletList',
                                'codeBlock',
                                'h2',
                                'h3',
                                'italic',
                                'link',
                                'orderedList',
                                'redo',
                                'strike',
                                'underline',
                                'undo',
                            ])
                            ->columnSpanFull(),
                    ]),

                Section::make('Project Gallery')
                    ->description('Upload multiple images to the main gallery of this project.')
                    ->schema([
                        FileUpload::make('gallery')
                            ->label('Gallery Images')
                            ->disk('public')
                            ->directory('projects/gallery')
                            ->visibility('public')
                            ->image()
                            ->imageEditor()
                            ->multiple()
                            ->reorderable()
                            ->panelLayout('grid')
                            ->columnSpanFull()
                            ->helperText('Upload and reorder multiple photos of this project.'),
                    ]),

                Section::make('Custom Galleries')
                    ->description('Add multiple named galleries to this project (e.g. Site Setup, Tandem Crane Lift, Final Installation), each with its own photos.')
                    ->schema([
                        Repeater::make('galleries')
                            ->label('Galleries')
                            ->schema([
                                TextInput::make('title')
                                    ->label('Gallery Title')
                                    ->placeholder('e.g. Staging & Rigging')
                                    ->required(),

                                Textarea::make('description')
                                    ->label('Gallery Description (Optional)')
                                    ->rows(2)
                                    ->placeholder('Short description or notes for this gallery...')
                                    ->columnSpanFull(),

                                FileUpload::make('images')
                                    ->label('Gallery Images')
                                    ->disk('public')
                                    ->directory('projects/galleries')
                                    ->visibility('public')
                                    ->image()
                                    ->imageEditor()
                                    ->multiple()
                                    ->reorderable()
                                    ->panelLayout('grid')
                                    ->required()
                                    ->columnSpanFull(),
                            ])
                            ->collapsible()
                            ->cloneable()
                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'Gallery')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
