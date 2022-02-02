import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

function CartIcon () {

   const cartItems = useSelector((state) => state.cart.cartItems);
   const numberOfItems = cartItems.reduce(
       (accumalator,cartItem) => accumalator + cartItem.quantity,0
   )
   

    // React.useEffect(()=>{
    //     console.log('did render')
    // },[numberOfItems])
    

    const dispatch = useDispatch();
    const toggleCartStatus = ()=>{
        dispatch(toggleCartHidden())
    } 

   return  <div className='cart-icon' onClick={toggleCartStatus}>
              <ShoppingIcon className='shopping-icon'/>
              <span className='item-count'>{numberOfItems}</span>
            </div>
}


export default CartIcon;
