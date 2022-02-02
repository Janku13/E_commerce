import React from "react";
import {  useSelector } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import './cart-dropdown.styles.scss'
import CartItem from "../cart-item/cart-item.component";


function CartDropDown(){
    const cartItemsList = useSelector((state) => state.cart.cartItems);
    
    const cartItems = cartItemsList.map((item)=>{
        return <CartItem key={item.id}item={item}/>
    })

   return <div className="cart-dropdown">
        <div className="cart-items">
        {cartItems}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
}


export default CartDropDown