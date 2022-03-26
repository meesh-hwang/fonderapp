import * as React from 'react';
import { List } from 'react-native-paper';

import '../css/reset.css'
import '../css/main.css'

import Accordion from "../components/Accordion";



const FAQAccordion = () =>{
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return(
        <section className='faq-accordion'>
                {/* <List.Accordion
                    className = "accordion"
                    title={
                        <h4>Question 1</h4>
                    }
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title={
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
                    } />
                </List.Accordion>
                <List.Accordion
                    title="Question 2"
                >
                    <List.Item title={
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at</p>
                    } />
                </List.Accordion>
                <List.Accordion
                    title="Question 3"
                >
                    <List.Item title="First item" />
                </List.Accordion>
                <List.Accordion
                    title="Question 4"
                >
                    <List.Item title="First item" />
                </List.Accordion> */}
                <Accordion
                    title="Question 1"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    active= {true}
                />
                <Accordion
                    title="Question 2"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    active= {false}

                />
                <Accordion
                    title="Question 3"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    active={false}
                />
        </section>
    )
}
export default FAQAccordion






