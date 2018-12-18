# Gutenberg Basics


## Block Registration
See the [WordPress Gutenberg Handbook](https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-registration/) for in-depth details on the block configuration.

### Required Attributes
| Property | Type | Description |
| --- | --- | --- |
| `category` | `String` | Block category in the editor. Core categories are 'common', 'formatting', 'layout', 'widgets', and 'embed'. |
| `edit` | `Function` | Function that describes the structure of your block in the editor. See below. |
| `save` | `Function` | Function that describes the way in which the different attributes should be combined into the final markup which is saved to the database as the post_content. See below. |
| `title` | `String` | Display title of the block. |

#### `edit`
The `edit` function receives an object with the following properties:
| Property | Type | Description |
| --- | --- | --- |
| `attributes` | `Object` | The values of the properties defined in the blocks `attributes` property. |
| `className` | `String` | The class name for the wrapper element. It is not automatically added. |
| `isSelected` | `Boolean` | Whether the block is currently selected or not. |
| `setAttributes` | `Function` | A function that allows the block to update individual attributes, or multiple attributes. It receives an object with data corresponding to the keys to be updated in the blocks `attributes`. |

#### `save`
The function receives an object argument with the following properties:
| Property | Type | Description |
| --- | --- | --- |
| `attributes` | `Object` | The values of the properties defined in the blocks `attributes` property. |
| `className` | `String` | The class name for the wrapper element. It is automatically added. |

### Optional Attributes
| Property | Type | Description |
| --- | --- | --- |
| `attributes` | `Object` | The data store for the block. |
| `description` | `String` | A short block description shown in the block inspector. |
| `icon` | `String` `Object` | WordPress Dashicon name, custom svg element, or configuration object. |
| `keywords` | `Array` | Block aliases to help search discoverability. |
| `parent` | `Array` | Restrict a block to only be available inside the specified blocks. |
| `styles` | `Array` | Alternative block styles. A class name is added to the block's wrapper which can be targeted to apply the style variation. |
| `supports` | `Object` | Additional features the block supports. See below. |
| `transforms` | `Array` | Rules for what a block can be transformed from and to. It can transform from/to another block, a shortcode, a regular expression, a file, a file, or a raw DOM node. |

#### `icon`
| Property | Type | Description |
| --- | --- | --- |
| `background` | `String` | Specify a background color to appear with the icon. |
| `foreground` | `String` | Specify a color for the icon. |
| `src` | `String` | Specify a dashicon or svg for the block. |

#### `supports`
| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `align` | `Boolean` `Array` | `false` | Add block controls to change the block alignment. Use an array to only support certain alignments which can include `left`, `right`, `center`, `full`, and `wide`. |
| `alignWide` | `Boolean` | `true` | If the theme allows wide alignment, disable this behavior for a single block by setting this to `false`. |
| `anchor` | `Boolean` | `false` | Adds a field to define an `id` and a button to copy the direct link. |
| `className` | `Boolean` | `true` | Gutenberg automatically adds a class in the format `.wp-block-your-block-name` to the root element for styling the block. Setting this to `false` will disable this functionality. |
| `customClassName` | `Boolean` | `true` | Remove support for the custom class name. |
| `html` | `Boolean` | `true` | Allow a block's markup to be edited individually. |
| `inserter` | `Boolean` | `true` | Show the block in the block inserter. If `false`, the block can only be inserted programmatically. |
| `multiple` | `Boolean` | `true` | Whether the block can be inserted multiple times in a post. |
| `reusable` | `Boolean` | `true` | Support the option to convert the block into a reusable block. |
