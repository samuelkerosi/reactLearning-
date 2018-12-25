import React from 'react';
import ReactDOM from 'react-dom';
//importing search bar from search 
import SearchBar from './components/search_bar';

//youtube API key
const API_KEY = 'AIzaSyCjpBuUe7SXUr2b8Lowen_7va9x5M66sE4';

// create/declare a new component and produce some html

class App extends Component{
    render(){
    return (
    <div> 
      <SearchBar/>
   </div>
    );
    };
}
// step 2: render the application
ReactDOM.render( < App / > , document.querySelector('.container'));