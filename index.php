<?php

Kirby::plugin("rowdyrabouw/plausible", [
  'api' => [
    'routes' => [
      [
        'pattern' => 'analytics',
        'action'  => function () {
          $link = option('rowdyrabouw.plausible.sharedLink');
          $theme = option('rowdyrabouw.plausible.theme') ?? 'light';
          $sharedLink = '';
          if ($link): 
            $sharedLink = $link.'&embed=true&theme='.$theme.'&background=transparent';
          endif;
          return json_encode($sharedLink);
        }
      ]
    ]
  ],
  'snippets' => [
		'rowdyrabouw/plausible' => __DIR__ . '/snippets/plausible.php'
	]
]);
