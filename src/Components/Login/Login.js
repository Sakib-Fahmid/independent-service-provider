import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/orders';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='login-form-title'>Login</h1>
                <form onSubmit={handleLoginSubmit} >
                    <div className='input-group'>
                        <label className='label-input' htmlFor="email">Email</label>
                        <br></br>
                        <input onBlur={handleEmailBlur} className='input-field' type="email" name="email" id="" required />
                    </div>
                    <div>
                        <label className='label-input' htmlFor="password">Password</label>
                        <br />
                        <input onBlur={handlePasswordBlur} className='input-field' type="password" name="password" id="" required />
                    </div>
                    <p style={{ 'color': 'red' }} >{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <div className='form-btn-group bg-primary'>
                        <button className='form-btn text-white' >Login</button>
                    </div>
                    <p style={{ fontSize: '15px', 'textAlign': 'center' }} >Don't have an account ? <Link style={{ 'textDecoration': 'none' }} to="/signup" >Create New Account</Link> </p>
                    <div className='divider-login-method' >
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <div className='form-btn-group' style={{ 'border': '1px solid rgba(149, 160, 167, 1)' }}>
                        <FaGoogle className='signin-btn-logo' />
                        <button className='form-btn'>Continue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;