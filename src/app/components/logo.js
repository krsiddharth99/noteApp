import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='fixed top-2 md:top-22 left-2 md:left-[100px] lg:left-[120px] xl:left-[150px] bg-white pt-2 pb-6 border-[1px] rounded-lg'>
        <div className='flex flex-col gap-5 items-center justify-center'>
            <Image  src='/images/logo.png' width={30} height={30} alt='icon'/>
            <p className='rotate-90'>Notes</p>
        </div>
    </div>
  )
}
