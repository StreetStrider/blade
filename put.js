
import curry from 'ramda/es/curry'


export default curry((where, what) =>
{
	where.appendChild(what)

	return what
})
