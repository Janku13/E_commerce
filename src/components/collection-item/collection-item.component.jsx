import React from "react";
import './collection-item.styles.scss'


export default function CollectionItem({data}){
 

    const styles = {
        backgroundImage: `url(${data.imageUrl})`
    }
    return  <div className="collection-item">
                <div className="image"
                     style = {styles}
                />
                <div className="collection-footer">
                    <span className="name">{data.name}</span>
                    <span className="price">{data.price}</span>
                </div>
            </div>
}