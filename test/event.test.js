
import { expect } from 'chai'

import qs from '../query'
import on from '../event'
import { emit } from '../event'


describe('event', () =>
{
	it('works', () =>
	{
		document.body.innerHTML = `<div>foo <span class='mark'>bar</span></div>`

		var $body = document.body
		var $div  = qs($body, 'div')
		var $span = qs($body, 'span')

		on($div, 'e1', (e) => console.info('div', e.detail))
		on($span, 'e1', (e) => console.info('span', e.detail))
		on([ $div, '.mark' ], 'e1', (e) => console.info('delegated .mark', e.detail))
		on([ $body, 'div' ], 'e1', (e) => console.info('delegated div', e.detail))

		emit($span, 'e1', { f: 'span' })
		emit($div, 'e1', { f: 'div' })

		expect(1).ok
	})
})
