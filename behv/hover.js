
import { compose } from 'rambda/src/compose'

import on from '../event'


export default function hover (element_family, handler, options)
{
	options = { ...defaults, ...(options || {}) }

	if (! (element_family instanceof Set))
	{
		element_family = new Set([ element_family ])
	}


	var d = []

	for (let element of element_family)
	{
		d.push(on(element, 'mouseenter', schedule(up, options.enter)))
		d.push(on(element, 'mouseleave', schedule(down, options.leave)))
	}

	d = compose(...d)


	var t = null

	function schedule (fn, thrs)
	{
		return () =>
		{
			clearTimeout(t)
			t = setTimeout(fn, thrs)
		}
	}


	var state = false

	function up ()
	{
		emit(options.predicate())
	}

	function down ()
	{
		emit(false)
	}

	function emit (new_state)
	{
		if (state !== new_state)
		{
			state = new_state
			handler(state)
		}
	}


	return () =>
	{
		if (! d) { return }

		d()
		d = null

		clearTimeout(t)

		element_family = null
		handler = null
		options = null
	}
}


var defaults =
{
	enter: 0,
	leave: 500,
	predicate: () => true,
}
