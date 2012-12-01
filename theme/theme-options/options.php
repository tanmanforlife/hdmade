<?php

    add_action('admin_menu', 'theme_options_create');

    function theme_options_create() {
        //create new top-level menu
        add_menu_page('Site Options', 'Site Options', 'administrator', __FILE__, 'site_options_page','',58);
        //call register settings function
        add_action( 'admin_init', 'register_mysettings' );
    }

    function register_mysettings() {
        register_setting( 'theme_settings_group', 'show_timer' );
        register_setting( 'theme_settings_group', 'ticket_text' );
        register_setting( 'theme_settings_group', 'twitter_handles' );
    }

    function site_options_page() { ?>

        <div class="wrap">
            <h2>Site Options</h2>
            <form method="post" action="options.php">
                <?php settings_fields('theme_settings_group'); ?>
                <?php if (get_option('show_timer') != '' ) { $c = true; } ?>

                <table class="form-table">

                    <tr valign="top">
                        <th scope="row"><label for="ticket_text">Ticket Text</label></th>
                        <td><textarea rows="10" cols="40" name="ticket_text"><?php echo get_option('ticket_text') ?></textarea></td>
                    </tr>


                    <tr valign="top">
                        <th scope="row"><label for="show_timer">Show Timer?</label></th>
                        <td><input type="checkbox" name="show_timer" <?php if ($c == true) { echo "checked = 'checked'"; }?> /></td>
                    </tr>


                    <tr valign="top">
                        <th scope="row"><label for="twitter_handles">Twitter Feed (Separate account names with a comma) and contain <strong>no spaces</strong></label></th>
                        <td><textarea rows="10" cols="40" name="twitter_handles"><?php echo get_option('twitter_handles') ?></textarea></td>
                    </tr>



                </table>

                    <input type="submit" class="button-primary" value="<?php _e('Update Site Options') ?>" />

            </form>
        </div>
    <?php }