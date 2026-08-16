<?php

namespace App\Filament\Resources\Employees\Schemas;

use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Schemas\Schema;

use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class EmployeeForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
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
            ]);
    }
}
