import React from 'react';
import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

export default function CollectionItem({ data }) {
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const styles = {
    backgroundImage: `url(${data.imageUrl})`,
  };
  return (
    <div className="collection-item">
      <div className="image" style={styles} />
      <div className="collection-footer">
        <span className="name">{data.name}</span>
        <span className="price">{data.price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(data)}>
        Add to Cart
      </CustomButton>
    </div>
  );
}
