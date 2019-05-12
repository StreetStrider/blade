

export default function on (element, eventname, handler)
{
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

		element.addEventListener(eventname, handler__delegated)

		return () =>
		{
			element.removeEventListener(eventname, handler__delegated)

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
