
import { expect } from 'chai'

import qs from '../query'
import on from '../event'
import { emit } from '../event'


describe('event', () =>
{
	it('on and delegation', () =>
	{
		var $body = document.body

		$body.innerHTML = `<div>foo <span class='mark'>bar</span></div>`

		var $body = document.body
		var $div  = qs($body, 'div')
		var $span = qs($body, 'span')

		var buffer = []
		function push (name)
		{
			return (e) =>
			{
				buffer.push([ name, e.detail ])
			}
		}

		on($body, 'e1', push('body'))
		on($div,  'e1', push('div'))
		on($span, 'e1', push('span'))
		on([ $div, '.mark' ], 'e1', push('delegated .mark'))
		on([ $body, 'div' ],  'e1', push('delegated div'))

		on($div, 'e2', expect.fail)

		emit($span, 'e1', { n: 1, f: 'span' })
		emit($div,  'e1', { n: 2, f: 'div' })

		expect(buffer).deep.eq(
		[
			[ 'span', { n: 1, f: 'span' } ],
			[ 'div', { n: 1, f: 'span' } ],
			[ 'delegated .mark', { n: 1, f: 'span' } ],
			[ 'body', { n: 1, f: 'span' } ],
			[ 'delegated div', { n: 1, f: 'span' } ],

			[ 'div', { n: 2, f: 'div' } ],
			[ 'body', { n: 2, f: 'div' } ],
			[ 'delegated div', { n: 2, f: 'div' } ]
		])
	})

	it('disposer works', () =>
	{
		var c = 0
		var $body = document.body

		var off = on($body, 'e1', once)

		function once ()
		{
			c = (c + 1)
		}

		emit($body, 'e1')
		off()
		emit($body, 'e1')
		off()
		emit($body, 'e1')
		expect(c).eq(1)

		var off = on([ $body, '*' ], 'e2', once)

		emit($body, 'e2')
		off()
		emit($body, 'e2')
		off()
		emit($body, 'e1')
		expect(c).eq(2)
	})
})
