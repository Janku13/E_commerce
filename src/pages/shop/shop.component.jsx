import React from 'react'
import { Route, Routes } from "react-router-dom";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../components/collection/collection.component';
 
export default function ShopPage(){

    return <div className='shop-page'>
               <Routes>
                    <Route path="/" element={<CollectionsOverview />} />
                    <Route path=":collectionId" element={<CollectionPage />} />
               </Routes>
           </div>

}