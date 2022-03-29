import {View} from 'react-native';
import {Helmet} from "react-helmet";
import { useMediaQuery } from 'react-responsive';

// Componenets Import
import SubmissionBanner from "../components/SubmissionBanner";
import SubmissionForm from "../components/SubmissionForm";



const Submission = () =>{

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
    <View>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Fonder</title>
                <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;700&family=Oranienbaum&family=Poppins:wght@600&family=Shrikhand&display=swap" rel="stylesheet"/>
        </Helmet>

        {isXMobile && 
        <div>
        <SubmissionBanner /> 
        <SubmissionForm />
        </div>
        }

        {isMobile && 
        <div>
        <SubmissionBanner /> 
        <SubmissionForm />
        </div>
        }

        {isTablet && 
        <div>
        <SubmissionBanner /> 
        <SubmissionForm />
        </div>
        }

        {isLaptop && 
        <div style={{maxWidth: '100vw'}} className="flex-submission">
        <SubmissionBanner /> 
        <div className="sub-form"><SubmissionForm />
        </div>
        </div>
        }

        {isDesktop && 
        <div style={{maxWidth: '100vw'}} className="flex-submission">
        <SubmissionBanner /> 
        <div className="sub-form"><SubmissionForm />
        </div>
        </div>
        }


    </View>
    )
}
export default Submission;
