import React from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

const CartContainer = () => {
    return (
        <div>
            <div className='backdrop-blur-lg p-4 rounded-md border-[0.1px] border-black overflow-hidden m-5'>
                <h2>Shopping Cart</h2>
                <div className='container flex justify-start gap-5'>
                    <div className='cart-items  flex flex-col flex-1 gap-5 mt-5 '>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div>
                        <CartSummary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContainer