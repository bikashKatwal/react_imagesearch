import React, {Component} from 'react';

class SearchBar extends Component {


    onSearchInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" placeholder="Search.." onChange={this.onSearchInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;