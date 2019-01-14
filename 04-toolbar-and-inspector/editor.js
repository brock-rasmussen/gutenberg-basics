(function() {
    const el = wp.element.createElement;
    const { Fragment } = wp.element;

    const {
        BlockControls,
        AlignmentToolbar,
        InspectorControls,
        RichText
    } = wp.editor;

    const {
        ToggleControl,
        PanelBody,
    } = wp.components;

    wp.blocks.registerBlockType('gbasics/block-04', {
        title: 'Basic - 04',
        description: 'A block with additional controls.',
        category: 'common',
        icon: {
            background: '#FFF286',
            foreground: '#0064A8',
            src: el('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24 }, [
                el('path', { d: 'M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9L12 12.72 18.82 9 12 5.28z', opacity: .3 }),
                el('path', { d: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z' }),
            ]),
        },

        supports: {
            align: true,
            anchor: true,
        },

        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'h2',
                default: '04 - Toolbar and Inspector Controls',
            },

            align: {
                type: 'string',
                default: undefined,
            },
            anchor: {
                type: 'string',
            },
            textAlign: {
                type: 'string',
            },
            strike: {
                type: 'boolean',
                default: false,
            },
        },

        edit({ attributes, className, setAttributes }) {
            return el(Fragment, null, [
                el(BlockControls, null, [
                    el(AlignmentToolbar, {
                        value: attributes.textAlign,
                        onChange: (textAlign) => setAttributes({textAlign}),
                    })
                ]),
                el(InspectorControls, null, [
                    el(PanelBody, {
                        title: 'Text Decoration',
                        initialOpen: false,
                    }, [
                        el(ToggleControl, {
                            label: 'Strike',
                            checked: attributes.strike,
                            onChange: (strike) => setAttributes({strike}),
                        }),
                    ]),
                ]),
                el(RichText, {
                    tagName: 'h2',
                    className,
                    style: {
                        textAlign: attributes.textAlign,
                        textDecoration: attributes.strike ? 'line-through' : false,
                    },
                    onChange: (content) => setAttributes({content}),
                    value: attributes.content,
                }),
            ]);
        },

        save({ attributes }) {
            return el(RichText.Content, {
                tagName: 'h2',
                style: {
                    textAlign: attributes.textAlign,
                    textDecoration: attributes.strike ? 'line-through' : false,
                },
                value: attributes.content,
            });
        }
    });
})();
