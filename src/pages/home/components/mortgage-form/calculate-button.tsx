import { iconCalculator } from '@app-assets'

export default function CalculateButton() {

  return (
    <button type='submit' className='sm:self-start relative px-10 py-4 bg-lime flex items-center justify-center gap-3 rounded-full overflow-hidden before:absolute before:w-full before:h-full before:bg-transparent hover:xl:before:bg-white hover:xl:before:opacity-50 before:transition-colors before:duration-150 before:ease-out'>
         <img className='z-[1]' src={iconCalculator} alt="" />
         <span className='font-bold text-slate-900 text-[18px] leading-[125%] z-[1]'>Calculate Repayments</span>
        </button>
  )
}
