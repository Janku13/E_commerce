import React from "react";
import { useSelector } from "react-redux";
import './collections-overview.styles.scss'
import CollectionPreview from "../preview-collection/preview.component";

export default function CollectionsOverview(){

    const shopData = useSelector((state)=>state.shop.collections)

    const shopDataItems = shopData.map((item)=>{ 
     return <CollectionPreview key={item.id}  items={item.items} title={item.title}/> 
    })
    console.log(shopData )
    return <div className=" collections-overview">
            {shopDataItems}
           </div>

}
