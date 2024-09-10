import { Wrapper } from '@app-components'
import { illustractionEmpty } from '@app-assets'

function BeforeResults() {
  return (
    <Wrapper className='flex flex-col items-center text-center gap-4'>
      {/* #1 */}
      <img src={illustractionEmpty} alt="" />

      {/* #2 */}
      <h2 className='font-bold text-[24px] text-white leading-[125%]'>Results shown here</h2>

      {/* #3 */}
      <p className='font-medium text-slate-300 leading-[150%]'>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
    </Wrapper>
  )
}

export default BeforeResults