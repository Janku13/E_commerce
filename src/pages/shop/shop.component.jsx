import React,{useState} from 'react'
import SHOP_DATA from '../../data/collections.data'
import CollectionPreview from '../../components/preview-collection/preview.component'



export default function ShopPage(){

    const [shopData,setShopData] = useState(SHOP_DATA)

    const shopDataItems = shopData.map((item)=>{ 
         return <CollectionPreview key={item.id}  items={item.items} title={item.title}/> 
    })
   
    return <div className='shop-page'>
                {shopDataItems}
           </div>

}