
import { expect } from 'chai'

import $element from '../element'


describe.only('element', () =>
{
	it('creates element', () =>
	{
		var $ = $element('div')

		expect_element($, HTMLDivElement, 'div')
	})

	it('modifies class list', () =>
	{
		var $ = $element('div', 'foo')

		expect_element($, HTMLDivElement, 'div')
		expect_classname($, 'foo')

		//
		var $ = $element('div', [ 'foo', 'bar' ])

		expect_element($, HTMLDivElement, 'div')
		expect_classname($, 'foo bar')

		//
		var $ = $element('div', { foo: 1, bar: 0, baz: 1 })

		expect_element($, HTMLDivElement, 'div')
		expect_classname($, 'foo baz')
	})

	it('modifies content', () =>
	{
		var $ = $element('div', null, 'c1')

		expect_element($, HTMLDivElement, 'div')
		expect($.textContent).eq('c1')

		//
		var $ = $element('div', null, $element('span', null, 'c2'))

		expect_element($, HTMLDivElement, 'div')
		expect($.innerHTML).eq('<span>c2</span>')

		//
		var $ = $element('div', 'foo', $element('span', null, 'c2'))

		expect_element($, HTMLDivElement, 'div')
		expect_classname($, 'foo')
		expect($.innerHTML).eq('<span>c2</span>')
	})
})

function expect_element ($, type, tag)
{
	expect($ instanceof Element).ok
	expect($ instanceof type).ok
	expect($.tagName).eq(tag.toUpperCase())
}

function expect_classname ($, classname)
{
	expect($.className).eq(classname)
}