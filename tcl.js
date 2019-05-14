// TODO: test

import curry from 'ramda/es/curry'


export default tcl

var tcl = curry((element, classname, state) =>
{
	if (classname instanceof Element)
	{
		; [ element, classname ] = [ classname, element ]
	}
	else if (state instanceof Element)
	{
		; [ element, state ] = [ state, element ]
	}
	if (typeof classname !== 'string')
	{
		; [ classname, state ] = [ state, classname ]
	}

	return tc(element, classname, state)
})


export function tcls (element, classes, state)
{
	if (typeof classes === 'string')
	{
		tc(element, classes, state)
	}
	else if (Array.isArray(classes))
	{
		classes.forEach(classname =>
		{
			tc(element, classname, state)
		})
	}
	else
	{
		for (let key in classes)
		{
			if (state !== void 0)
			{
				tc(element, key, state)
			}
			else
			{
				tc(element, key, classes[key])
			}
		}
	}

	return element
}


export function tc (element, classname, state = true)
{
	; (state === null) && (state = void 0)
	; (state === tc)   && (state = void 0)
	; (state === tcl)  && (state = void 0)

	element.classList.toggle(classname, state)

	return element
}
