<?php
/**
 * Plugin Name:     UD Block: Team Cards Block
 * Description:     Container- und Karten-Block zur Darstellung von Teammitgliedern mit optionalen Kontaktdaten.
 * Version:         1.0.0
 * Author:          ulrich.digital gmbh
 * Author URI:      https://ulrich.digital/
 * License:         GPL v2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     team-cards-block-ud
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/helpers.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/render.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/enqueue.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/block-register.php';
