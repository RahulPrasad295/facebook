import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = ()=>{
        //sign in
        auth.signInWithPopup(provider)
        .then((result)=>{

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })

            console.log(result);
        })
        .catch((error)=>alert(error.message))
    };
    return (
        <div className = "login">
            <div className = "login__logo">
                <img src = "https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png" alt = ""/>
                <img src = "https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt = ""/>

            </div>
            <Button type = "submit" onClick = {signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
