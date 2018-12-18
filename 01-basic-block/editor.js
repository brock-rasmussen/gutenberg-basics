(function () {
    const el = wp.element.createElement;

    wp.blocks.registerBlockType('gbasics/block-01', {
        title: 'Basic - 01',
        description: 'A block with an extremely basic setup.',
        category: 'common',
        icon: 'welcome-learn-more',

        edit() {
            return el('h2', null, '01 - Basic Block');
        },
        save() {
            return el('h2', null, '01 - Basic Block');
        },
    });
})();
