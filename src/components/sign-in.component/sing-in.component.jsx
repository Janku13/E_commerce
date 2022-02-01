import React, {useState} from "react";
import './sign-in-and-up.style.scss'
import FormInput from "../input-container/input.container";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle } from "../../firebase/firebase.utils";

export default function SingIn(){
    const [formData,setFormData] = useState({
        email:'',
        password:''
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(e.target)
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prevFormData => {
            return {
                ... prevFormData,
                [name]:value
            }
        })
    }

    return <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <FormInput 
                     type="email"
                     name="email"
                     value={formData.email}
                     handleChange={handleChange}
                     label="email"
                   
                      required />
                    <FormInput 
                     type="password" 
                     name="password"
                     value={formData.password} 
                     handleChange={handleChange}
                     label='password'
                   
                   required />
                   <div className="buttons">
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign With Google</CustomButton>
                   </div>
                </form>
           

           </div>
}