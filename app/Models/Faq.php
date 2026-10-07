<?php

namespace App\Models;

use App\Traits\ClearsCache;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    use ClearsCache;

    protected $fillable = [
        'question',
        'answer',
        'is_active',
        'sort_order',
    ];
}
