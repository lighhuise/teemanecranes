<?php

namespace App\Filament\Resources\Projects\Schemas;

use Filament\Forms\Components\Builder;
use Filament\Forms\Components\Builder\Block;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\TagsInput;
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

                        TextInput::make('location')
                            ->label('Location')
                            ->placeholder('e.g. Cape Town, Western Cape')
                            ->maxLength(255),

                        DatePicker::make('project_date')
                            ->label('Project Date')
                            ->helperText('Date when the project was executed / created.')
                            ->native(false),

                        TextInput::make('video_url')
                            ->label('Video URL')
                            ->placeholder('https://www.youtube.com/watch?v=... or https://vimeo.com/...')
                            ->url()
                            ->helperText('YouTube or Vimeo video link.')
                            ->maxLength(255),

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
                            ->dehydrateStateUsing(fn ($state) => is_array($state) ? array_values(array_filter($state)) : $state)
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
                                    ->dehydrateStateUsing(fn ($state) => is_array($state) ? array_values(array_filter($state)) : $state)
                                    ->required()
                                    ->columnSpanFull(),
                            ])
                            ->collapsible()
                            ->cloneable()
                            ->itemLabel(fn (array $state): ?string => $state['title'] ?? 'Gallery')
                            ->columnSpanFull(),
                    ]),

                Section::make('Content Blocks')
                    ->description('Add and reorder modular content blocks such as Marquee Dividers, Rich Text, Images, and CTAs.')
                    ->collapsible()
                    ->schema([
                        Builder::make('content_blocks')
                            ->label(false)
                            ->reorderable()
                            ->collapsible()
                            ->cloneable()
                            ->columnSpanFull()
                            ->blocks([
                                Block::make('line2_divider')
                                    ->label('Line 2 Marquee Divider')
                                    ->icon('heroicon-o-bars-2')
                                    ->columns(2)
                                    ->schema([
                                        Section::make('Display & Dimensions')
                                            ->columns(2)
                                            ->schema([
                                                TextInput::make('min_height')
                                                    ->label('Min Height (px)')
                                                    ->numeric()
                                                    ->default(220)
                                                    ->suffix('px')
                                                    ->helperText('Minimum height of the divider banner in pixels.'),

                                                Select::make('padding_y')
                                                    ->label('Vertical Spacing')
                                                    ->options([
                                                        'compact' => 'Compact (py-8)',
                                                        'normal' => 'Standard (py-16)',
                                                        'spacious' => 'Spacious (py-24)',
                                                        'huge' => 'Expanded (py-32)',
                                                    ])
                                                    ->default('normal'),

                                                Select::make('theme_style')
                                                    ->label('Color Theme')
                                                    ->options([
                                                        'primary' => 'Brand Primary (Gold Radial)',
                                                        'dark' => 'Industrial Dark (Slate/Black)',
                                                        'muted' => 'Subtle Muted',
                                                    ])
                                                    ->default('primary'),

                                                Select::make('watermark_opacity')
                                                    ->label('Marquee Text Opacity')
                                                    ->options([
                                                        '0.05' => '5% - Ultra Subtle',
                                                        '0.10' => '10% - Standard',
                                                        '0.15' => '15% - Prominent',
                                                        '0.20' => '20% - High Contrast',
                                                    ])
                                                    ->default('0.10'),
                                            ]),

                                        Section::make('Centerpiece & Side Text')
                                            ->columns(2)
                                            ->schema([
                                                Toggle::make('show_diamond')
                                                    ->label('Show Central Diamond Logo')
                                                    ->default(true),

                                                Toggle::make('show_side_texts')
                                                    ->label('Show Architectural Side Texts')
                                                    ->default(true),

                                                TextInput::make('left_text')
                                                    ->label('Left Text')
                                                    ->placeholder('A CUT ABOVE')
                                                    ->default('A CUT ABOVE')
                                                    ->maxLength(50),

                                                TextInput::make('right_text')
                                                    ->label('Right Text')
                                                    ->placeholder('THE REST')
                                                    ->default('THE REST')
                                                    ->maxLength(50),
                                            ]),

                                        Section::make('Ticker & Animation Effects')
                                            ->columns(2)
                                            ->schema([
                                                TextInput::make('velocity')
                                                    ->label('Scroll Velocity (Speed)')
                                                    ->numeric()
                                                    ->default(45)
                                                    ->helperText('Speed of background scrolling text.'),

                                                Toggle::make('show_beam')
                                                    ->label('Show Animated Light Beam')
                                                    ->default(true),

                                                Toggle::make('show_dots')
                                                    ->label('Show Technical Dot Grid')
                                                    ->default(true),

                                                Toggle::make('show_dashed_borders')
                                                    ->label('Show Dashed Precision Insets')
                                                    ->default(true),

                                                TagsInput::make('velocity_texts')
                                                    ->label('Background Watermark Ticker Phrases')
                                                    ->placeholder('Type phrase and press Enter')
                                                    ->default(['TEEMANE CRANES', 'A CUT ABOVE THE REST'])
                                                    ->helperText('Phrases that scroll continuously in the background.')
                                                    ->columnSpanFull(),
                                            ]),
                                    ]),

                                Block::make('rich_text')
                                    ->label('Rich Text')
                                    ->icon('heroicon-o-document-text')
                                    ->schema([
                                        RichEditor::make('content')
                                            ->label('Content')
                                            ->required()
                                            ->columnSpanFull(),

                                        Select::make('max_width')
                                            ->label('Content Max Width')
                                            ->options([
                                                'max-w-3xl' => 'Small (3xl)',
                                                'max-w-4xl' => 'Medium (4xl)',
                                                'max-w-5xl' => 'Large (5xl)',
                                                'max-w-none' => 'None (Default)',
                                            ])
                                            ->default('max-w-none')
                                            ->columnSpanFull(),

                                        Toggle::make('darker_background')
                                            ->label('Slightly Darker Background')
                                            ->default(false)
                                            ->columnSpanFull(),
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

                                        Toggle::make('darker_background')
                                            ->label('Slightly Darker Background')
                                            ->default(false)
                                            ->columnSpanFull(),
                                    ]),
                            ]),
                    ]),
            ]);
    }
}
