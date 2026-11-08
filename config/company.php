<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Company Statistics
    |--------------------------------------------------------------------------
    |
    | Key operational and marketing statistics displayed across the website.
    | Updating these values will automatically reflect in the hero section,
    | stats bars, floating cards, badges, and marketing copy.
    |
    */
    'stats' => [
        'years_experience' => [
            'value' => 100,
            'suffix' => '+',
            'display' => '100+',
            'label' => 'Years of Experience',
            'title' => "Years of\nExperience",
            'short_label' => 'Experience',
        ],
        'projects_completed' => [
            'value' => 5000,
            'suffix' => '+',
            'display' => '5000+',
            'label' => 'Successful Projects',
            'title' => "Successful\nProjects",
            'short_label' => 'Projects Completed',
        ],
        'combined_experience' => [
            'value' => 100,
            'suffix' => '+',
            'display' => '100+',
            'label' => 'Years Combined Experience',
            'title' => "Combined\nExperience",
            'short_label' => '100+ Years Experience',
        ],
        'max_capacity' => [
            'value' => 440,
            'suffix' => 'T',
            'display' => '440T',
            'tons_label' => '440 tons',
            'label' => 'Maximum Fleet Capacity',
            'title' => "Max Lift\nCapacity",
            'short_label' => 'Max Lift Capacity',
        ],
        'established_year' => [
            'value' => 2012,
            'display' => '2012',
            'label' => 'Established',
            'title' => 'Established',
        ],
        'availability' => [
            'value' => 24,
            'suffix' => '/7',
            'display' => '24/7',
            'label' => 'Operational 24/7',
            'title' => 'Availability',
            'short_label' => 'Availability',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Company Information & Contact Details
    |--------------------------------------------------------------------------
    */
    'name' => 'Teemane Cranes',
    'legal_name' => 'Teemane Heavy Haulage',
    'tagline' => 'A Cut Above The Rest',
    'description' => "The only name trusted to perform on South Africa's most demanding worksites. Unmatched excellence in crane hire, heavy lifting and specialised transport since 2012.",

    'contact' => [
        'phone' => '084 263 7690',
        'phone_tel' => '0842637690',
        'email' => 'enquiries@teemanecranes.co.za',
        'address' => [
            'street' => '6 Van Eck St',
            'suburb' => 'Bellville South',
            'city' => 'Cape Town',
            'postal_code' => '7530',
            'country' => 'South Africa',
            'formatted' => "6 Van Eck St, Bellville South,\nCape Town, 7530",
            'one_line' => '6 Van Eck St, Bellville South, Cape Town, 7530',
        ],
        'coordinates' => [
            'lat' => -33.926637890850294,
            'lng' => 18.645063943495657,
        ],
        'maps_url' => 'https://maps.google.com/?q=-33.926637890850294,18.645063943495657',
    ],

    /*
    |--------------------------------------------------------------------------
    | Credentials & Certifications
    |--------------------------------------------------------------------------
    */
    'credentials' => [
        ['label' => 'B-BBEE Certified'],
        ['label' => 'Red Seal Riggers'],
        ['label' => 'ISO 9001 & 14001'],
        ['label' => 'OHSAS 45001'],
        ['label' => 'Operational 24/7'],
    ],

];
