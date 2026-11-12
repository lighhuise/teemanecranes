<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\Faqs\FaqResource;
use App\Filament\Resources\Projects\ProjectResource;
use App\Filament\Resources\Services\ServiceResource;
use App\Models\Faq;
use App\Models\Project;
use App\Models\Service;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 0;

    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        $projectsCount = Project::count();
        $activeProjects = Project::where('is_active', true)->count();

        $servicesCount = Service::count();
        $activeServices = Service::where('is_active', true)->count();

        $faqsCount = Faq::count();
        $activeFaqs = Faq::where('is_active', true)->count();

        return [
            Stat::make('Total Projects', (string) $projectsCount)
                ->description("{$activeProjects} active")
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->descriptionColor('success')
                ->icon(Heroicon::OutlinedBriefcase)
                ->color('primary')
                ->url(ProjectResource::getUrl('index')),

            Stat::make('Total Services', (string) $servicesCount)
                ->description("{$activeServices} active")
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->descriptionColor('success')
                ->icon(Heroicon::OutlinedWrenchScrewdriver)
                ->color('primary')
                ->url(ServiceResource::getUrl('index')),

            Stat::make('Total FAQs', (string) $faqsCount)
                ->description("{$activeFaqs} active")
                ->descriptionIcon(Heroicon::OutlinedCheckCircle)
                ->descriptionColor('success')
                ->icon(Heroicon::OutlinedQuestionMarkCircle)
                ->color('primary')
                ->url(FaqResource::getUrl('index')),
        ];
    }
}
