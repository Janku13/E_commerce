import React,{useState}from "react";
import "./directory.styles.scss"
import sections from "../../data/directory.data";
import MenuItem from "../menu-item/menu-item.component";

export default function Directory(){
    const [productType, setProductType] = useState(sections);

    const data = productType.map((product)=>{
        return  <MenuItem key={product.id} product={product}/>   
    })


    return <div className="directory-menu">
               {data}  
            </div>

};
