import { Wrapper } from '@app-components'
import { useAppSelector } from '@app-hooks'

function AfterResults() {
  const mortgage = useAppSelector(state => state.mortgage)

  function renderTypePayments() {
    switch (mortgage.type) {
      case 'interest-only':
        return (
          <Wrapper className='flex flex-col items-start bg-[rgba(0,0,0,.25)] px-4 pb-6 pt-5 rounded-lg border-t-4 border-t-lime'>
            <Wrapper className='flex flex-col gap-2'>
              <h3 className='font-medium text-slate-300 leading-[150%]'>Your monthly interest repayments</h3>
              <p className='font-bold text-[40px] text-lime'>{mortgage.interestPaidMonthly}</p>
            </Wrapper>

            <div className='w-full h-[1px] bg-[rgba(154,190,213,.25)] my-4' />

            <Wrapper className='flex flex-col gap-2'>
              <h3 className='font-medium text-slate-300 leading-[150%]'>Total you'll repay over the term</h3>
              <p className='font-bold text-[24px] text-white leading-[125%]'>{mortgage.totalInterest}</p>
            </Wrapper>
          </Wrapper>
        )
      case 'repayment':
        return (
          <Wrapper className='flex flex-col items-start bg-[rgba(0,0,0,.25)] px-4 pb-6 pt-5 rounded-lg border-t-4 border-t-lime'>
            <Wrapper className='flex flex-col gap-2'>
              <h3 className='font-medium text-slate-300 leading-[150%]'>Your monthly repayments</h3>
              <p className='font-bold text-[40px] text-lime'>{mortgage.monthlyPayment}</p>
            </Wrapper>

            <div className='w-full h-[1px] bg-[rgba(154,190,213,.25)] my-4' />

            <Wrapper className='flex flex-col gap-2'>
              <h3 className='font-medium text-slate-300 leading-[150%]'>Total you'll repay over the term</h3>
              <p className='font-bold text-[24px] text-white leading-[125%]'>{mortgage.totalPayment}</p>
            </Wrapper>
          </Wrapper>
        )
      default:
        return ''
    }
  }

  return (
    <Wrapper className='flex flex-col gap-6'>

      {/* #1 */}
      <Wrapper className='flex flex-col gap-4'>
        <h2 className='font-bold text-[24px] text-white leading-[125%]'>Your results</h2>

        <p className='font-medium text-slate-300 leading-[150%]'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
      </Wrapper>

      {/* #2 */}
      {renderTypePayments()}
    </Wrapper>
  )
}

export default AfterResults