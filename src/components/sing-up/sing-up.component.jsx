import React,{useState} from "react";

import FormInput from '../input-container/input.container'
import CustmButton from '../custom-button/custom-button.component'

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

export default function SignUp(){
    const [registerData,setRegisterData] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    function handleChange(e){
        const {name,value} = e.target
        setRegisterData(prevData=>{
            return {
                ...prevData,
                [name]:value
            }
        })
    }

    const {displayName,email,password,confirmPassword} = registerData

    const  handleSubmit = async(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            alert("passwords did not match")
            return
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName})
            setRegisterData({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            console.error(error)
        }
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className = 'sign-up-form' onSubmit={(e)=>handleSubmit(e)}>
                <FormInput 
                    type='text'
                    name = 'displayName'
                    value = {displayName}
                   handleChange = {handleChange}
                    label='Display Name'
                    required
                />
                <FormInput 
                    type='email'
                    name = 'email'
                    value = {email}
                    handleChange = {handleChange}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    name = 'password'
                    value = {password}
                    handleChange = {handleChange}
                    label='Password'
                    required
                />
                <FormInput 
                    type='password'
                    name = 'confirmPassword'
                    value = {confirmPassword}
                    handleChange = {handleChange}
                    label='Confirm Password'
                    required
                />
                <CustmButton type='submit'> SIGN UP</CustmButton>
            </form>
        </div>
    )

}