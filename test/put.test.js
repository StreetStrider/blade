
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

	it('curry put', () =>
	{
		var $put = put($body)
		var $ = $element('span', null, 'bar')

		$body.innerHTML = ''
		$put($)

		expect($body.innerHTML, '<span>bar</span>')
	})
})
