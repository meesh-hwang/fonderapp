import React from 'react';
import '../css/reset.css'
import '../css/main.css'
//npm i -S pure-react-carousel
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import goldfish from '../assets/img/goldfish-profile.svg';

const Review = () => {
    return(
        <div className='review-box'>
            <div className='review-wrapper'>
                <p className="review">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='reviewer'>
                    <Image src={goldfish} className="goldfish" alt="goldfish profile icon" />
                    <p>Goldfish Marker</p>
                </div>
            </div>
        </div>
        )
}

const Reviews = () => {

    return(
        
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        currentSlide={1}
        totalSlides={3}
        visibleSlides={1}
        infinite={true}
        isIntrinsicHeight={true}
        >
        <div className='reviews'>
            <div className='review-heading'>
                <h1>Reviews</h1>
                <div className='heading-underline'></div>
            </div>

            </div>
        
                <Slider>
                    <Slide index={0} className='review-box'>
                       <Review /> 
                    </Slide>
                    <Slide index={1} className='review-box'>
                        <Review />
                    </Slide>
                    <Slide index={2} className='review-box'>
                        <Review />
                    </Slide>
                
                </Slider>
            
            </CarouselProvider>
    );

}

export default Reviews;