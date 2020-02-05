
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

for (const g of globals)
{
	global[g] = window[g]
}
