

export default function order (element)
{
	if (! element) { return -1 }
	if (! element.parentNode) { return -1 }

	return index(element.parentNode.children, element)
}


var index_of = [].indexOf

function index (list, element)
{
	return index_of.call(list, element)
}
