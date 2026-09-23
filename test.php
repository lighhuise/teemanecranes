<?php
$html = file_get_contents('https://teemanecranes.test', false, stream_context_create(['ssl' => ['verify_peer' => false, 'verify_peer_name' => false]]));
preg_match('/data-page="([^"]+)"/', $html, $m);
$data = json_decode(htmlspecialchars_decode($m[1]), true);
echo json_encode($data['props']['services']);
