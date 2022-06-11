import React from 'react';
import { Link } from 'react-router-dom';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

export default function CollectionPreview({ items, title }) {
  const collectionItems = items
    .filter((data, idx) => idx < 4)
    .map((data) => {
      return <CollectionItem key={data.id} data={data} />;
    });

  return (
    <div className="collection-preview">
      <Link to={`/shop/${title.toLowerCase()}`}>
        <h1 className="title"> {title.toUpperCase()}</h1>
      </Link>

      <div className="preview">{collectionItems}</div>
    </div>
  );
}
