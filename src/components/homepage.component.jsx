import React from "react";
import './homepage.styles.scss'


export default function HomePage({names}){

    const product = names.map((name)=>{
        return  <div className="menu-item">
                  <div className="content">
                      <h1 className="title">{name}</h1>
                      <span className="subtitle">SHOP NOW</span>
                  </div>
                </div>         
        
    })

    return  <div className="homepage"> 
              <div className="directory-menu">
                 {product}
              </div>
            </div>
}