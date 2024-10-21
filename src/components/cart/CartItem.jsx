import IonIcon from '@reacticons/ionicons'
import React from 'react'

const CartItem = () => {
    return (
        <div className='item-detail flex justify-between items-center border-[0.1px] p-5 rounded-xl bg-red-100'>
            <div className='item-info flex items-center gap-5'>
                <div className='item-image w-[80px] h-[80px] flex items-center'>
                    <img src="#" alt="product image" className='w-[60px]' />
                </div>
                <div className='item-title w-[300px]'>
                    <h3>Item Title</h3>
                </div>
            </div>
            <div className='item-unit-price'>$200.00</div>
            <div className='item-quantity flex items-center gap-2 '>
                <IonIcon name='remove-circle-outline' className='cursor-pointer' />7
                <IonIcon name='add-circle-outline' className='cursor-pointer' />
            </div>
            <div className='item-total-price'>$1400.00</div>
            <div className='item-delete text-red-600 text-xl cursor-pointer'>
                <IonIcon name='close-outline' />
            </div>
        </div>
    )
}

export default CartItem