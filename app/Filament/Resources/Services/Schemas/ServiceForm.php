<?php

namespace App\Filament\Resources\Services\Schemas;

use Filament\Forms\Components\Builder;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class ServiceForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Details')
                    ->columns(1)
                    ->schema([
                        SpatieMediaLibraryFileUpload::make('featured_image')
                            ->label('Featured Image')
                            ->collection('featured_image')
                            ->disk('public')
                            ->image()
                            ->imageEditor()
                            ->columnSpanFull(),

                        TextInput::make('title')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('slug')
                            ->required()
                            ->maxLength(255),

                        TextInput::make('short_description')
                            ->maxLength(255)
                            ->columnSpanFull(),

                        RichEditor::make('description')
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

                Section::make('Content Blocks')
                    ->description('Add and reorder content blocks. Each block can be a text section, image, gallery, video embed, or a call to action.')
                    ->schema([
                        Builder::make('content_blocks')
                            ->label(false)
                            ->reorderable()
                            ->collapsible()
                            ->cloneable()
                            ->columnSpanFull()
                            ->blocks([
                                Block::make('rich_text')
                                    ->label('Rich Text')
                                    ->icon('heroicon-o-document-text')
                                    ->schema([
                                        RichEditor::make('content')
                                            ->label('Content')
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
                                            ->required()
                                            ->columnSpanFull(),
                                    ]),

                                Block::make('image')
                                    ->label('Image')
                                    ->icon('heroicon-o-photo')
                                    ->schema([
                                        FileUpload::make('image')
                                            ->label('Image')
                                            ->disk('public')
                                            ->directory('services/blocks')
                                            ->image()
                                            ->imageEditor()
                                            ->required()
                                            ->columnSpanFull(),

                                        TextInput::make('caption')
                                            ->label('Caption (optional)')
                                            ->maxLength(255),

                                        TextInput::make('alt')
                                            ->label('Alt text')
                                            ->maxLength(255),
                                    ]),

                                Block::make('gallery')
                                    ->label('Image Gallery')
                                    ->icon('heroicon-o-rectangle-stack')
                                    ->schema([
                                        FileUpload::make('images')
                                            ->label('Images')
                                            ->disk('public')
                                            ->directory('services/blocks/galleries')

                                            ->image()
                                            ->imageEditor()
                                            ->multiple()
                                            ->reorderable()
                                            ->panelLayout('grid')
                                            ->required()
                                            ->columnSpanFull(),

                                        TextInput::make('caption')
                                            ->label('Gallery caption (optional)')
                                            ->maxLength(255),
                                    ]),

                                Block::make('video')
                                    ->label('Video Embed')
                                    ->icon('heroicon-o-play-circle')
                                    ->schema([
                                        TextInput::make('url')
                                            ->label('YouTube or Vimeo URL')
                                            ->url()
                                            ->required()
                                            ->placeholder('https://www.youtube.com/watch?v=...'),

                                        TextInput::make('caption')
                                            ->label('Caption (optional)')
                                            ->maxLength(255),
                                    ]),

                                Block::make('cta')
                                    ->label('Call to Action')
                                    ->icon('heroicon-o-cursor-arrow-rays')
                                    ->schema([
                                        TextInput::make('heading')
                                            ->label('Heading')
                                            ->required()
                                            ->maxLength(255),

                                        Textarea::make('text')
                                            ->label('Supporting text')
                                            ->rows(3)
                                            ->columnSpanFull(),

                                        TextInput::make('button_label')
                                            ->label('Button label')
                                            ->required()
                                            ->maxLength(100),

                                        TextInput::make('button_url')
                                            ->label('Button URL')
                                            ->url()
                                            ->required(),
                                    ]),

                                Block::make('media_text')
                                    ->label('Media & Text')
                                    ->icon('heroicon-o-view-columns')
                                    ->schema([
                                        TextInput::make('heading')
                                            ->label('Heading')
                                            ->maxLength(255),

                                        TextInput::make('subheading')
                                            ->label('Subheading')
                                            ->maxLength(255),

                                        RichEditor::make('content')
                                            ->label('Text Content')
                                            ->toolbarButtons([
                                                'bold', 'italic', 'link', 'bulletList', 'orderedList', 'redo', 'undo',
                                            ])
                                            ->columnSpanFull(),

                                        TextInput::make('button_label')
                                            ->label('Button Label (Optional)')
                                            ->maxLength(100),

                                        TextInput::make('button_url')
                                            ->label('Button URL (Optional)')
                                            ->url(),

                                        FileUpload::make('images')
                                            ->label('Image(s)')
                                            ->disk('public')
                                            ->directory('services/blocks/media')
                                            ->image()
                                            ->imageEditor()
                                            ->multiple()
                                            ->reorderable()
                                            ->panelLayout('grid')
                                            ->required()
                                            ->columnSpanFull(),

                                        Select::make('image_position')
                                            ->label('Image Position')
                                            ->options([
                                                'left' => 'Left',
                                                'right' => 'Right',
                                            ])
                                            ->default('right')
                                            ->required(),

                                        TextInput::make('stat_card_value')
                                            ->label('Stat Card Value (e.g. 50+)')
                                            ->maxLength(255),

                                        TextInput::make('stat_card_label')
                                            ->label('Stat Card Label (e.g. Years Experience)')
                                            ->maxLength(255),
                                    ]),
                            ]),
                    ]),
            ]);
    }
}
