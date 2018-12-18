(function() {
    const el = wp.element.createElement;
    const { RichText } = wp.editor;

    wp.blocks.registerBlockType('gbasics/block-03', {
        title: 'Basic - 03',
        description: 'A block with an editable field.',
        category: 'common',
        icon: {
            background: '#FFF286',
            foreground: '#0064A8',
            src: el('svg', { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 24 }, [
                el('path', { d: 'M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9L12 12.72 18.82 9 12 5.28z', opacity: .3 }),
                el('path', { d: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z' }),
            ]),
        },

        attributes: {
            content: {
                type: 'string',
                source: 'html',
                selector: 'h2',
                default: '03 - Attributes and Editable Fields',
            }
        },

        edit({ attributes, className, setAttributes }) {
            return el(RichText, {
                tagName: 'h2',
                className,
                style: {
                    textDecoration: 'line-through',
                },
                onChange: (content) => setAttributes({ content }),
                value: attributes.content,
            });
        },

        save({ attributes }) {
            return el(RichText.Content, {
                tagName: 'h2',
                style: {
                    textDecoration: 'line-through',
                },
                value: attributes.content,
            });
        }
    });
})();
