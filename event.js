
import delegate from 'delegate'

export default function on (element, eventname, handler)
{
	/* delegated */
	if (Array.isArray(element))
	{
		var
		selector = element[1]
		element  = element[0]

		var d = delegate(element, selector, eventname, handler)

		return () =>
		{
			;(d.destroy || d[0].destroy)()

			element = null
			handler = null
		}
	}
	/* direct */
	else
	{
		element.addEventListener(eventname, handler)

		return () =>
		{
			element.removeEventListener(eventname, handler)

			element = null
			handler = null
		}
	}
}


export function emit (element, eventname, data)
{
	element.dispatchEvent(new CustomEvent(eventname,
	{
		bubbles: true,
		cancelable: true,
		detail: data,
	}))

	return element
}


/*
import flyd from 'flyd'
var { stream } = flyd

import onto from '~lib/stream/onto'

export function live (element, eventname)
{
	var handler = stream()

	var d = on(element, eventname, handler)

	onto(handler.end, d)

	return handler
}
*/
