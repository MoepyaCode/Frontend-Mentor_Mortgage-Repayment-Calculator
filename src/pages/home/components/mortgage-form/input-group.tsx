import { Wrapper } from '@app-components'
import React from 'react'

type Props = {
    title: string
    icon: string
    className?: string
}

function InputGroup(props: Props) {
    const [focused, setFocused] = React.useState(false)

    function onFocus() {
        setFocused(true)
    }

    function onBlur() {
        setFocused(false)
    }

    return (
        <Wrapper className='flex-grow flex flex-col gap-3'>
            <h2 className='font-medium text-slate-700 leading-[150%]'>{props.title}</h2>

            <div className={`${props.className} flex flex-nowrap rounded-[4px] border ${focused ? 'border-lime' : 'border-slate-500'} overflow-hidden transition-colors duration-300 ease-out`}>
                <div className={`px-[16px] py-[12.5px] ${focused ? 'bg-lime text-slate-900' : 'bg-slate-100 text-slate-700'} font-bold text-[18px]  leading-[125%] transition-colors duration-300 ease-out`}>
                    {props.icon}
                </div>
                <input onBlur={onBlur} onFocus={onFocus} className='flex-grow outline-none border-none pl-4 font-bold text-[18px] text-slate-900 leading-[125%]'  />
            </div>
        </Wrapper>
    )
}

export default InputGroup