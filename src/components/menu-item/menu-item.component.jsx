import React from "react";
import { Link, useNavigate} from 'react-router-dom'
import "./menu-item.styles.scss"


export default function MenuItem({product}){
 
    const styles = {
        backgroundImage:`url(${product.imageUrl})`
    }

    let navigate = useNavigate();

    return    <div onClick ={()=> navigate(`/shop/${product.title}`)} className={`${product.size} menu-item`}> 
                <div  className="background-image" style={styles} />
                <div  className="content" >
                    <h1  className="title" >{product.title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
              </div>  
            //   <Link to={`/shop/${product.title}`}>
}