
import { expect } from 'chai'

import { html } from '../inner'
import { text } from '../inner'


describe('inner', () =>
{
	it('html', () =>
	{
		var $ = document.createElement('div')

		html($, '<span>1</span>')
		expect($.innerHTML).eq('<span>1</span>')

		html('<span>2</span>', $)
		expect($.innerHTML).eq('<span>2</span>')

		html($)('<span>3</span>')
		expect($.innerHTML).eq('<span>3</span>')

		html('<span>4</span>')($)
		expect($.innerHTML).eq('<span>4</span>')

		expect($.textContent).eq('4')
	})

	it('text', () =>
	{
		var $ = document.createElement('div')

		text($, '<span>1</span>')
		expect($.textContent).eq('<span>1</span>')

		text('<span>2</span>', $)
		expect($.textContent).eq('<span>2</span>')

		text($)('<span>3</span>')
		expect($.textContent).eq('<span>3</span>')

		text('<span>4</span>')($)
		expect($.textContent).eq('<span>4</span>')

		expect($.innerHTML).eq('&lt;span&gt;4&lt;/span&gt;')
	})
})
