import '../css/reset.css'
import '../css/main.css'
import skip from '../assets/img/partner-brands/skipthedishes_logo.svg';
import open from '../assets/img/partner-brands/opentable_logo.svg';
import fantuan from '../assets/img/partner-brands/fantuan_logo.svg';
import doordash from '../assets/img/partner-brands/doordash_logo.svg';
import uber from '../assets/img/partner-brands/ubereats_logo.svg';

const Partners = () => {
    return(
        <div className='partners'>
            <div className='partner-heading'>
                <h1>Our Partners</h1>
                <div className='heading-underline'></div>
            </div>
            <div className='partner-brands'>
                <div className="row">
                    <img src={uber} alt="uber logo" />
                    <img src={doordash} alt="doordash logo" />
                </div>
                <div className='row'>
                    <img src={skip} alt="skip the dishes logo" />
                    <img src={fantuan} alt="fantuan logo" />
                </div>
                <div className='row'>
                    <img src={open} alt="open table logo" />
                </div>
            </div>
        </div>
    );
}

export default Partners;