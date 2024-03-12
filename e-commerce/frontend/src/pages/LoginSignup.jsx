import { useState } from 'react';
import './CSS/LoginSignup.css'

function LoginSignup(){ 

    const [state, setState] = useState("Login"); 
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email: ""
    })


    const login = async ()=>{
        console.log("login fuction executada", formData);
        let responseData;
        await fetch('http://localhost:8080/login', {
            method:'post',
            headers:{
                Accept:'application/form-data',
                'content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=> responseData = data );

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }


    const signup = async ()=>{
        console.log("signup fuction executada", formData);
        let responseData;
        await fetch('http://localhost:8080/signup', {
            method:'post',
            headers:{
                Accept:'application/form-data',
                'content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=> response.json()).then((data)=> responseData = data );

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }

    const changeHandler = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }



    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                {state==="Sign Up"? <input name='username' value={formData.username}  onChange={changeHandler} type="text" placeholder="Seu Nome" /> : <></>}
                    <input name='email' value={formData.email}  onChange={changeHandler} type="email" placeholder="Seu Email"/>
                    <input name='password' value={formData.password}  onChange={changeHandler} type="password" placeholder="Password" />
                    <button onClick={()=>{state==="Login"?login():signup()}} >Continue</button>
                </div>
                {state==="Sign Up"? 
                    <p className="loginsignup-login"> Already have an account? <span onClick={()=>{setState("Login")}} >Login here</span> </p> : 
                    <p className="loginsignup-login"> Creat an account? <span onClick={()=>{setState("Sign Up")}} >Click here</span> </p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id=""/>
                    <p>By Continue, I agree to the terms of use & privacy Policy.</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;