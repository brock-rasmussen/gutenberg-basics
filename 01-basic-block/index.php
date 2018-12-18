<?php
function gbasics_register_block_01() {
	wp_register_script(
		'gbasics-block-01',
		plugins_url('/01-basic-block/editor.js', GBASICS_FILE),
		['wp-blocks'],
		filemtime(GBASICS_DIR . '01-basic-block/editor.js'),
		true
	);

	register_block_type('gbasics/block-01', [
		'editor_script' => 'gbasics-block-01',
	]);
}
add_action('init', 'gbasics_register_block_01');
