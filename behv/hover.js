
import { compose } from 'rambda/src/compose'

import on from '../event'


export default function hover (element_family, handler, options)
{
	options = { ...defaults, ...options }

	if (! (element_family instanceof Set))
	{
		element_family = new Set([ element_family ])
	}


	var d = []

	for (const element of element_family)
	{
		d.push(on(element, 'mouseover', schedule(up, options.enter)))
		d.push(on(element, 'mouseout',  schedule(down, options.leave)))
	}

	d = compose(...d)


	var t = null

	function schedule (fn, thrs)
	{
		return (e) =>
		{
			clearTimeout(t)
			t = setTimeout(() => fn(e.target), thrs)
		}
	}


	var state = options.state

	function up (target)
	{
		emit(options.predicate(), target)
	}

	function down ()
	{
		emit(false)
	}

	function emit (new_state, target)
	{
		if (state !== new_state)
		{
			state = new_state

			if (state)
			{
				handler(true, target)
			}
			else
			{
				handler(false)
			}
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
	state: false,
}
