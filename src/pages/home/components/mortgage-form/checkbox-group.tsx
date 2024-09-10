import { Wrapper } from '@app-components'

type Props = {
    title: string
}

function CheckboxGroup(props: Props) {

    function renderRadio(title: string) {
        return (
            <label className='flex flex-nowrap items-center gap-4 rounded-[4px] overflow-hidden border border-slate-500 h-[48px] pl-[18.25px] cursor-pointer has-[:checked]:bg-[rgba(216,219,47,.15)] has-[:checked]:border-lime transition-colors duration-300 ease-out'>
                <input className='appearance-none w-full max-w-[calc(19.5px-2px)] aspect-square grid place-items-center rounded-full outline-2 outline outline-slate-700 before:absolute before:w-[calc((19.5px-2px)/1.6)] before:aspect-square before:bg-transparent before:rounded-full  checked:outline-lime checked:before:bg-lime transition-colors duration-300 ease-out' type="radio" name='mortgage-type' value={title} />
                <span className='font-bold text-[18px] leading-[125%]'>{title}</span>
            </label>
        )
    }

    return (
        <Wrapper className='flex flex-col gap-3'>
            <h2 className='font-medium text-slate-700 leading-[150%]'>{props.title}</h2>
            {renderRadio('Repayment')}
            {renderRadio('Interest Only')}
        </Wrapper>
    )
}

export default CheckboxGroup