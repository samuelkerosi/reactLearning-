import React, {
    Component
} from 'react';

//defining search bar normally (functional)
// const SearchBar = ()=> {
//     return <input/>
// }


//writing classes using es6
//make manula chnages to state inisde the constructor 
class SearchBar extends Component {
    //constructor
    constructor(props) {
        super(props);

        this.state = {
            term: ' '
        };
    }

    render() {
        //.... and also listening to the changes in the input 
        return (
        <div>
        <input 
        //makes input a controlled component 
        //this.state --> makes the function re-render 
        value = {this.state.term}
        onChange = {event =>this.setState({term: event.target.value})}/>
        </div>
         );
         
        }
    }
    // //when the user interacts with the search bar ....event handler 
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }



export default SearchBar;