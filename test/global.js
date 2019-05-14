
import { JSDOM } from 'jsdom'

var globals =
[
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
