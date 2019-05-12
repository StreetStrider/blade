/* eslint-disable complexity */

export default function $qs (...args)
{
	return λ$qs(...args)
}


import curry from 'ramda/es/curry'

var λ$qs = curry((element, query) =>
{
	if (query instanceof Element)
	{
		; [ element, query ] = [ query, element ]

		if ((! query) || (typeof query !== 'string'))
		{
			query = ':root'
		}
	}
	else if (typeof element === 'string')
	{
		; [ element, query ] = [ query, element ]

		if ((! element) || (! (element instanceof Element)))
		{
			element = document
		}
	}

	return element.querySelector(query)
})
