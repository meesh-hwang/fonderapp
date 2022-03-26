import { useMediaQuery } from 'react-responsive';



import '../css/reset.css'
import '../css/main.css'



const SupportBanner = () =>{

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
            <section className='support-banner'>
                <h2>What the FAQ</h2>
            </section>
        }
        {isMobile &&
            <section className='support-banner mobile'>
                <h2>What the FAQ</h2>
            </section>
        }
        {isTablet &&
            <section className='support-banner tablet'>
                <h2>What the FAQ</h2>
            </section>
        }
        {isLaptop &&
            <section className='support-banner laptop'>
                <h2>What the FAQ</h2>
            </section>
        }
        {isDesktop &&
            <section className='support-banner desktop'>
                <h2>What the FAQ</h2>
            </section>
        }
        </div>
    )
}
export default SupportBanner






