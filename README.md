# Gutenberg Basics

This will only be a basic introduction to Gutenberg. For more in-depth information, reference the
[Gutenberg Handbook](https://wordpress.org/gutenberg/handbook/) and/or the
[Gutenberg Repository](https://github.com/WordPress/gutenberg/tree/master/packages).

## PHP

In order to create a custom block to be used in the Gutenberg editor, the block need to first be registered with PHP
using the [register_block_type](https://developer.wordpress.org/reference/functions/register_block_type/) function,
which accepts a block name and a configuration object as its arguments. The block name must follow a
`namespace/block-name` format. The configuration object provides the handles for the registered scripts and styles and
the function name for a server-side rendered block.

| Property | Description |
| --- | --- |
| `editor_script` (required) | Handle of the script that is used to register the block and display it in the editor. |
| `editor_style` | Handle of the stylesheet for the admin-side styles. |
| `script` | Handle of the script for admin and client-side JavaScript. |
| `style` | Handle of the stylesheet for admin and client-side styles. |
| `render_callback` | Callback used to server-side render dynamic blocks (e.g. latest posts, etc.). |

## JavaScript (`editor_script`)

The JavaScript to register the block is similar to the PHP function in that it also receives a block name (the same
`namespace/block-name` used to register the block in PHP), and a configuration object as its arguments.

### Required Properties

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`category`</td>
            <td>`String`</td>
            <td>Block category in the editor. Core categories include `common`, `formatting`, `layout`, `widgets`, and `embed`.</td>
        </tr>
        <tr>
            <td>`edit`</td>
            <td>`Function`</td>
            <td>
                A function that returns the markup of the block for the editor. It receives an object as an argument.
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>`attributes`</td>
                            <td>`Object`</td>
                            <td>Values from the block data store.</td>
                        </tr>
                        <tr>
                            <td>`className`</td>
                            <td>`String`</td>
                            <td>The class name for the wrapper element. Unlike the `save` function it is not automatically added to the block root element.</td>
                        </tr>
                        <tr>
                            <td>`isSelected`</td>
                            <td>`Boolean`</td>
                            <td>Whether the block is currently selected or not.</td>
                        </tr>
                        <tr>
                            <td>`setAttributes`</td>
                            <td>`Function`</td>
                            <td>A function that allows the block to update the block data store. It receives an object with the attribute(s) as key(s), and the new value(s) as the property(ies).</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>`save`</td>
            <td>`Function`</td>
            <td>
                A function that returns the markup of the block that will be saved to the database as part of the post_content. It receives an object as an argument:
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>`attributes`</td>
                            <td>`Object`</td>
                            <td>Values from the block data store.</td>
                        </tr>
                        <tr>
                            <td>`className`</td>
                            <td>`String`</td>
                            <td>The class name for the wrapper element. It is automatically added to the block root element.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>`title`</td>
            <td>`String`</td>
            <td>Display title of the block.</td>
        </tr>
    </tbody>
</table>

### Optional Properties

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>`attributes`</td>
            <td>`Object`</td>
            <td>The data store for the block.</td>
        </tr>
        <tr>
            <td>`description`</td>
            <td>`String`</td>
            <td>A short description shown in the block inspector.</td>
        </tr>
        <tr>
            <td>`icon`</td>
            <td>`String`, `Object`</td>
            <td>
                WordPress Dashicon name, custom svg element, or a configuration object.
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>`keywords`</td>
            <td>`Array`</td>
            <td>Block aliases to help with discoverability in the block inserter.</td>
        </tr>
        <tr>
            <td>`parent`</td>
            <td>`Array`</td>
            <td>Restrict block availability only within the specified blocks.</td>
        </tr>
        <tr>
            <td>`styles`</td>
            <td>`Array`</td>
            <td>Alternative block styles. A class name is added to the block's wrapper which can be targeted to apply the style variation.</td>
        </tr>
        <tr>
            <td>`supports`</td>
            <td>`Object`</td>
            <td>
                Additional features the block supports.
                <table>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>`align`</td>
                            <td>`Boolean`, `Array`</td>
                            <td>Supports block alignment or specified block alignments - `left`, `right`, `center`, `full`, and `wide`.</td>
                        </tr>
                        <tr>
                            <td>`alignWide`</td>
                            <td>`Boolean`</td>
                            <td>If the theme allows wide alignment, disable wide alignment for this block.</td>
                        </tr>
                        <tr>
                            <td>`anchor`</td>
                            <td>`Boolean`</td>
                            <td>Add a field to define an id.</td>
                        </tr>
                        <tr>
                            <td>`className`</td>
                            <td>`Boolean`</td>
                            <td>Allow Gutenberg to automatically add a class name to the block root element.</td>
                        </tr>
                        <tr>
                            <td>`customClassName`</td>
                            <td>`Boolean`</td>
                            <td>Adds a field to define additional class names for the block.</td>
                        </tr>
                        <tr>
                            <td>`html`</td>
                            <td>`Boolean`</td>
                            <td>Allow a block's markup to be edited as html individually.</td>
                        </tr>
                        <tr>
                            <td>`inserter`</td>
                            <td>`Boolean`</td>
                            <td>Show the block in the inserter.</td>
                        </tr>
                        <tr>
                            <td>`multiple`</td>
                            <td>`Boolean`</td>
                            <td>Allow multiple instances of the block per post.</td>
                        </tr>
                        <tr>
                            <td>`reusable`</td>
                            <td>`Boolean`</td>
                            <td>Allow the option to convert the block into a reusable block.</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td>`transforms`</td>
            <td>`Array`</td>
            <td>Rules for what other blocks a block can be transformed to and from. It can transform from/to another block, a shortcode, a regular expression, a file, or a raw DOM node.</td>
        </tr>
        <tr>
            <td>`deprecated`</td>
            <td>`Array`</td>
            <td>Rules to handle block markup changes to prevent breaking changes.</td>
        </tr>
    </tbody>
</table>
