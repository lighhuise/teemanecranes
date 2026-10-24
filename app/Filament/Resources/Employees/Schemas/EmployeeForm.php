<?php

namespace App\Filament\Resources\Employees\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class EmployeeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->columns(1)
            ->components([
                Section::make('Details')
                    ->columns(2)
                    ->schema([
                        SpatieMediaLibraryFileUpload::make('image')
                            ->collection('default')
                            ->disk('public')
                            ->image()
                            ->imageEditor()
                            ->columnSpanFull(),
                        TextInput::make('first_name')
                            ->required(),
                        TextInput::make('last_name')
                            ->required(),
                        TextInput::make('nickname'),
                        DatePicker::make('birthday')
                            ->required(),
                        TextInput::make('branch_location')
                            ->required(),
                        TextInput::make('role')
                            ->required(),
                        TextInput::make('department')
                            ->required(),
                        Select::make('superior_id')
                            ->relationship('superior', 'first_name'),
                        Textarea::make('bio')
                            ->columnSpanFull(),
                    ]),
            ]);
    }
}
