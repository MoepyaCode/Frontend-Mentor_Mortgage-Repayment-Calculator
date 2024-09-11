import { Header, Wrapper } from '@app-components'
import InputGroup from './input-group'
import CheckboxGroup from './checkbox-group'
import CalculateButton from './calculate-button'
import { useAppDispatch, useAppSelector, useMortgageCalculator } from '@app-hooks'
import {
  reset,
  setInterestPaidMonthly,
  setMonthlyPayment,
  setTotalInterest,
  setTotalPayment,
  setVerification
} from '@app-store/features'
import { useEffect } from 'react'

function MortgageForm() {
  const mortgage = useAppSelector(state => state.mortgage)
  const dispatch = useAppDispatch()
  const {
    calculate,
    verification,
    monthlyPayment,
    totalInterest,
    interestPaidMonthly,
    totalPayment
  } = useMortgageCalculator()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const mortgageData = data as unknown as MortgageForm
    return calculate(mortgageData)
  }

  useEffect(() => {

    if(verification !== mortgage.verification) {
      dispatch(setVerification(verification))
    }

    if(monthlyPayment !== mortgage.monthlyPayment) {
      dispatch(setMonthlyPayment(monthlyPayment))
    }

    if(totalInterest !== mortgage.totalInterest) {
      dispatch(setTotalInterest(totalInterest))
    }

    if(interestPaidMonthly !== mortgage.interestPaidMonthly) {
      dispatch(setInterestPaidMonthly(interestPaidMonthly))
    }

    if(totalPayment !== mortgage.totalPayment) {
      dispatch(setTotalPayment(totalPayment))
    }

  }, [
    verification,
    monthlyPayment,
    totalInterest,
    interestPaidMonthly,
    totalPayment
  ])

  function handleReset(event: React.FormEvent<HTMLFormElement>) {
    dispatch(reset())
    event.currentTarget.reset()
  }

  return (
    <form onReset={handleReset} onSubmit={handleSubmit} className='px-6 py-8 sm:p-10 flex flex-col gap-6 sm:gap-10'>
      {/* Form Heading */}
      <Header className='flex flex-wrap justify-between items-center gap-2'>
        <h1 className='font-bold text-slate-900 text-[24px] leading-[125%]'>Mortgage Calculator</h1>
        <button type='reset' className='font-medium text-slate-700 xl:hover:text-slate-900 transition-colors duration-150 ease-out underline leading-[150%]'>Clear All</button>
      </Header>

      <Wrapper className='flex flex-col gap-6'>
        {/* Mortgage Amount */}
        <InputGroup
          verification={mortgage.verification?.errors.amount}
          name='amount'
          icon='£'
          type='number'
          title='Mortgage Amount'
          className=''
        />

        <Wrapper className='flex flex-col gap-6 md:flex-row'>
          {/* Mortgage Term */}
          <InputGroup
            verification={mortgage.verification?.errors.duration}
            name='duration'
            icon='years'
            type='number'
            title='Mortgage Term'
            className='flex-row-reverse xl:max-w-[200px] xl:w-full'
            inputClassName='xl:max-w-[120px]'
          />

          {/* Interest Rate */}
          <InputGroup
            verification={mortgage.verification?.errors.interestRate}
            name='interestRate'
            icon='%'
            type='number'
            title='Interest Rate'
            className='flex-row-reverse xl:max-w-[200px]'
            inputClassName='xl:max-w-[149px]'
          />
        </Wrapper>

        {/* Mortgage Type */}
        <CheckboxGroup
          verification={mortgage.verification?.errors.type}
          title='Mortgage Type' />
      </Wrapper>

      {/* Submit Button */}
      <CalculateButton />
    </form>
  )
}

export default MortgageForm