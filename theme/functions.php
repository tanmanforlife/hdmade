<?php

    // Custom Post Library from https://github.com/JeffreyWay/Easy-WordPress-Custom-Post-Types
    require 'inc/custom-posts-library.php';
    require 'theme-options/options.php';

    // Lose the admin bar
    add_filter('show_admin_bar', '__return_false');

    // Add Support for post thumbnails
    add_theme_support('post-thumbnails');

    // Instantiate the class
    $embed = new JW_Post_Type('Carousel Content', array (
        'supports' => array('title', 'thumbnail'),
        'labels' => array(  'name' => 'Carousel',
                            'singular_name' => 'Carousel',
                            'add_new' => 'Add New Item to Carousel',
                            'all_items' => 'All Carousel Content',
                            'add_new_item' => 'Add New Item to Carousel',
                            'edit_item' => 'Edit Item',
                        )
    ));



    // Add Meta Box for the embeddable vimeo link
    $embed->add_meta_box( 'video', array(
        'Video Link' => 'text',
    ));

    // Add non-required stuff
    add_action('admin_menu', 'hide_editor');
    function hide_editor() {
        remove_menu_page('link-manager.php');
        remove_menu_page('edit-comments.php');
        remove_menu_page('edit.php?post_type=page');
        remove_menu_page('edit.php');
    }


add_action('do_meta_boxes', 'change_image_box');
function change_image_box()
{
    remove_meta_box( 'postimagediv', 'carouselcontent', 'side' );
    add_meta_box('postimagediv', __('Add Image'), 'post_thumbnail_meta_box', 'carouselcontent', 'normal', 'high');
}


?>