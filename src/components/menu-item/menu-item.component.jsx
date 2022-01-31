import React from "react";
import "./menu-item.styles.scss"


export default function MenuItem({product}){
    const styles = {
        backgroundImage:`url(${product.imageUrl})`
    }
    return <div  className={`${product.size} menu-item`}>
            <div className="background-image" style={styles} />
            <div className="content">
                <h1 className="title">{product.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
           </div>  
}