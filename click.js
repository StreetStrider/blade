

export function primary (handler)
{
	return (e) =>
	{
		if (e.button === 0)
		{
			return handler(e)
		}
	}
}
