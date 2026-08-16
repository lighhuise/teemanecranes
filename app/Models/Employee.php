<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Employee extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $casts = [
        'birthday' => 'date',
    ];

    /**
     * Use slug for route model binding.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * Auto-generate a unique slug when saving if none is set.
     */
    protected static function booted(): void
    {
        static::saving(function (Employee $employee) {
            if (empty($employee->slug)) {
                $base = Str::slug($employee->first_name.' '.$employee->last_name);
                $slug = $base;
                $count = 1;

                while (static::where('slug', $slug)->where('id', '!=', $employee->id)->exists()) {
                    $slug = $base.'-'.$count++;
                }

                $employee->slug = $slug;
            }
        });
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('webp')
            ->format('webp')
            ->nonQueued();
    }

    public function superior(): BelongsTo
    {
        return $this->belongsTo(Employee::class, 'superior_id');
    }

    public function subordinates(): HasMany
    {
        return $this->hasMany(Employee::class, 'superior_id');
    }
}
