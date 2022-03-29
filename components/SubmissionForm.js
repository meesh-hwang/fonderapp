import * as React from 'react';
import { useMediaQuery } from 'react-responsive';

import '../css/reset.css'
import '../css/main.css'

const SubmissionForm = () =>{

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
        <div style={{maxWidth: '100vw'}}>
        {isXMobile &&
            <section className='submission-form'>
                <div className='submission-heading'>
                <h3 className='suggestions'>Have Suggestions?</h3>
                <h3 className='help-make-app'>Help us make this app a little <span className="theme-color">Fonder!</span></h3>
                </div>

                <form action='submit.php' method='get'>

                    <div className='custom-selection'>
                    <h4>Cuisine</h4>
                    <select id="dishes">
                        <option value="">Select One</option>
                        <option value="american">American</option>
                        <option value="chinese">Chinese</option>
                    </select>
                    </div>
                    
                    <div>
                    <h4>Dish Name</h4>
                    <textarea id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                    </div>

                    <div>
                    <h4>Dish Description</h4>
                    <textarea id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                    </div>

                    <div>
                    <h4>Tags</h4>
                    <textarea id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                    </div>

                    <div>
                    <h3>DRAG AND DROP FILES</h3>
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

                <form action='submit.php' method='get'>

                    <div className='custom-selection'>
                    <h4>Cuisine</h4>
                    <select id="dishes">
                        <option value="">Select One</option>
                        <option value="american">American</option>
                        <option value="chinese">Chinese</option>
                    </select>
                    </div>

                    <div>
                    <h4>Dish Name</h4>
                    <textarea id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
                    </div>

                    <div>
                    <h4>Dish Description</h4>
                    <textarea id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
                    </div>

                    <div>
                    <h4>Tags</h4>
                    <textarea id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
                    </div>

                    <div>
                    <h3>DRAG AND DROP FILES</h3>
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

                <form action='submit.php' method='get'>

<div className='custom-selection'>
<h4>Cuisine</h4>
<select id="dishes">
    <option value="">Select One</option>
    <option value="american">American</option>
    <option value="chinese">Chinese</option>
</select>
</div>

<div>
<h4>Dish Name</h4>
<textarea id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
</div>

<div>
<h4>Dish Description</h4>
<textarea id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
</div>

<div>
<h4>Tags</h4>
<textarea id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
</div>

<div>
<h3>DRAG AND DROP FILES</h3>
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
                
                <form action='submit.php' method='get'>

<div className='custom-selection'>
<h4>Cuisine</h4>
<select id="dishes">
    <option value="">Select One</option>
    <option value="american">American</option>
    <option value="chinese">Chinese</option>
</select>
</div>

<div>
<h4>Dish Name</h4>
<textarea id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
</div>

<div>
<h4>Dish Description</h4>
<textarea id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
</div>

<div>
<h4>Tags</h4>
<textarea id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
</div>

<div>
<h3>DRAG AND DROP FILES</h3>
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

                <form action='submit.php' method='get'>

<div className='custom-selection'>
<h4>Cuisine</h4>
<select id="dishes">
    <option value="">Select One</option>
    <option value="american">American</option>
    <option value="chinese">Chinese</option>
</select>
</div>

<div>
<h4>Dish Name</h4>
<textarea id="dish-cuisine" type="text" cols="40" rows="1" placeholder="Type the dishes name"></textarea>
</div>

<div>
<h4>Dish Description</h4>
<textarea id="dish-description" type="text" cols="40" rows="2" placeholder="Short description of the dish"></textarea>
</div>

<div>
<h4>Tags</h4>
<textarea id="dish-tags" type="text" cols="40" rows="5" placeholder="Ex. pasta, marinara, italian, vegetarian"></textarea>
</div>

<div>
<h3>DRAG AND DROP FILES</h3>
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
