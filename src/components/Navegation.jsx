import { BellIcon, HeartIcon, HomeIcon, HomeModernIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/16/solid'
import React from 'react'

export const Navegation = () => {
  return (
    <div className='w-[1024px] py-4 m-auto flex flex-row items-center justify-between'>
        <img src="/miru-logo.png" alt="Logo Miru" className='w-8' />
        <nav>
            <ul className='flex flex-row gap-12'>
                <li><a href="" className='flex flex-row text-[#362c24]'><HomeIcon className='w-5 mr-1' />Inicio</a></li>
                <li><a href="" className='flex flex-row text-[#362c24]'><HeartIcon className='w-5 mr-1' />Favoritos</a></li>
                <li><a href="" className='flex flex-row text-[#362c24]'><BellIcon className='w-5 mr-1' />Notificaciones</a></li>
                <li><a href="" className='flex flex-row text-[#362c24]'><ShoppingCartIcon className='w-5 mr-1' />Carrito</a></li>
                <li><a href="" className='flex flex-row text-[#362c24]'><UserIcon className='w-5 mr-1' />Perfil</a></li>
            </ul>
        </nav>
    </div>
  )
}
