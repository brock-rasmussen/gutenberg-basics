<?php
function gbasics_register_block_02() {
	wp_register_script(
		'gbasics-block-02',
		plugins_url('/02-styles/editor.js', GBASICS_FILE),
		['wp-blocks'],
		filemtime(GBASICS_DIR . '02-styles/editor.js'),
		true
	);
	wp_register_style(
		'gbasics-block-02-style',
		plugins_url('/02-styles/style.css', GBASICS_FILE),
		['wp-edit-blocks'],
		filemtime(GBASICS_DIR . '02-styles/style.css')
	);

	register_block_type('gbasics/block-02', [
		'editor_script' => 'gbasics-block-02',
		'style' => 'gbasics-block-02-style',
	]);
}
add_action('init', 'gbasics_register_block_02');
