// TODO: prepend
// TODO: after
// TODO: before

import { curry } from 'rambda/src/curry'

import { $text } from './html'


export default curry((where, what) =>
{
	if (what instanceof Node)
	{
		where.appendChild(what)
	}
	else if (typeof what === 'string')
	{
		where.appendChild($text(what))
	}

	return what
})
