
import 'console-ultimate'

import { JSDOM } from 'jsdom'

var globals =
[
	'Element',
	'CustomEvent',
	'document'
]
var { window } = (new JSDOM)

for (let g of globals)
{
	global[g] = window[g]
}


//
import qs from '../query'
import on from '../event'
import { emit } from '../event'

document.body.innerHTML = `<div>foo <span class='mark'>bar</span></div>`

var $body = document.body
var $div = qs($body, 'div')
var $span = qs($body, 'span')

on($div, 'e1', (e) => console.info('div', e.detail))
on($span, 'e1', (e) => console.info('span', e.detail))
on([ $div, '.mark' ], 'e1', (e) => console.info('delegated .mark', e.detail))
on([ $body, 'div' ], 'e1', (e) => console.info('delegated div', e.detail))

emit($span, 'e1', { f: 'span' })
emit($div, 'e1', { f: 'div' })
