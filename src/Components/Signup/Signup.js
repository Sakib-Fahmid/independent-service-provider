import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [customError, setCustomError] = useState("");
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        setCustomError("");
        if (password !== confirmPassword) {
            setCustomError("Password inputs don't match !");
            return;
        }
        if (password.length < 6) {
            setCustomError('Password cannot be less than six characters long');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    if (user) navigate('/');
    // if (error) setCustomError(error);

    return (
        <form onSubmit={handleFormSubmit} className='w-50 mx-auto border rounded px-4 py-5 mt-5'>
            <div className='d-flex justify-content-center'>
                <h1>Sign Up</h1>
            </div>
            <div className="mb-3 ">
                <label htmlFor="inputEmail" className="col-form-label">Email</label>
                <div className="">
                    <input onBlur={handleEmailBlur} type="text" className="form-control" id="inputEmail" required />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="col-form-label">Password</label>
                <div className="">
                    <input onBlur={handlePasswordBlur} type="password" className="form-control" id="inputPassword" required />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputConfirmPassword" className="col-form-label">Confirm Password</label>
                <div className="">
                    <input onBlur={handleConfirmPasswordBlur} type="password" className="form-control" id="inputConfirmPassword" required />
                </div>
            </div>
            <p className='text-danger text-center'>{error?.message ? error?.message : customError}</p>
            <div className='d-flex justify-content-center' >
                <input className="bg-primary text-white rounded py-2 px-4 border-0" type="submit" id="submitBtn" value="Sign Up" />
            </div>
            <div className='d-flex justify-content-center m-3'>
                <p>Already have an account ? <Link to='/login' className='text-decoration-none' > Login here </Link> </p>
            </div>
        </form>
    );
};

export default Signup;