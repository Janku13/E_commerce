import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
// import StripeCheckoutButoon from '../../components/stripe-button/stripe-button.component';
import './checkout.styles.scss';

export default function CheckoutPage() {
  const cartItemsList = useSelector((state) => state.cart.cartItems);
  const item = cartItemsList.map((item) => (
    <CheckoutItem key={item.id} item={item} />
  ));

  const headerItems = [
    'Product',
    'Description',
    'Quantity',
    'Unit Price',
    'Remove',
  ];
  const headerBlock = headerItems.map((item, idx) => {
    return (
      <div key={idx} className="header-block">
        <span>{item}</span>
      </div>
    );
  });

  const totalPrice = cartItemsList.reduce(
    (accumalator, cartItem) => accumalator + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">{headerBlock}</div>
      {item}
      <div className="total">TOTAL: ${totalPrice}</div>
      <div className="test-warning">
        *Use the following test data provided by strip*
        <br />
        4242 4242 4242 4242 - Exp:01/23 - CVV:123
      </div>
      {/* <StripeCheckoutButoon price={totalPrice} /> */}
    </div>
  );
}
