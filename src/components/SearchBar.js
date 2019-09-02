import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input placeholder="First Name"/>
                </div>
            </form>
        );
    }
}

export default SearchBar;