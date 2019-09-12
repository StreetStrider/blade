

export default function on (element, eventname, handler, options)
{
	options && (options = { ...options })

	/* delegated */
	if (Array.isArray(element))
	{
		var
		selector = element[1]
		element  = element[0]

		function handler__delegated (e)
		{
			e.delegateTarget = e.target.closest(selector)

			if (e.delegateTarget)
			{
				handler.call(element, e)
			}
		}

		element.addEventListener(eventname, handler__delegated, options)

		return () =>
		{
			if (! element) return

			element.removeEventListener(eventname, handler__delegated, options)

			selector = null
			element = null
			handler = null
			options = null
		}
	}
	/* direct */
	else
	{
		element.addEventListener(eventname, handler, options)

		return () =>
		{
			if (! element) return

			element.removeEventListener(eventname, handler, options)

			element = null
			handler = null
			options = null
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
