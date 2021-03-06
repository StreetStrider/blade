
import { tcls } from './tcl'
import put from './put'


export default function $element (tag, classes, content)
{
	if (! Array.isArray(tag))
	{
		var $ = document.createElement(tag)
	}
	else
	{
		var $ = document.createElementNS(tag[0], tag[1])
	}

	tcls($, classes)

	if (typeof content === 'string')
	{
		$.textContent = content
	}
	else if (content instanceof Node)
	{
		put($, content)
	}
	// TODO: handle Iterable?
	else if (Array.isArray(content))
	{
		content.forEach(put($))
	}

	return $
}


export function $div (classes, content)
{
	return $element('div', classes, content)
}

export function $span (classes, content)
{
	return $element('span', classes, content)
}

export function $button (classes, content)
{
	return $element('button', classes, content)
}


export function $svg (tag, ...rest)
{
	return $element([ svgns, tag ], ...rest)
}

var svgns = 'http://www.w3.org/2000/svg'
