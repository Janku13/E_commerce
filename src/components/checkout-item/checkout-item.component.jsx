import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss'

export default function CheckoutItem({item}){
    // console.log(item)
    const dispatch = useDispatch();

   function clearItem(toClearItem){
       return dispatch(clearItemFromCart(toClearItem))
   }

   function addingItem(toAddItem){
       return dispatch(addItem(toAddItem))
   }
   function removingItem(toRemoveItem){
    return dispatch(removeItem(toRemoveItem))
}


    
    
    return <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt="item" />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div className="arrow"onClick={()=>removingItem(item)}>&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div className="arrow" onClick={()=>addingItem(item)} >&#10095;</div>
            </span>
            <span className="price">${item.price}</span>
            <div className="remove-button" onClick={()=>clearItem(item)}>&#10005;</div>
           </div>
}