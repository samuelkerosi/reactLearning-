import React, {
    Component
} from 'react';

//defining search bar normally (functional)
// const SearchBar = ()=> {
//     return <input/>
// }


//writing classes using es6
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ' '
        };
    }



    render() {
        //.... and also listening to the changes in the input 
        return <input onChange = {
            (event) => console.log(event.target.value)
        }
        />;
    }
    // //when the user interacts with the search bar ....event handler 
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

}

export default SearchBar;