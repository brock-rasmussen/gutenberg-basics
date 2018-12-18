<?php
/**
 * Plugin Name: Gutenberg Basics
 * Description: An introduction to developing blocks.
 * Author: Brock Rasmussen
 * Text Domain: gbasics
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

// Exit if accessed directly
if (!defined('ABSPATH')) exit;

define('GBASICS_FILE', __FILE__);
define('GBASICS_DIR', trailingslashit(dirname(GBASICS_FILE)));
define('GBASICS_URL', plugins_url('/', GBASICS_FILE));

require_once '01-basic-block/index.php';
require_once '02-styles/index.php';
require_once '03-attributes-and-editable-fields/index.php';
require_once '04-toolbar-and-inspector/index.php';
require_once '05-build-your-own/index.php';
