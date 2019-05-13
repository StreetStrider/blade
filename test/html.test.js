/* eslint-disable max-len */

import { expect } from 'chai'

import $html from '../html'
import { $$html } from '../html'
import { $text } from '../html'


describe('html', () =>
{
	it('$html', () =>
	{
		var $ = $html(`<div><span class='x'></span></div>`)

		expect($ instanceof Element)
		expect($.innerHTML).eq('<span class="x"></span>')
	})

	it('$html many tags', () =>
	{
		var $ = $html(`<div><span class='x1'></span></div><div><hr class='x2'></div>`)

		expect($ instanceof Element)
		expect($.innerHTML).eq('<span class="x1"></span>')
	})

	it('$$html', () =>
	{
		var $$ = $$html(`<div><span class='x1'></span></div><div><hr class='x2'></div>`)

		expect($$ instanceof DocumentFragment)
		expect($$.children).ok
		expect($$.children.length).eq(2)
	})

	it('$text', () =>
	{
		var $ = $text(`abc`)

		expect($ instanceof Text)
		expect($.data).eq('abc')
	})
})
