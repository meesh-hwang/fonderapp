import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import '../css/reset.css'
import '../css/main.css'
import banner from '../assets/img/submission-banner.png'

const SubmissionBanner = () =>{

    // MEDIA QUERIES
    const isXMobile = useMediaQuery({ 
        query: '(min-width: 280px) and (max-width: 575px)' 
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width: 767px)' 
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 991px)' 
    })
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1199px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    })

    return(
        <div style={{maxWidth: '100vw'}}>
        {isXMobile &&
            <section className='submission-banner'>
                {/* <h3>Have Suggestions?</h3>
                <h3>Help us make this app a little Fonder!</h3> */}
                <img src={banner} alt="" />
            </section>
        }
        {isMobile &&
            <section className='submission-banner mobile'>
                {/* <h3>Have Suggestions?</h3>
                <h3>Help us make this app a little Fonder!</h3> */}
                <img src={banner} alt="" />
            </section>
        }
        {isTablet &&
            <section className='submission-banner tablet'>
                {/* <h3>Have Suggestions?</h3>
                <h3>Help us make this app a little Fonder!</h3> */}
                <img src={banner} alt="" />
            </section>
        }
        {isLaptop &&
            <section className='submission-banner laptop'>
                {/* <h3>Have Suggestions?</h3>
                <h3>Help us make this app a little Fonder!</h3> */}
                <img src={banner} alt="" />
            </section>
        }
        {isDesktop &&
            <section className='submission-banner desktop'>
                {/* <h3>Have Suggestions?</h3>
                <h3>Help us make this app a little Fonder!</h3> */}
                <img src={banner} alt="" />
            </section>
        }
        </div>
    )
}
export default SubmissionBanner
