# Kirby 3 Plausible
Frontend snippet and Kirby panel for [Plausible](https://plausible.io) analytics.

Plausible is a lightweight and open-source website analytics tool. No cookies and fully compliant with GDPR, CCPA and PECR. Made and hosted in the EU.

## Installation

### Download

Download and copy this repository to `/site/plugins/kirby3-plausible`.

## Setup

### Settings

1. Create a shared link without password at https://plausible.io/docs/shared-links
2. Set `rowdyrabouw.plausible.domain` in config.php for `data-domain` in the snippet
3. Set `rowdyrabouw.plausible.sharedLink` in config.php for the panel

You can also set `rowdyrabouw.plausible.theme` to overwrite the default (light) theme in the Kirby panel. This can be either `light` or `dark`.

Add settings to your config/config.php
```php
<?php
return [
  'rowdyrabouw.plausible' => [
	'domain' => 'example.com', // used in snippet
    'theme' => 'light', // light or dark; used in panel
	'sharedLink' => 'https://plausible.io/share/example.com?auth=vugsdGWpgFRI4S9nCWmRY' // used in panel
  ]
];
```

### Frontend snippet
Place the frontend snippet inside the head tag.
Analytics logging is automatically disabled when Kirby is in debug mode.
```php
<?php snippet('rowdyrabouw/plausible'); ?>
```