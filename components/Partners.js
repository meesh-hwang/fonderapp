import '../css/reset.css'
import '../css/main.css'
import skip from '../assets/img/partner-brands/skipthedishes_logo.svg';
import open from '../assets/img/partner-brands/opentable_logo.svg';
import fantuan from '../assets/img/partner-brands/fantuan_logo.svg';
import doordash from '../assets/img/partner-brands/doordash_logo.svg';
import uber from '../assets/img/partner-brands/ubereats_logo.svg';
import { useMediaQuery } from 'react-responsive';

const Partners = () => {
    
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
            {isXMobile && <section className='partners'>
                <h3>Our Partners</h3>
                <div className='brands'>
                    <img src={uber} alt="uber logo" />
                    <img src={doordash} alt="doordash logo" />
                    <img src={skip} alt="skip the dishes logo" />
                    <img src={fantuan} alt="fantuan logo" />
                    <img src={open} alt="open table logo" />
                </div>
            </section>}
            {isMobile && <section className='partners mobile'>
                <h3>Our Partners</h3>
                <div className='brands'>
                    <img src={uber} alt="uber logo" />
                    <img src={doordash} alt="doordash logo" />
                    <img src={skip} alt="skip the dishes logo" />
                    <img src={fantuan} alt="fantuan logo" />
                    <img src={open} alt="open table logo" />
                </div>
            </section>}
            {isTablet && <section className='partners tablet'>
                <h3>Our Partners</h3>
                <div className='brands'>
                    <img src={uber} alt="uber logo" />
                    <img src={doordash} alt="doordash logo" />
                    <img src={skip} alt="skip the dishes logo" />
                    <img src={fantuan} alt="fantuan logo" />
                    <img src={open} alt="open table logo" />
                </div>
            </section>}
            {isLaptop && <section className='partners laptop'>
                <h3>Our Partners</h3>
                <div className='brands'>
                    <img src={uber} alt="uber logo" />
                    <img src={doordash} alt="doordash logo" />
                    <img src={skip} alt="skip the dishes logo" />
                    <img src={fantuan} alt="fantuan logo" />
                    <img src={open} alt="open table logo" />
                </div>
            </section>}
            {isDesktop && <section className='partners desktop'>
                <h3>Our Partners</h3>
                <div className='brands'>
                    <img src={uber} alt="uber logo" />
                    <img src={doordash} alt="doordash logo" />
                    <img src={skip} alt="skip the dishes logo" />
                    <img src={fantuan} alt="fantuan logo" />
                    <img src={open} alt="open table logo" />
                </div>
            </section>}
        </div>
    );
}

export default Partners;