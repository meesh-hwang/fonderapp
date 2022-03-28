import '../css/reset.css'
import '../css/main.css'
import skip from '../assets/img/partner-brands/skipthedishes_logo.svg';
import open from '../assets/img/partner-brands/opentable_logo.svg';
import fantuan from '../assets/img/partner-brands/fantuan_logo.svg';
import doordash from '../assets/img/partner-brands/doordash_logo.svg';
import uber from '../assets/img/partner-brands/ubereats_logo.svg';

const Partners = () => {
    return(
        <section className='partners'>
            <h3>Our Partners</h3>
            <div className='brands'>
                <img src={uber} alt="uber logo" />
                <img src={doordash} alt="doordash logo" />
                <img src={skip} alt="skip the dishes logo" />
                <img src={fantuan} alt="fantuan logo" />
                <img src={open} alt="open table logo" />
            </div>
        </section>
    );
}

export default Partners;