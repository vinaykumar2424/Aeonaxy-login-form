import '../cssFiles/pagetwo.css';
import '../cssFiles/pagetwoRes.css';
import optionImgone from '../../../images/option-img-one.png'
import optionImgtwo from '../../../images/option-img-two.png'
import optionImgthree from '../../../images/option-img-three.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { auth, db } from '../../Auth/firebase'
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
const PageTwo = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state && location.state.data;
    // console.log(data)


    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };
    const val = { ...data, reason: selectedOption };
    console.log(val)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTaskDone(true);

        try {
            const newData = { ...data, reason: selectedOption };
            // Convert the image file to a data URL
            const imageURL = await convertImageToDataURL(newData.image);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "usersData", user.uid), {
                    location: newData.location,
                    image: imageURL,
                    reason: newData.reason,
                });
                console.log("Data stored successfully.");
                navigate('/page-three')
            } else {
                console.log("User not signed in.");
            }
        } catch (error) {
            console.error("Error storing data:", error);
        }
    };
    const convertImageToDataURL = (image) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = reject;
            reader.readAsDataURL(image);
        });
    };

    return (
        <div id='page-two'>
            <nav>
                <span className='logo-name'>dribbble</span>
                <Link to="/" className='back-arrow'>
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
                </Link>
            </nav>
            <form className='form-page' onSubmit={handleSubmit}>
                <span className='heading-one'>What brings you to dribbble?</span>
                <span className='text-one'>Select the options thaat best describe you. Don't worry, you can explore other options later.</span>
                <div className='options'>
                    <span className='option' style={selectedOption === 'design' ? { border: '1px solid #ea4b8b' } : {}}>
                        <img src={optionImgone} alt='' />
                        <label>I'm a designer looking to share my work</label>
                        {selectedOption === 'design' && <span>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</span>}
                        <input type="radio" name='reason' value='design' onChange={handleOptionChange} />
                    </span>
                    <span className='option' style={selectedOption === 'developer' ? { border: '1px solid #ea4b8b' } : {}}>
                        <img src={optionImgtwo} alt='' />
                        <label>I'm looking to hire a designer</label>
                        {selectedOption === 'developer' && <span>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</span>}
                        <input type="radio" name='reason' value='developer' onChange={handleOptionChange} />
                    </span>
                    <span className='option' style={selectedOption === 'explore' ? { border: '1px solid #ea4b8b' } : {}}>
                        <img src={optionImgthree} alt='' />
                        <label>I'm a looking for design inspriation</label>
                        {selectedOption === 'explore' && <span>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</span>}
                        <input type="radio" name='reason' value='explore' onChange={handleOptionChange} />
                    </span>
                </div>
                {selectedOption && <span className='text-two'>Anything else? You can select multiple</span>}
                <button type='submit'>{!taskDone ? 'Finish' : 'Please wait...'}</button>
            </form>
        </div>
    )
}
export default PageTwo;