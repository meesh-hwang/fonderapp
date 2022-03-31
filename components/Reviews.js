import React, { useRef, useEffect, useState } from 'react';
import '../css/reset.css'
import '../css/main.css'
import { ScrollView, Dimensions } from 'react-native-web';
import person1 from '../assets/img/goldfish-profile.svg';
import person2 from '../assets/img/error-profile.svg';
import person3 from '../assets/img/perr-profile.svg';
import { useMediaQuery } from 'react-responsive';

const Review = (item) => {


    return (
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
        var scrollView = document.querySelector('.review-box').parentElement;

        if (windowWidth <= 575) {
            var scrollTo = scrollView.offsetWidth * 0.3 + 8;
            reviews.current.scrollTo({ x: scrollTo, animated: false });
        } else if (windowWidth > 575 && windowWidth <= 767) {
            scrollTo = scrollView.offsetWidth * 0.3 - 67;
            reviews.current.scrollTo({ x: scrollTo, animated: false });
        } else if (windowWidth >= 768 && windowWidth < 992) {
            scrollTo = scrollView.offsetWidth * 0.2 + 7;
            reviews.current.scrollTo({ x: scrollTo, animated: false });
        } else {
            scrollView = null;
        }


    }, [])

    return (
        <div>
            {isXMobile &&
                <div className='reviews'>
                    <h3>Reviews</h3>
                    <ScrollView ref={reviews} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Review
                            name="Goldfish Marker"
                            image={person1}
                            review="Fonder helped me satisfy my hunger. It was so hard to choose what to eat but the application helped narrow it down to the type of food.  Food was delivered within reasonable time before I got Hangry."
                        />
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="This app is an absolute lifesaver. I make food review videos so Fonder has made it so easy! I love how I can also make reservations through OpenTable."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Fonder has helped me discover a ton of new local restaurants that I would have never thought of trying on my own."
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
                            review="Fonder helped me satisfy my hunger. It was so hard to choose what to eat but the application helped narrow it down to the type of food.  Food was delivered within reasonable time before I got Hangry."
                        />
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="This app is an absolute lifesaver. I make food review videos so Fonder has made it so easy! I love how I can also make reservations through OpenTable."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Fonder has helped me discover a ton of new local restaurants that I would have never thought of trying on my own."
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
                            review="Fonder helped me satisfy my hunger. It was so hard to choose what to eat but the application helped narrow it down to the type of food.  Food was delivered within reasonable time before I got Hangry."
                        />
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="This app is an absolute lifesaver. I make food review videos so Fonder has made it so easy! I love how I can also make reservations through OpenTable."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Fonder has helped me discover a ton of new local restaurants that I would have never thought of trying on my own."
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
                            review="Fonder helped me satisfy my hunger. It was so hard to choose what to eat but the application helped narrow it down to the type of food.  Food was delivered within reasonable time before I got Hangry."
                        />
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="This app is an absolute lifesaver. I make food review videos so Fonder has made it so easy! I love how I can also make reservations through OpenTable."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Fonder has helped me discover a ton of new local restaurants that I would have never thought of trying on my own."
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
                            review="Fonder helped me satisfy my hunger. It was so hard to choose what to eat but the application helped narrow it down to the type of food.  Food was delivered within reasonable time before I got Hangry."
                        />
                        <Review
                            name="Error Marker"
                            image={person2}
                            review="This app is an absolute lifesaver. I make food review videos so Fonder has made it so easy! I love how I can also make reservations through OpenTable."
                        />
                        <Review
                            name="Perr Marker"
                            image={person3}
                            review="Fonder has helped me discover a ton of new local restaurants that I would have never thought of trying on my own."
                        />
                    </div>
                </div>}
        </div>

    );

}

export default Reviews;