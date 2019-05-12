/* eslint-disable no-cond-assign */


export default function empty (element)
{
	var ch

	while (ch = element.firstChild)
	{
		element.removeChild(ch)
	}

	return element
}
