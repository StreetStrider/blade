

export function html (...args)
{
	return λhtml(...args)
}


import curry from 'ramda/es/curry'

var λhtml = curry((element, html) =>
{
	if (html instanceof Element)
	{
		; [ element, html ] = [ html, element ]
	}

	element.innerHTML = html

	return element
})


export function text (...args)
{
	return λtext(...args)
}

var λtext = curry((element, text) =>
{
	if (text instanceof Element)
	{
		; [ element, text ] = [ text, element ]
	}

	element.textContent = text

	return element
})
