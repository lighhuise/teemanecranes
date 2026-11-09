import { Calendar, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectListItem } from './types';

interface ProjectMetaBadgesProps {
    project: ProjectListItem;
    size?: 'default' | 'compact';
    className?: string;
}

export function ProjectMetaBadges({
    project,
    size = 'default',
    className,
}: ProjectMetaBadgesProps) {
    const isCompact = size === 'compact';

    if (!project.location && !project.project_date) {
        return null;
    }

    const itemClassName = cn(
        'inline-flex items-center font-mono text-xs font-bold tracking-wider text-muted-foreground uppercase',
        isCompact ? 'gap-1.5' : 'gap-2',
    );

    return (
        <div className={cn('flex flex-wrap items-center gap-x-4 gap-y-1.5', className)}>
            {project.location && (
                <span className={itemClassName}>
                    <MapPin className="size-3.5 shrink-0 text-primary" />
                    <span>{project.location}</span>
                </span>
            )}

            {project.project_date && (
                <span className={itemClassName}>
                    <Calendar className="size-3.5 shrink-0 text-primary" />
                    <span>{project.project_date}</span>
                </span>
            )}
        </div>
    );
}
