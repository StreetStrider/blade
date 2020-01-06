
import empty from '../empty'


describe('empty', () =>
{
	it('empties', () =>
	{
		var $body = document.body

		$body.innerHTML = `<div>1</div><div><span>2</span></div>3`

		empty($body)

		expect($body.innerHTML).eq('')
	})
})
