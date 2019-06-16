
import { compose } from 'rambda/src/compose'

import on from './event'


export default function fastclick (element, handler, options)
{
	function mousedown (e)
	{
		e.preventDefault()

		handler(e)
	}

	function click (e)
	{
		e.preventDefault()

		/* keyboard event */
		if (! e.detail)
		{
			handler(e)
		}
	}

	var md = on(element, 'mousedown', mousedown, options)
	var cl = on(element, 'click', click, options)

	return compose(cl, md)
}
