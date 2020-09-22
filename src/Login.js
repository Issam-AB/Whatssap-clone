import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from './firebase';

const Login = () => {
    const signIn = () => {
     auth
     .signInWithPopup(provider)
     .then((result) => console.log(result))
     .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/WhatsApp_logo.svg/800px-WhatsApp_logo.svg.png" alt="" />

            <div className="login__text">
               <h1>Sign in to WhatssApp</h1>
            </div>

            <Button onClick={signIn}>
               Sing In With Google
            </Button>
            </div>

            
        </div>
    )
}

export default Login
