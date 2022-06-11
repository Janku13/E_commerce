import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import { useSelector } from 'react-redux';
import './collection.styles.scss';

export default function CollectionPage() {
  const shopCollection = useSelector((state) => state.shop.collections);
  const { collectionId } = useParams();

  const choosenItem = shopCollection.find(
    (item) => item.routeName === collectionId
  );
  const choosenItemComponents = choosenItem
    ? choosenItem.items.map((item) => (
        <CollectionItem key={item.id} data={item} />
      ))
    : null;
  const title = choosenItemComponents
    ? choosenItem.title
    : 'Please Insert A valid Param';

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">{choosenItemComponents}</div>
    </div>
  );
}
