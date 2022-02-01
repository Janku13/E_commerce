import React from "react";
import SingIn from "../../components/sign-in.component/sing-in.component";
import SignUp from "../../components/sing-up/sing-up.component";
import './form.style.scss'
export default function Form(){

    return <div className="sign-in-and-sing-up">
        <SingIn/>   
        <SignUp/>
    </div>
}