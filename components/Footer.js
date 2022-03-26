import '../css/reset.css'
import '../css/main.css'
import android from '../assets/img/android-download.svg';
import apple from '../assets/img/apple-download.svg';

const Footer = () => {
    
    return(
        <footer className="main-ft">
            <h3>Download the App</h3>
            <div className='download-btns'>
                <img src={android} alt="android play store download button" />
                <img src={apple} alt="apple app store download button" />
            </div>
            <p>BCIT MDIA4590 For Educational Purposes Only</p>
            <a target='_blank' href="https://www.freeprivacypolicy.com/live/d960234f-ec44-414e-9cb4-a2317ce42913">Privacy Policy</a>
        </footer>
    );
}


export default Footer;