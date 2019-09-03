import React, {Component} from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        try {
            const response = await unsplash.get('/search/photos', {
                params: {query: term}
            });
            this.setState({images: response.data.results});
        } catch (error) {
            console.error(error);
        }

        // axios.get('https://api.unsplash.com/search/photos', {
        //     params: {query: term},
        //     headers: {
        //         Authorization: 'Client-ID e5278e2af80e1baa42328ab9ece88a091b6580a9a7ed9c0a3f19da187dde4daf'
        //     }
        // }).then((response) => {
        //     console.log(response.data.results);
        // });
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmitOfSearchBar={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;