
import { $div } from '../element'

import order from '../order'


describe('order', () =>
{
	it('retrieves indices', () =>
	{
		var ch =
		[
			$div('x1', 'X1'),
			$div('x2', 'X2'),
			$div('x3', 'X3'),
		]

		$div(null, ch)

		expect(order(ch[0])).eq(0)
		expect(order(ch[2])).eq(2)
		expect(order(ch[1])).eq(1)

		expect(order(null)).eq(-1)
		expect(order(true)).eq(-1)
		expect(order({})).eq(-1)
		expect(order($div())).eq(-1)
	})
})
