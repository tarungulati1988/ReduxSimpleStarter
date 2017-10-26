import React, { Component } from 'react';


// class based component
class SearchBar extends Component {

    // default JS constructor, first method to be called for all classes
    // term: the user input as the user types in the search bar
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = { term: '' };
    }

    // render is the first method called for any react component
    render() {
        return ( 
            <div className = "search-bar">
                <input 
                    value = { this.state.term }
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    // method to handle the on state change for the input/search bar
    onInputChange(term) {
        this.setState({ 
            term : term
        });
        this.props.onSearchTermChange(term);
        // console.info(event.target.value);
    }

}

export default SearchBar;