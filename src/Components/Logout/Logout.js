import React from 'react';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
const Logout = () => {
    signOut(auth);
    return (
        <div className='p-5'>
            <h1>You have been logged out</h1>
        </div>
    );
};

export default Logout;