import * as React from 'react';
import { List } from 'react-native-paper';
import { useMediaQuery } from 'react-responsive';

import '../css/reset.css'
import '../css/main.css'

import Accordion from "../components/Accordion";



const FAQAccordion = () =>{
    
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
        <div style={{maxWidth:'100vw'}}>
        {isXMobile &&
        <section className='faq-accordion'>
                <Accordion
                    title="Question 1"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {true}
                />
                <Accordion
                    title="Question 2"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {false}
                />
                <Accordion
                    title="Question 3"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
                <Accordion
                    title="Question 4"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
        </section>
        }
        {isMobile &&
        <section className='faq-accordion mobile'>
                <Accordion
                    title="Question 1"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {true}
                />
                <Accordion
                    title="Question 2"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {false}
                />
                <Accordion
                    title="Question 3"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
                <Accordion
                    title="Question 4"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
        </section>
        }
        {isTablet &&
        <section className='faq-accordion tablet'>
                <Accordion
                    title="Question 1"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {true}
                />
                <Accordion
                    title="Question 2"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {false}
                />
                <Accordion
                    title="Question 3"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
                <Accordion
                    title="Question 4"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
        </section>
        }
        {isLaptop &&
        <section className='faq-accordion laptop'>
                <Accordion
                    title="Question 1"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {true}
                />
                <Accordion
                    title="Question 2"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {false}
                />
                <Accordion
                    title="Question 3"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
                <Accordion
                    title="Question 4"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
        </section>
        }
        {isDesktop &&
        <section className='faq-accordion desktop'>
                <Accordion
                    title="Question 1"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {true}
                />
                <Accordion
                    title="Question 2"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active= {false}
                />
                <Accordion
                    title="Question 3"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
                <Accordion
                    title="Question 4"
                    content="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at"
                    active={false}
                />
        </section>
        }
        </div>
    )
}
export default FAQAccordion






