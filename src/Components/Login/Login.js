import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Login = () => {
    const [signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(user => {
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    // useEffect(() => {
    //     if (user) {
    //         navigate("/orders");
    //     }
    // }, [user, navigate])

    return (
        <div>
            <h1>Log In</h1>
            <input onClick={handleGoogleSignIn} style={{ 'marginBottom': '10px' }} type="submit" value="Google Sign In" />
            <br />
            <input type="email" name="email" id="user-email" placeholder='Type your mail' />
            <br />
            <input type="password" name="password" id="user-password" placeholder='Type password' />
            <br />
            <input type="submit" value="Sign In" />
        </div>
    );
};

export default Login;