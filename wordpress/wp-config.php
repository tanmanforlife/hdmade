<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

//REMOVE ME!!
define('WP_HOME','http://10.0.1.11:8888/wordpress');
define('WP_SITEURL','http://10.0.1.11:8888/wordpress');
define('SCRIPT_DEBUG', true);


// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Cd)c-sAc!uK<)F~m?u*+2rb_sPO_@nQ5TH#>_8wb/u;*MDo2,WL*0z0u_Osij3HI');
define('SECURE_AUTH_KEY',  'P,iC)MbW2kIdUrwdT}G{)-oj)+!iSv`u{[4BI48gmv7[@XOb7}|gMEo3T+C>aT4z');
define('LOGGED_IN_KEY',    'nk*dd|ht0]oM!N7rW,_+8`9x_t!IX>qr)Xl9g|jcHEz0LMTG||wLCmrM6#kZsTxL');
define('NONCE_KEY',        '^UOOL+iFMq_w9D4j@rGWv~B9(?U8 Ul)SZeYD!GNEui>vN*EDU|y.#) nl*Wc*6C');
define('AUTH_SALT',        'y=#yF%H|n-/?<9[+#QJPcQeSffk||(+|G7T[T!wf+AMMXrnveTfGgU-#p`6]g+0w');
define('SECURE_AUTH_SALT', '*.qlYK9SA:Nr0cn_Er0B)3O?$,B!cZhQ~C[~Zxp]J3kQAlKboj+.,rS/u7*4%v#(');
define('LOGGED_IN_SALT',   'XD<WXs ]$zlx]b[Xe3KF0:j<v@URem0ct^-dOh8E0ZNc;#JJe[OCO,FJ2L d? xd');
define('NONCE_SALT',       '|-($NH?(-o&=!+^x+*0#e:+:V+_6`8U>~CRe/m~2IU(5k!4U3a[c.W]>.{YzYGQ+');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
