

export default function order (element)
{
	return index(element.parentNode.children, element)
}


var index_of = [].indexOf

function index (list, element)
{
	return index_of.call(list, element)
}
