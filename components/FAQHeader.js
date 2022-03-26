import { useMediaQuery } from 'react-responsive';

import '../css/reset.css'
import '../css/main.css'



const FAQHeader = () =>{

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
            <section className='faq-header'>
                <h3>Frequently Asked Questions</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
            </section>
        }
        {isMobile &&
            <section className='faq-header mobile'>
                <h3>Frequently Asked Questions</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
            </section>
        }
        {isTablet &&
            <section className='faq-header tablet'>
                <h3>Frequently Asked Questions</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
            </section>
        }
        {isLaptop &&
            <section className='faq-header laptop'>
                <h3>Frequently Asked Questions</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
            </section>
        }
        {isDesktop &&
            <section className='faq-header desktop'>
                <h3>Frequently Asked Questions</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
            </section>
        }
        </div>
    )
}
export default FAQHeader






