import React from 'react'

type Props = {
    children: React.ReactNode,
    className?: string,
}

export default function Header(props: Props) {
    return (
        <header className={props.className}>
            {props.children}
        </header>
    )
}
