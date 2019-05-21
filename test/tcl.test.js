// TODO: more tests
// TODO: coverage

import { expect } from 'chai'

import tcl from '../tcl'
// import { tcls } from '../tcl'


describe('tcl', () =>
{
	var $body = document.body

	it('(E, C, S)', () =>
	{
		var $ = $div()

		tcl($, 'foo', true)
		ex_cl($, 'foo')

		tcl($, 'foo', false)
		tcl($, 'bar', true)
		tcl($, 'baz', new Object)
		ex_cl($, 'bar baz')
	})

	it('(E, C, S = toggle)', () =>
	{
		var $ = $div()

		tcl($, 'foo', null)
		ex_cl($, 'foo')

		tcl($, 'foo', null)
		ex_cl($, '')

		tcl($, 'foo', tcl)
		ex_cl($, 'foo')
	})

	it('(E, S, C)', () =>
	{
		var $ = $div()

		tcl($, true, 'foo')
		ex_cl($, 'foo')
	})

	it('(C, E, S)', () =>
	{
		var $ = $div()

		tcl('foo', $, true)
		ex_cl($, 'foo')
	})

	it('(C, S, E)', () =>
	{
		var $ = $div()

		tcl('foo', true, $)
		ex_cl($, 'foo')
	})

	it('(E)(…)', () =>
	{
		var $ = $div()

		var T = tcl($)

		T('foo', true)
		T('bar', true)
		T('baz', false)

		ex_cl($, 'foo bar')
	})

	it('(C)(…)', () =>
	{
		var $1 = $div()
		var $2 = $div()

		var F = tcl('foo')

		F($1, true)
		F($2, true)

		ex_cl($1, 'foo')
		ex_cl($2, 'foo')
	})

	function $div ()
	{
		$body.innerHTML = `<div></div>`

		return $body.querySelector('div')
	}

	function ex_cl ($, cl)
	{
		expect($.className).eq(cl)
	}
})
