
import { expect } from 'chai'

global.expect = expect

import { JSDOM } from 'jsdom'

var globals =
[
	'Node',
	'Element',
	'HTMLDivElement',

	'DocumentFragment',
	'Text',
	'CustomEvent',
	'document'
]
var { window } = (new JSDOM)

for (let g of globals)
{
	global[g] = window[g]
}
