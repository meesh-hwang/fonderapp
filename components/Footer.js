import '../css/reset.css'
import '../css/main.css'
import android from '../assets/img/android-download.svg';
import apple from '../assets/img/apple-download.svg';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
    
    // media queries
    const isXMobile = useMediaQuery({
        query: '(max-width: 575px)' 
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width:767px)' 
    });
    const isTablet = useMediaQuery({ 
        query: '(min-width: 768px) and (max-width:991px)' 
    });
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1199px)' 
    });
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });
    return(
        <div>
            {isXMobile &&
            <footer className="main-ft">
                <h3>Download the App</h3>
                <div className='download-btns'>
                    <img src={android} alt="android play store download button" />
                    <img src={apple} alt="apple app store download button" />
                </div>
                <p>BCIT MDIA4590 For Educational Purposes Only</p>
                <a target='_blank' href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
            </footer>}

            {isMobile &&
            <footer className="main-ft mobile">
                <h3>Download the App</h3>
                <div className='download-btns'>
                    <img src={android} alt="android play store download button" />
                    <img src={apple} alt="apple app store download button" />
                </div>
                <p>BCIT MDIA4590 For Educational Purposes Only</p>
                <a target='_blank' href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
            </footer>}
            {isTablet &&
            <footer className="main-ft tablet">
                <h3>Download the App</h3>
                <div className='download-btns'>
                    <img src={android} alt="android play store download button" />
                    <img src={apple} alt="apple app store download button" />
                </div>
                <p>BCIT MDIA4590 For Educational Purposes Only</p>
                <a target='_blank' href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
            </footer>}
            {isLaptop &&
            <footer className="main-ft laptop">
                <h3>Download the App</h3>
                <div className='download-btns'>
                    <img src={android} alt="android play store download button" />
                    <img src={apple} alt="apple app store download button" />
                </div>
                <p>BCIT MDIA4590 For Educational Purposes Only</p>
                <a target='_blank' href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
            </footer>}
            {isDesktop &&
            <footer className="main-ft desktop">
                <h3>Download the App</h3>
                <div className='download-btns'>
                    <img src={android} alt="android play store download button" />
                    <img src={apple} alt="apple app store download button" />
                </div>
                <p>BCIT MDIA4590 For Educational Purposes Only</p>
                <a target='_blank' href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
            </footer>}
        </div>
    );
}


export default Footer;