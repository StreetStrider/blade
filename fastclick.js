
import on from 'event'


export default function fastclick (element, handler, options)
{
	return on(element, 'mousedown', handler, options)
}
