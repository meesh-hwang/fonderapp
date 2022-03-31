import * as React from 'react';
import { List } from 'react-native-paper';
import { useMediaQuery } from 'react-responsive';

import '../css/reset.css'
import '../css/main.css'

import Accordion from "../components/Accordion";



const FAQAccordion = () => {

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



    return (
        <div style={{ maxWidth: '100vw' }}>
            {isXMobile &&
                <section className='faq-accordion'>
                    <Accordion
                        title="How can I change my location?"
                        content="Change your location settings in your profile under the personal information section."
                        active={true}
                    />
                    <Accordion
                        title="What can I do if I forget my password?"
                        content="When logging in, click on forget password and enter your registered email. We will send you a temporary password to login into your account where you can change your password."
                        active={false}
                    />
                    <Accordion
                        title="What can I do if I forget my username?"
                        content="Your username is just your email address. If you don’t have an account, please sign up."
                        active={false}
                    />
                    <Accordion
                        title="How can I provide feedback or make a complaint?"
                        content="You can contact us through our customer service email: info@fonder.ca or our customer phone number: 1-800-fond(3663)"
                        active={false}
                    />
                </section>
            }
            {isMobile &&
                <section className='faq-accordion mobile'>
                    <Accordion
                        title="How can I change my location?"
                        content="Change your location settings in your profile under the personal information section."
                        active={true}
                    />
                    <Accordion
                        title="What can I do if I forget my password?"
                        content="When logging in, click on forget password and enter your registered email. We will send you a temporary password to login into your account where you can change your password."
                        active={false}
                    />
                    <Accordion
                        title="What can I do if I forget my username?"
                        content="Your username is just your email address. If you don’t have an account, please sign up."
                        active={false}
                    />
                    <Accordion
                        title="How can I provide feedback or make a complaint?"
                        content="You can contact us through our customer service email: info@fonder.ca or our customer phone number: 1-800-fond(3663)"
                        active={false}
                    />
                </section>
            }
            {isTablet &&
                <section className='faq-accordion tablet'>
                    <Accordion
                        title="How can I change my location?"
                        content="Change your location settings in your profile under the personal information section."
                        active={true}
                    />
                    <Accordion
                        title="What can I do if I forget my password?"
                        content="When logging in, click on forget password and enter your registered email. We will send you a temporary password to login into your account where you can change your password."
                        active={false}
                    />
                    <Accordion
                        title="What can I do if I forget my username?"
                        content="Your username is just your email address. If you don’t have an account, please sign up."
                        active={false}
                    />
                    <Accordion
                        title="How can I provide feedback or make a complaint?"
                        content="You can contact us through our customer service email: info@fonder.ca or our customer phone number: 1-800-fond(3663)"
                        active={false}
                    />
                </section>
            }
            {isLaptop &&
                <section className='faq-accordion laptop'>
                    <Accordion
                        title="How can I change my location?"
                        content="Change your location settings in your profile under the personal information section."
                        active={true}
                    />
                    <Accordion
                        title="What can I do if I forget my password?"
                        content="When logging in, click on forget password and enter your registered email. We will send you a temporary password to login into your account where you can change your password."
                        active={false}
                    />
                    <Accordion
                        title="What can I do if I forget my username?"
                        content="Your username is just your email address. If you don’t have an account, please sign up."
                        active={false}
                    />
                    <Accordion
                        title="How can I provide feedback or make a complaint?"
                        content="You can contact us through our customer service email: info@fonder.ca or our customer phone number: 1-800-fond(3663)"
                        active={false}
                    />
                </section>
            }
            {isDesktop &&
                <section className='faq-accordion desktop'>
                    <Accordion
                        title="How can I change my location?"
                        content="Change your location settings in your profile under the personal information section."
                        active={true}
                    />
                    <Accordion
                        title="What can I do if I forget my password?"
                        content="When logging in, click on forget password and enter your registered email. We will send you a temporary password to login into your account where you can change your password."
                        active={false}
                    />
                    <Accordion
                        title="What can I do if I forget my username?"
                        content="Your username is just your email address. If you don’t have an account, please sign up."
                        active={false}
                    />
                    <Accordion
                        title="How can I provide feedback or make a complaint?"
                        content="You can contact us through our customer service email: info@fonder.ca or our customer phone number: 1-800-fond(3663)"
                        active={false}
                    />
                </section>
            }
        </div>
    )
}
export default FAQAccordion

