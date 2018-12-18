<?php
function gbasics_register_block_03() {
	wp_register_script(
		'gbasics-block-03',
		plugins_url('/03-attributes-and-editable-fields/editor.js', GBASICS_FILE),
		['wp-blocks'],
		filemtime(GBASICS_DIR . '03-attributes-and-editable-fields/editor.js'),
		true
	);
	wp_register_style(
		'gbasics-block-03-style',
		plugins_url('/03-attributes-and-editable-fields/style.css', GBASICS_FILE),
		['wp-edit-blocks'],
		filemtime(GBASICS_DIR . '03-attributes-and-editable-fields/style.css')
	);

	register_block_type('gbasics/block-03', [
		'editor_script' => 'gbasics-block-03',
		'style' => 'gbasics-block-03-style',
	]);
}
add_action('init', 'gbasics_register_block_03');
