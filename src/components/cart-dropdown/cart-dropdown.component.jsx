import React from "react";
import { Link} from 'react-router-dom'
import {  useDispatch,useSelector } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";
import {toggleCartHidden} from '../../redux/cart/cart.actions'


function CartDropDown(){
    const cartItemsList = useSelector((state) => state.cart.cartItems);
    // const showCart = useSelector((state) => state.cart.hidden);

    const dispatch = useDispatch();

    const cartItems = cartItemsList.map((item)=>{
        return <CartItem key={item.id}item={item}/>
    })

   return <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length > 0 ?
                    cartItems
                    :
                    <span className="empty-message">Your Cart is Empty</span>
            }
            </div>
            <Link className="option" to='/checkout'>
                 <CustomButton onClick={()=>dispatch(toggleCartHidden())}>GO TO CHECKOUT</CustomButton>
            </Link>
           
         </div>
}


export default CartDropDown