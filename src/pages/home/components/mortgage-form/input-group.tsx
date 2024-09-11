import { Wrapper } from '@app-components'
import React from 'react'

type Props = {
    name: string
    title: string
    icon: string
    type: string
    className?: string
    inputClassName?: string
    verification: ErrorState | undefined
}

function InputGroup(props: Props) {
    const [focused, setFocused] = React.useState(false)
    const error = props.verification?.error
    const hasError = props.verification?.hasError

    function onFocus() {
        setFocused(true)
    }

    function onBlur() {
        setFocused(false)
    }

    return (
        <Wrapper className='flex-grow flex flex-col gap-3'>
            <h2 className='font-medium text-slate-700 leading-[150%]'>{props.title}</h2>

            <div className={`${props.className} flex flex-nowrap rounded-[4px] border ${hasError ? 'border-red' : (focused ? 'border-lime' : 'border-slate-500')} overflow-hidden transition-colors duration-150 ease-out `}>
                <div className={`px-[16px] py-[12.5px] ${hasError ? 'bg-red text-white' : (focused ? 'bg-lime text-slate-900' : 'bg-slate-100 text-slate-700')} font-bold text-[18px]  leading-[125%] transition-colors duration-150 ease-out`}>
                    {props.icon}
                </div>
                <input type={props.type} onBlur={onBlur} onFocus={onFocus} name={props.name} className={`${props.inputClassName} outline-none border-none pl-4 font-bold text-[18px] text-slate-900 leading-[125%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />
            </div>
            
            {hasError && <p className='font-medium text-red text-[14px] leading-[150%]'>{error}</p>}
        </Wrapper>
    )
}

export default InputGroup