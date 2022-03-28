import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import swipeImage from '../assets/img/Swipe.png';
import reserveTableImage from '../assets/img/Table.png';
import deliveredImage from '../assets/img/Door.png';
import '../css/reset.css'
import '../css/main.css'



const Features = () =>{

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
        <div className='banner-wrapper'>
        {isXMobile &&
            <section className='features'>
                <div className='item'>
                    <h4>Swipe for Food</h4>
                    <div className="row">
                        <img className="left-col"src={swipeImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Reserve a Table</h4>
                    <div className="row">
                        <img className="left-col"src={reserveTableImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Get it Delivered</h4>
                    <div className="row">
                        <img className="left-col"src={deliveredImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </section>
        }
        {isMobile &&
            <section className='features mobile'>
                <div className='item'>
                    <h4>Swipe for Food</h4>
                    <div className="row">
                        <img className="left-col"src={swipeImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Reserve a Table</h4>
                    <div className="row">
                        <img className="left-col"src={reserveTableImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Get it Delivered</h4>
                    <div className="row">
                        <img className="left-col"src={deliveredImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </section>
        }
        {isTablet &&
            <section className='features tablet'>
                <div className='item'>
                    <h4>Swipe for Food</h4>
                    <div className="row">
                        <img className="left-col"src={swipeImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Reserve a Table</h4>
                    <div className="row">
                        <img className="left-col"src={reserveTableImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Get it Delivered</h4>
                    <div className="row">
                        <img className="left-col"src={deliveredImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </section>
        }
        {isLaptop &&
            <section className='features laptop'>
                <div className='item'>
                    <h4>Swipe for Food</h4>
                    <div className="row">
                        <img className="left-col"src={swipeImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Reserve a Table</h4>
                    <div className="row">
                        <img className="left-col"src={reserveTableImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Get it Delivered</h4>
                    <div className="row">
                        <img className="left-col"src={deliveredImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </section>
        }
        {isDesktop &&
            <section className='features desktop'>
                <div className='item'>
                    <h4>Swipe for Food</h4>
                    <div className="row">
                        <img className="left-col"src={swipeImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Reserve a Table</h4>
                    <div className="row">
                        <img className="left-col"src={reserveTableImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className='item'>
                    <h4>Get it Delivered</h4>
                    <div className="row">
                        <img className="left-col"src={deliveredImage}/>
                        <p className="right-col">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </section>
        }

        </div>
    )
}
export default Features






