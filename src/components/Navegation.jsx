import { BellIcon, HeartIcon, HomeIcon, HomeModernIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button } from './Button'

export const Navegation = () => {
    return (
        <div className='w-[1024px] py-4 m-auto flex flex-row items-center justify-between'>
            <img src="/miru-logo.png" alt="Logo Miru" className='w-8' />
            <nav>
                <ul className='flex flex-row gap-12'>
                    <li><Button name={'Inicio'} link={'#'} /></li>
                    <li><Button name={'Productos'} link={'#'} /></li>
                    <li><Button name={'Favoritos'} link={'#'} /></li>
                </ul>
            </nav>
            <ul className='flex flex-row gap-7'>
                <li>
                    <Button link={'#'}>
                        <div className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'><ShoppingCartIcon className='w-5' /></div>
                    </Button>
                </li>
                <li>
                    <Button link={'#'}>
                        <div className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'>
                            <UserIcon className='w-5' />
                        </div>
                    </Button>
                </li>
            </ul>
        </div>
    )
}
