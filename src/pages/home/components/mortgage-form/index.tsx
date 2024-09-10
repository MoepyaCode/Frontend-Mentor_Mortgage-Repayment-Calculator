import { Header, Wrapper } from '@app-components'
import InputGroup from './input-group'
import CheckboxGroup from './checkbox-group'
import CalculateButton from './calculate-button'

function MortgageForm() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white px-6 py-8 sm:p-10 flex flex-col gap-6 sm:gap-10'>
      {/* Form Heading */}
      <Header className='flex flex-wrap justify-between items-center gap-2'>
        <h1 className='font-bold text-slate-900 text-[24px] leading-[125%]'>Mortgage Calculator</h1>
        <button type='reset' className='font-medium text-slate-700 underline leading-[150%]'>Clear All</button>
      </Header>

      <Wrapper className='flex flex-col gap-6'>
        {/* Mortgage Amount */}
        <InputGroup
          icon='£'
          title='Mortgage Amount'
          className=''
        />

        <Wrapper className='flex flex-col gap-6 md:flex-row'>
          {/* Mortgage Term */}
          <InputGroup
            icon='years'
            title='Mortgage Term'
            className='flex-row-reverse'
          />

          {/* Interest Rate */}
          <InputGroup
            icon='%'
            title='Interest Rate'
            className='flex-row-reverse'
          />
        </Wrapper>

        {/* Mortgage Type */}
        <CheckboxGroup title='Mortgage Type' />
      </Wrapper>

      {/* Submit Button */}
      <CalculateButton />
    </form>
  )
}

export default MortgageForm
