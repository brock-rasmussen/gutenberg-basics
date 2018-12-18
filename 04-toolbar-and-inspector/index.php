<?php
function gbasics_register_block_04() {
	wp_register_script(
		'gbasics-block-04',
		plugins_url('/04-toolbar-and-inspector/editor.js', GBASICS_FILE),
		['wp-blocks'],
		filemtime(GBASICS_DIR . '04-toolbar-and-inspector/editor.js'),
		true
	);
	wp_register_style(
		'gbasics-block-04-style',
		plugins_url('/04-toolbar-and-inspector/style.css', GBASICS_FILE),
		['wp-edit-blocks'],
		filemtime(GBASICS_DIR . '04-toolbar-and-inspector/style.css')
	);

	register_block_type('gbasics/block-04', [
		'editor_script' => 'gbasics-block-04',
		'style' => 'gbasics-block-04-style',
	]);
}
add_action('init', 'gbasics_register_block_04');
