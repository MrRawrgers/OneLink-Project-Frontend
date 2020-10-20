import React, { useState, useEffect } from 'react';
import '../App.css';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [welcome, setWelcome] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const history = useHistory()

    const user = localStorage.getItem('user');

    const checkLoggedIn = () => {
        if (user !== null) {
            history.push('/main');
        } else {
            return "not logged in"
        }
    }

    useEffect(() => {
        checkLoggedIn();
    });

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        const obj = {
            username: username,
            password: password
        };
        axios.post('https://onelink2.herokuapp.com/onelink/users', obj)
            .then(res => {
                const returnData = res.data
                setMsg(JSON.stringify(returnData.message.msgBody))
                if (returnData.message.msgBody === "Account successfully created") {
                    setWelcome(!welcome)
                }
            })
    };

    const handleLogIn = async (e) => {
        e.preventDefault();
        const obj = {
            username: username,
            password: password
        };
        axios.post('https://onelink2.herokuapp.com/onelink/users/signin', obj)
            .then(res => {
                const returnData = res.data
                setMsg(JSON.stringify(returnData.message))
                if (returnData.message === "Logged in successfully") {

                    localStorage.setItem("user", username);
                    history.push('/main');
                }
            })
    }

    const setBannerClass = () => {
        const classArr = ["banner-side cfb"]
        if (welcome) classArr.push('send-right')
        return classArr.join(' ')
    }

    const setFormClass = () => {
        const classArr = ["form-side cfb"]
        if (welcome) classArr.push('send-left')
        return classArr.join(' ')
    }

    return (
        <div className="Container cfb">
            <div className={setBannerClass()}>
                {welcome ? <h2>Welcome Back!</h2> : <h2>Hello!</h2>}
                <button onClick={() => setWelcome(!welcome)}>
                    {welcome ? "Sign In" : "Create Account"}
                </button>
                <h3>{msg}</h3>
            </div>
            <div className={setFormClass()}>
                {welcome ?
                    <SignUp handleUsername={handleUsername} handlePassword={handlePassword} handleCreateAccount={handleCreateAccount} />
                    : <SignIn handleUsername={handleUsername} handlePassword={handlePassword} handleLogIn={handleLogIn} />
                }
            </div>
        </div>
    );
}


export default Login;