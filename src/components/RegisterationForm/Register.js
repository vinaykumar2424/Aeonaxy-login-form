import './form.css';
import './formResponsive.css';
import LoginFormLeftImage from '../../images/Login-form-left-image-removebg-preview.png'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Auth/firebase"
import {  useState } from "react";
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";


const Register = ({ navigateToHome }) => {

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);

        const name = formData.get("name");
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
        // Check if the username already exists in the database
        const usernameExists = await checkIfUsernameExists(username);
        if (usernameExists) {
            // Handle error - Username already exists
            setErr(true);
            console.log("Error: Username already exists");
            return;
        }
        // Check if any required fields are empty
        if (!name.trim() || !username.trim() || !email.trim() || !password.trim()) {
            // Handle error - Empty fields
            console.log("Error: Please fill in all required fields");
            setErr(true);
            return;
        }

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const user = res.user;

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                username: username,
                displayName: name,
                email: email,
            });

            // Redirect to Home after successful registration
            navigateToHome();
            
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };
    // Function to check if the username already exists in the database
    const checkIfUsernameExists = async (username) => {
        try {
            // Create a reference to the users collection
            const usersRef = collection(db, "users");

            // Create a query to find a user with the given username
            const q = query(usersRef, where("username", "==", username));

            // Execute the query
            const querySnapshot = await getDocs(q);

            // Check if any document matches the query
            return !querySnapshot.empty;
        } catch (error) {
            console.error("Error checking username:", error);
            return true; // Return true to handle errors as if the username exists
        }
    };

    return (
        <div className="form-page">
            <div className="left-img">
                <span className='logo'>dribbble</span>
                <span className='heading-one'>Discover the world's top <br />Designers & Creatives.</span>
                <img src={LoginFormLeftImage} className='login-form-left-image' alt="Login-form-left-image" />
                <span className='art-by-text'>Art by <span>Peter Terka</span></span>
            </div>
            <span className='route-to-link'>Already a member? <Link to='/login'>Sign in</Link></span>
            <div className='form-side'>
                <form onSubmit={handleSubmit}>
                    <h1>Sign up to Dribbble</h1>
                    {err && <span className='text-error'>&#x2022;Username has already been taken</span>}
                    <div className='name-username-field input-fields'>
                        <span>
                            <label htmlFor='username'>Name</label>
                            <input type='text' name='name' id='name' placeholder='John' required />
                        </span>
                        <span>
                            <label htmlFor='username'>{err && <span style={{backgroundColor:"none !important", color:"#de5f63",marginRight:"2px"}} >&#9888;</span>}Username</label>
                            <input type='text' name='username' id='username' className={err ? 'error-color' : ''} placeholder='John@123' required />
                        </span>
                    </div>
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
                    <div className='checkbox-field'>
                        <input type='checkbox' name='agree' id='agree' required />
                        <label htmlFor='agree'>Creating an account means you're okay with our <span>Terms of Service, Privacy Policy,</span> and our default <span>Notification Settings.</span></label>
                    </div>
                    <button>{!loading ? 'Create Account' : 'Please wait...'}</button>
                    <div className='privacy-policy-message'>This site is protected by reCAPTCHA and the google <span>Privacy Policy</span> and <span>Terms of service </span>apply.</div>
                </form>
            </div>
        </div>
    )
}
export default Register;