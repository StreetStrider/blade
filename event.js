
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
