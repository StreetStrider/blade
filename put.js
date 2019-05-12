// TODO: prepend
// TODO: after
// TODO: before

import curry from 'ramda/es/curry'


export default curry((where, what) =>
{
	where.appendChild(what)

	return what
})
