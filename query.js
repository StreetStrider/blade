/* eslint-disable complexity */


export default (element, query) =>
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
}
