// TODO: test

// TODO: prepend
// TODO: after
// TODO: before

import { curry } from 'rambda/src/curry'


export default curry((where, what) =>
{
	where.appendChild(what)

	return what
})
