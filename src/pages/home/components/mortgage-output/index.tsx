import { Wrapper } from '@app-components'
import BeforeResults from './before-results'
import { useAppSelector } from '@app-hooks'
import AfterResults from './after-output'

function MortgageOutput() {
  const mortgage = useAppSelector(state => state.mortgage)

  function renderContent() {

    if(mortgage.verification?.verificationPassed) return <AfterResults />

    return <BeforeResults />
  }

  return (
    <Wrapper className='px-6 py-8 sm:p-10 bg-slate-900 min-h-[382px] xl:grid xl:place-items-center xl:rounded-bl-[80px]'>
      {renderContent()}
    </Wrapper>
  )
}

export default MortgageOutput
