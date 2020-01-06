/* eslint-disable max-len */

import qs from '../query'


describe('element', () =>
{
	var $body = document.body

	before(() =>
	{
		$body.innerHTML = `<div>foo <span class='foo'>bar <span class='bar'>X</span></span></div>`
	})

	it('queries', () =>
	{
		expect(qs('.bar').innerHTML).eq('X')
		expect(qs('.bar', $body).innerHTML).eq('X')
		expect(qs('.bar', qs('.foo')).innerHTML).eq('X')
		expect(qs('.bar', qs('.foo', $body)).innerHTML).eq('X')
	})

	it('swap works', () =>
	{
		expect(qs(qs($body, '.foo'), '.bar').innerHTML).eq('X')
	})

	it('always queries first', () =>
	{
		expect(qs('span').innerHTML).eq('bar <span class="bar">X</span>')
		expect(qs('span', qs('div')).innerHTML).eq('bar <span class="bar">X</span>')
		expect(qs($body, 'span').innerHTML).eq('bar <span class="bar">X</span>')
		expect(qs(qs('div'), 'span').innerHTML).eq('bar <span class="bar">X</span>')
	})
})
