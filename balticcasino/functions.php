<?php

// Wordpress settings
add_theme_support('menus');
add_theme_support('custom-logo');

// Load main JS file
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('custom.min.js', get_template_directory_uri() . '/scripts.min.js', array('jquery'));
});

// Allow to upload SVG
function cc_mime_types($mimes)
{
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

add_filter('upload_mimes', 'cc_mime_types');

// Remove "JQMIGRATE: Migrate is installed, version 1.4.1" notification from console
add_action('wp_default_scripts', function ($scripts) {
    if (!empty($scripts->registered['jquery'])) {
        $scripts->registered['jquery']->deps = array_diff($scripts->registered['jquery']->deps, array('jquery-migrate'));
    }
});

// Hide admin bar
show_admin_bar(false);

?>

