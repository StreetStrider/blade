
import $element from '../element'

import put from '../put'


describe('put', () =>
{
	var $body = document.body

	it('put', () =>
	{
		var $ = $element('span', null, 'foo')

		$body.innerHTML = ''
		put($body, $)

		expect($body.innerHTML, '<span>foo</span>')
	})

	it('put text', () =>
	{
		$body.innerHTML = ''
		put($body, 'foo')

		expect($body.innerHTML, 'foo')
	})

	it('put null', () =>
	{
		$body.innerHTML = ''
		put($body, null)
		expect($body.innerHTML, '')

		put($body, void 0)
		expect($body.innerHTML, '')

		put($body, false)
		expect($body.innerHTML, '')
	})

	it('curry put', () =>
	{
		var $put = put($body)
		var $ = $element('span', null, 'bar')

		$body.innerHTML = ''
		$put($)

		expect($body.innerHTML, '<span>bar</span>')
	})
})
