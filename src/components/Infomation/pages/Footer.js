import '../cssFiles/footer.css';
import '../cssFiles/footerRes.css';
const Footer = () => {
    return (
        <div id="footer">
            <section className='sections'>
                <section className='social-links-section'>
                    <span className='logo'>dribbble</span>
                    <span className='text-one'>Dribbble is the world's leading community for creatives to share, grow, and get hired.</span>
                    <span className='social-media-icons'>
                        <a href="#" className="fa fa-dribbble" target='_blank'></a>
                        <a href="#" className="fa fa-twitter" target='_blank'></a>
                        <a href="#" className="fa fa-facebook" target='_blank'></a>
                        <a href="#" className="fa fa-instagram" target='_blank'></a>
                        <a href="#" className="fa fa-pinterest" target='_blank'></a>
                    </span>
                </section>
                <section className='all-features'>
                    <section className='features'>
                        <span className='heading'>For designers</span>
                        <span className='text'>Go Pro!</span>
                        <span className='text'>Explore design work</span>
                        <span className='text'>Design blog</span>
                        <span className='text'>Overtime podcast</span>
                        <span className='text'>Playoffs</span>
                        <span className='text'>Weekly Warm-Up</span>
                        <span className='text'>Refer a Friend</span>
                        <span className='text'>Code of conduct</span>
                    </section>
                    <section className='features'>
                        <section className='other-features'>
                            <span className='heading'>Hire designers</span>
                            <span className='text'>Post a job opening</span>
                            <span className='text'>Post a freelance project</span>
                            <span className='text'>Search for designers</span>
                        </section>
                        <section className='other-features'>
                            <span className='heading'>Brands</span>
                            <span className='text'>Advertise with us</span>
                        </section>
                    </section>
                    <section className='features'>
                        <span className='heading'>Company</span>
                        <span className='text'>About</span>
                        <span className='text'>Careers</span>
                        <span className='text'>Support</span>
                        <span className='text'>Media kit</span>
                        <span className='text'>Testimonials</span>
                        <span className='text'>API</span>
                        <span className='text'>Terms of service</span>
                        <span className='text'>Privacy policy</span>
                        <span className='text'>Cookie policy</span>
                    </section>
                    <section className='features'>
                        <section className='other-features'>
                            <span className='heading'>Directories</span>
                            <span className='text'>Design jobs</span>
                            <span className='text'>Designers for hire</span>
                            <span className='text'>freelance designers for hire</span>
                            <span className='text'>Tags</span>
                            <span className='text'>Places</span>
                        </section>
                        <section className='other-features'>
                            <span className='heading'>Design assets</span>
                            <span className='text'>Dribbble Marketplace</span>
                            <span className='text'>Creative Market</span>
                            <span className='text'>Footspring</span>
                            <span className='text'>Font Squirrel</span>
                        </section>
                    </section>
                    <section className='features'>
                        <span className='heading'>Design Resources</span>
                        <span className='text'>Freelancing</span>
                        <span className='text'>Design Hiring</span>
                        <span className='text'>Design Portfolio</span>
                        <span className='text'>Design Education</span>
                        <span className='text'>Creative Process</span>
                        <span className='text'>Design Industry Trends</span>
                    </section>
                </section>
            </section>
            <section className='footer-bottom'>
                <span className='left-part-footer'>&#169; 2023 Dribbble. All rights reserved.</span>
                <span className='right-part-footer'>
                    <span>20,501,853 </span>
                    <span>shots dribbbled</span>
                    <a href="#" className="fa fa-dribbble" target='_blank'></a>
                </span>
            </section>
        </div>
    )
}
export default Footer;