'use client'
import React from 'react'

export default function Alert( props : { onCancel: ()=> void, onOk: ()=> void, message: string}) {

  return (
    <div className='bg-black absolute left-0 top-0 w-full h-full z-10 flex flex-col items-center justify-center bg-opacity-80 py-2 px-4 '>
        <div className='border border-red bg-white  w-full h-3/5 flex flex-col items-center'>
        <p onClick={props.onCancel} className='self-end bg-red rounded-full w-4 h-4 text-center leading-none text-white cursor-pointer hover:bg-[#a71e1e]'>x</p>
        <div className=" flex-1 flex flex-col justify-around items-center text-center py-2">
            <p>{props.message}</p>
            <p onClick={props.onOk} className='bg-gray-300 hover:bg-gray-500 px-3 w-fit cursor-pointer duration-300'>OK</p>
        </div>
        </div>
    </div>
  )
}
