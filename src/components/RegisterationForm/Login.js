import './form.css';
import './formResponsive.css';

import LoginFormLeftImage from '../../images/Login-form-left-image-removebg-preview.png'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Auth/firebase"
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ navigateToHome }) => {

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigateToHome();
        } catch (err) {
            console.log(err)
        }
        setLoading(false);
    };

    return (
        <div className="form-page">
            <div className="left-img">
                <span className='logo'>dribbble</span>
                <span className='heading-one'>Discover the world's top <br />Designers & Creatives.</span>
                <img src={LoginFormLeftImage} className='login-form-left-image' alt="Login-form-left-image" />
                <span className='art-by-text'>Art by <span>Peter Terka</span></span>
            </div>
            <span className='route-to-link'>Don't have an account? <Link to='/register'>Sign up</Link></span>
            <div className='form-side'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign up to Dribbble</h1>
                    {err && <span className='text-error'>&#x2022;Username has already been taken</span>}
                    <div className='email-field input-fields'>
                        <span>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='email' id='email' placeholder='abc@gmail.com' required />
                        </span>
                    </div>
                    <div className='password-field input-fields'>
                        <span>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' id='password' placeholder='6+ characters' minLength={6} required />
                        </span>
                    </div>
                    <button>{!loading ? 'Login Account' : 'Please wait...'}</button>
                    <div className='privacy-policy-message'>This site is protected by reCAPTCHA and the google <span>Privacy Policy</span> and <span>Terms of service </span>apply.</div>
                </form>
            </div>
        </div>
    )
}
export default Login;