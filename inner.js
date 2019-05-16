
import { curry } from 'rambda/src/curry'


export var html = curry((element, html) =>
{
	if (html instanceof Element)
	{
		; [ element, html ] = [ html, element ]
	}

	element.innerHTML = html

	return element
})


export var text = curry((element, text) =>
{
	if (text instanceof Element)
	{
		; [ element, text ] = [ text, element ]
	}

	element.textContent = text

	return element
})
