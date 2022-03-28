import React, {useRef, useEffect, useState} from 'react';
import '../css/reset.css'
import '../css/main.css'
import { ScrollView, Dimensions } from 'react-native-web';
import person1 from '../assets/img/goldfish-profile.svg';
import person2 from '../assets/img/error-profile.svg';
import person3 from '../assets/img/perr-profile.svg';
import { useMediaQuery } from 'react-responsive';

const Review = (item) => {
    

    return(
        <div className='review-box'>
            <div className='review-wrapper'>
                <p className="review">{item.review}</p>
                <div className='reviewer'>
                    <img src={item.image} className="goldfish" alt="goldfish profile icon" />
                    <p>{item.name}</p>
                </div>
            </div>
        </div>
    )
}

const Reviews = () => {

    // media queries
    const isXMobile = useMediaQuery({
        query: '(max-width: 575px)' 
    });
    const isMobile = useMediaQuery({
        query: '(min-width: 576px) and (max-width:767px)' 
    });
    const isTablet = useMediaQuery({ 
        query: '(min-width: 768px) and (max-width:991px)' 
    });
    const isLaptop = useMediaQuery({
        query: '(min-width: 992px) and (max-width: 1199px)' 
    });
    const isDesktop = useMediaQuery({
        query: '(min-width: 1200px)'
    });

    // to set the initial scroll position of the ScrollView
    const reviews = useRef();

     useEffect(() => {
        
        const windowWidth = Dimensions.get('window').width;

        if(windowWidth<=575){    
        var scrollView = document.querySelector('.css-view-1dbjc4n.r-flexDirection-18u37iz').firstChild;
            var scrollTo= scrollView.offsetWidth*0.3+8;
            reviews.current.scrollTo({x: scrollTo, animated:false});
        } else if(windowWidth>575 && windowWidth<=767){
            var scrollView = document.querySelector('.css-view-1dbjc4n.r-flexDirection-18u37iz').firstChild;
            scrollTo=scrollView.offsetWidth*0.3-67;
            reviews.current.scrollTo({x: scrollTo, animated:false});
        } else if(windowWidth>=768 && windowWidth<992){
            var scrollView = document.querySelector('.css-view-1dbjc4n.r-flexDirection-18u37iz').firstChild;
            scrollTo=scrollView.offsetWidth*0.2+7;
            reviews.current.scrollTo({x: scrollTo, animated:false});
        }else {
            scrollView=null;
        }

        
    }, [])

    return(
        <div>
            {isXMobile &&
            <div className='reviews'>
                <h3>Reviews</h3>
                <ScrollView ref={reviews} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Review 
                            name="Goldfish Marker"
                            image={person1}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        /> 
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                </ScrollView>
            </div>}
            {isMobile &&
            <div className='reviews mobile'>
                <h3>Reviews</h3>
                <ScrollView ref={reviews} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Review 
                            name="Goldfish Marker"
                            image={person1}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        /> 
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                </ScrollView>
            </div>}
            {isTablet &&
            <div className='reviews tablet'>
                <h3>Reviews</h3>
                <ScrollView ref={reviews} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Review 
                            name="Goldfish Marker"
                            image={person1}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        /> 
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                </ScrollView>
            </div>}
            {isLaptop &&
            <div className='reviews laptop'>
                <h3>Reviews</h3>
                <div className="row">
                        <Review 
                            name="Goldfish Marker"
                            image={person1}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        /> 
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                </div>
            </div>}
            {isDesktop &&
            <div className='reviews desktop'>
                <h3>Reviews</h3>
                <div className='row'>
                        <Review 
                            name="Goldfish Marker"
                            image={person1}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        /> 
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                </div>
            </div>}
        </div>

    );

}

export default Reviews;