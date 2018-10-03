import React from 'react';
import ReactDOM from 'react-dom';


//youtube API key
const API_KEY = 'AIzaSyCjpBuUe7SXUr2b8Lowen_7va9x5M66sE4';

// create a new component and produce some html
//ES6
// step 2: render the application 
const App = function () {
    return <div > HI!this is Samuel Ondeiki < /div>;

}

ReactDOM.render( < App / > , document.querySelector('.container'));