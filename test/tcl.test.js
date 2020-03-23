
import tcl from '../tcl'
import { tc } from '../tcl'
import { tcls } from '../tcl'


describe('tcl', () =>
{
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

		tcl($, 'null', true)
		tcl($, 'tcl', true)
		tcl($, 'tc', true)
		tcl($, 'tcls', true)

		ex_cl($, 'null tcl tc tcls')

		tcl($, 'null', null)
		ex_cl($, 'tcl tc tcls')

		tcl($, 'tcl', tcl)
		ex_cl($, 'tc tcls')

		tcl($, 'tc', tc)
		ex_cl($, 'tcls')

		tcl($, 'tcls', tcls)
		ex_cl($, '')
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
})


describe('tcls', () =>
{
	it('null', () =>
	{
		var $ = $div()

		tcls($)
		ex_cl($, '')
	})

	it('string', () =>
	{
		var $ = $div()

		tcls($, 'foo')
		ex_cl($, 'foo')

		tcls($, 'foo', false)
		ex_cl($, '')

		tcls($, 'foo', null)
		ex_cl($, 'foo')

		tcls($, 'foo', null)
		ex_cl($, '')
	})

	it('array ()', () =>
	{
		var $ = $div()

		tcls($, [ 'foo', 'bar' ])
		ex_cl($, 'foo bar')

		tcls($, [ 'foo', 'bar' ])
		ex_cl($, 'foo bar')
	})

	it('array (true)', () =>
	{
		var $ = $div()

		tcls($, [ 'foo', 'bar' ], true)
		ex_cl($, 'foo bar')
	})

	it('array (false)', () =>
	{
		var $ = $div()

		tcls($, [ 'foo', 'bar', 'baz' ], true)
		tcls($, [ 'bar' ], false)
		ex_cl($, 'foo baz')
	})

	it('array (null)', () =>
	{
		var $ = $div()

		tcls($, [ 'foo', 'bar' ])
		tcls($, [ 'bar', 'baz' ], null)
		ex_cl($, 'foo baz')
	})

	it('iterable', () =>
	{
		var $ = $div()

		tcls($, new Set([ 'foo', 'bar' ]))
		ex_cl($, 'foo bar')
	})

	it('object ()', () =>
	{
		var $ = $div()

		tcls($, { foo: true, bar: true, baz: false })
		ex_cl($, 'foo bar')
	})

	it('object (true)', () =>
	{
		var $ = $div()

		tcls($, { foo: true, bar: true, baz: false }, true)
		ex_cl($, 'foo bar baz')
	})

	it('object (false)', () =>
	{
		var $ = $div()

		tcls($, { foo: true, bar: true, baz: false }, true)
		tcls($, { bar: true }, false)
		ex_cl($, 'foo baz')
	})

	it('object (null)', () =>
	{
		var $ = $div()

		tcls($, { foo: true, bar: false }, true)
		tcls($, { bar: false, baz: true }, null)
		ex_cl($, 'foo baz')
	})
})


var $body = document.body

function $div ()
{
	$body.innerHTML = `<div></div>`

	return $body.querySelector('div')
}

function ex_cl ($, cl)
{
	expect($.className).eq(cl)
}
