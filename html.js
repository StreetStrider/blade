

export default function $html (html)
{
	return ($$html(html).firstElementChild)
}


export function $$html (html)
{
	var t = document.createElement('template')

	t.innerHTML = html

	return t.content
}


export function $text (text)
{
	return document.createTextNode(text)
}
