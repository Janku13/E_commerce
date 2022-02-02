import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

function CartIcon () {

    const dispatch = useDispatch();

    const showCart = useSelector((state) => state);

    const toggleCartStatus = ()=>{
        dispatch(toggleCartHidden())
    } 

   return  <div className='cart-icon' onClick={toggleCartStatus}>
              <ShoppingIcon className='shopping-icon'/>
              <span className='item-count'>0</span>
            </div>
}


export default CartIcon;
