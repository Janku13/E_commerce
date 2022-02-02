import React from 'react'

import './cart-item.styles.scss'

export default function CartItem ({item}){
   return <div className='cart-item'>
            <img src={`${item.imageUrl}`} alt="item" />
            <div className='item-details'>
             <span className='name'>{item.name}</span>
             <span className='price'>{item.quantity} x ${item.price}</span>
            </div>
          </div>
}