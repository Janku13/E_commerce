import React, { Children } from "react";
import "./custom-button.style.scss"

export default function CustomButton ({children,...otherProps}){

    return <button 
             className="custom-button" 
             {...otherProps}
          >
              {children}
          </button>

}