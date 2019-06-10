
import on from 'event'


export default function fastclick (element, handler, options)
{
	options = { ...options, passive: true }

	return on(element, 'mousedown', handler, options)
}
