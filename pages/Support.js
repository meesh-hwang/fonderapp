import {View} from 'react-native';
import {Helmet} from "react-helmet";
import SupportBanner from "../components/SupportBanner";
import FAQHeader from '../components/FAQHeader';
import FAQAccordion from '../components/FAQAccordion.js';


const Support = () =>{
    return(
    <View>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
                <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Oranienbaum&family=Shrikhand&display=swap" rel="stylesheet"/>
        </Helmet>
        <SupportBanner />
        <FAQHeader />
        <FAQAccordion />
    

    </View>
    )
}
export default Support;