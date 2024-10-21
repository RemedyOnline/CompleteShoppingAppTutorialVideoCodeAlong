import React from 'react'
import IonIcon, { } from '@reacticons/ionicons'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between items-center py-3 px-5 bg-slate-50'>
                <Link to={'/'}>
                    <div className='text-3xl'>
                        LOGO
                    </div>
                </Link>
                <form className='border-[0.5px] rounded-lg px-3 py-1 text-lg'>
                    <input type="search" name="search" id="search" placeholder='Search for any product...' className='bg-transparent outline-none border-none p-1 w-[160px] sm:w-[300px] placeholder:text-sm sm:placeholder:text-lg md:w-[500px] placeholder:font-thin ' />
                    <Link to={'/products'}>
                        <IonIcon name="search-outline" />
                    </Link>
                </form>
                <div className='flex gap-5 text-3xl'>
                    <Link to={'/account'}>
                        <div>
                            <IonIcon name='person-circle-outline' />
                        </div>
                    </Link>
                    <Link to={'/cart'}>
                        <div className='flex gap-1  items-center relative'>
                            <IonIcon name='cart-outline' />
                            <span
                                className=' text-sm font-bold absolute top-[-10px] right-[-10px] px-1 bg-white rounded-full items-center flex justify-center'>0</span>
                        </div>
                    </Link>
                </div>
            </div >
        </div >
    )
}

export default Navbar