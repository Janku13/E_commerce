import React from "react";

import './checkout-item.styles.scss'

export default function CheckoutItem({item}){
    console.log(item)
    return <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt="item" />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">{item.quantity}</span>
            <span className="price">${item.price}</span>
            <div className="remove-button">&#10005;</div>
           </div>
}