import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import uploadIcon from '../assets/img/upload-icon.svg';

import '../css/reset.css'
import '../css/main.css'

const SubmissionForm = () => {

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

    return (
        <div style={{ flexBasis: '50%' }}>
            {isXMobile &&
                <section className='submission-form'>
                    <div className='submission-heading'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form className='entry-form' action='submit.php' method='get'>

                        <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select id="dishes" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input type="file" required />
                                <p>Click to Upload</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>

                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <button className='submit-btn'>Submit</button>

                    </form>
                </section>
            }

            {isMobile &&
                <section className='submission-form mobile'>
                    <div className='submission-heading mobile'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form className='entry-form' action='submit.php' method='get'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select id="dishes" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" />
                                <p>Click to Upload</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <button className='submit-btn'>Submit</button>

                    </form>
                </section>
            }
            {isTablet &&
                <section className='submission-form tablet'>
                    <div className='submission-heading tablet'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form className='entry-form' action='submit.php' method='get'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select id="dishes" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" />
                                <p>Click to Upload</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <button className='submit-btn'>Submit</button>

                    </form>
                </section>
            }
            {isLaptop &&
                <section className='submission-form laptop'>
                    <div className='submission-heading laptop'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form className='entry-form' action='submit.php' method='get'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select id="dishes" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" />
                                <p>Click to Upload</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <button className='submit-btn'>Submit</button>

                    </form>
                </section>
            }
            {isDesktop &&
                <section className='submission-form desktop'>
                    <div className='submission-heading desktop'>
                        <h3 className='suggestions'>Have Suggestions?</h3>
                        <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                    </div>

                    <form className='entry-form' action='submit.php' method='get'>

                    <div className='custom-selection'>
                            <h4>Cuisine</h4>
                            <select id="dishes" required>
                                <option value="">Select One</option>
                                <option value="beef">Beef</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="chicken">Chicken</option>
                                <option value="dessert">Dessert</option>
                                <option value="goat">Goat</option>
                                <option value="lamb">Lamb</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="pasta">Pasta</option>
                                <option value="pork">Pork</option>
                                <option value="seafood">Seafood</option>
                                <option value="side-dish">Side-Dish</option>
                                <option value="starter">Starter</option>
                                <option value="vegan">Vegan</option>
                                <option value="vegetarian">Vegetarian</option>
                            </select>
                        </div>

                        <div>
                            <h4>Dish Name</h4>
                            <textarea required id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                        </div>

                        <div>
                            <h4>Dish Description</h4>
                            <textarea required id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                        </div>

                        <div>
                            <h4>Tags</h4>
                            <textarea required id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                        </div>

                        <div>
                            <label className="custom-file-upload">
                                <input required type="file" />
                                <p>Click to Upload</p>
                                <img src={uploadIcon} />
                            </label>
                        </div>


                        <div className="agree-box">
                            <input type="checkbox" id="terms-n-conditions"></input> <h3>Agree to Terms &amp; Conditions</h3>
                        </div>

                        <button className='submit-btn'>Submit</button>

                    </form>
                </section>
            }
        </div>
    )
}
export default SubmissionForm
