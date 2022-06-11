import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../components/collection/collection.component';
import {
  firestore,
  convertCollectionsSnapShotToMap,
} from '../../firebase/firebase.utils';

export default function ShopPage() {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapShot) => {
      convertCollectionsSnapShotToMap(snapShot);
    });
  });

  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}
