import React, { Children } from "react";
import "./custom-button.style.scss"

export default function CustomButton ({children,isGoogleSignIn,...otherProps}){

    return <button 
             className={`${isGoogleSignIn ? 'google-sign-in' : ""} custom-button `}
             {...otherProps}
          >
              {children}
          </button>

}