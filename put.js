

export default function put (...args)
{
	return λput(...args)
}


import curry from 'ramda/es/curry'

var λput = curry((where, what) =>
{
	where.appendChild(what)

	return what
})
