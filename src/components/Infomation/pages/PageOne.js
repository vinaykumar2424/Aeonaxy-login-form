import '../cssFiles/pageone.css';
import '../cssFiles/pageoneRes.css';
import camera from '../../../images/camera.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../Auth/firebase';

const PageOne = () => {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState("");
    const [formValid, setFormValid] = useState(false);

    // Function to check form validity
    useEffect(() => {
        setFormValid(image !== null && location.trim() !== "");
    }, [image, location]);

    const data = { image: image, location: location };
    console.log(data)
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div id='page-one'>
            <button className='logOutBtn' onClick={() => { signOut(auth) }}>Log Out</button>
            <nav>
                <span className='logo-name'>dribbble</span>
            </nav>
            <form className='form-page' onSubmit={handleSubmit}>
                <span className='heading-one'>Welcome! Let's create your profile</span>
                <span className='text-one'>Let others get to know you better! You can do these later</span>
                <span className='text-two'>Add an avatar</span>
                <div className='avatar-uploader'>
                    <img src={image ? URL.createObjectURL(image) : camera} className='avatar-image' alt='' />
                    <span className='avatar-btn'>
                        <label htmlFor="file">Choose image</label>
                        <input type="file" style={{ display: "none" }} id='file' name="file" accept=".jpg,.jpeg,.png" onChange={(e) => setImage(e.target.files[0])} required />
                        <span>&#62; Or choose one of our defaults</span>
                    </span>
                </div>
                <div className='location-info'>
                    <label>Add your location</label>
                    <input type="text" placeholder="Enter a location" id='location' name='location' onChange={(e) => setLocation(e.target.value)} required />
                </div>

                {formValid ? (
                    <button type='submit' ><Link to='/page-two' disabled={!formValid} state={{data:data}}>Next</Link></button>
                ) : (
                    <button type='submit' disabled><Link>Next</Link></button>
                )}
            </form>
        </div>
    )
}
export default PageOne;