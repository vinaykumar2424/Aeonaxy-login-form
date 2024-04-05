import '../cssFiles/pagethree.css';
import '../cssFiles/pagethreeRes.css';
import { db } from '../../Auth/firebase';
import userIconImg from '../../../images/user.png'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const PageThree = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "usersData"));
                const userDataArray = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    userDataArray.push(data);
                });
                setUserData(userDataArray);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <div id='page-three'>
            <nav>
                <div className='nav-options'>
                    <span className='logo-name'>dribbble</span>
                    <Link to="/" className='nav-option'>Inspiration</Link>
                    <Link to="/" className='nav-option'>Find Work</Link>
                    <Link to="/" className='nav-option'>Learn Design</Link>
                    <Link to="/" className='nav-option'>Go Pro</Link>
                    <Link to="/" className='nav-option'>Hire Designers</Link>
                </div>
                <div className='nav-others'>
                    <span className='input-span'>
                        <input type='text' placeholder='Search' />
                        <span className='search-icon'>&#9906;</span>
                    </span>
                    <span className='bag-icon'>
                        <a href="#" className="fa fa-briefcase"></a>
                        <span>
                            <span>&#10006;</span>
                        </span>
                    </span>
                    {userData ? <img src={userData[0].image} alt='' /> : <img src={userIconImg} alt='' />}
                    <button><Link to='/page-three'>Upload</Link></button>
                </div>
            </nav>
            <section className='texts'>
                <span className='heading-one'>Please verify your email...</span>
                <span className='email-icon'>
                    <a href="#" className="fa fa-envelope" ></a>
                    <span>
                        <span>&#10004;</span>
                    </span>
                </span>
                <span className='text-one'>Please verify your email address. Wr've send a confirmation email to:</span>
                <span className='text-two'>account@refero.design</span>
                <span className='text-three'>Click the confirmation link in that mail to begin using Dribbble.</span>
                <span className='text-four'>Didn't recieve the email? Check your Spam folfer, it may have been caught by a filter, If you don't see it, you can <span>respond the confirmation email.</span></span>
                <span className='text-five'>Wrong email address? <span>Change it.</span></span>
            </section>
            <Footer />
        </div>
    )
}
export default PageThree;