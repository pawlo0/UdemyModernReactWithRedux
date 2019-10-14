import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';

export default class App extends React.Component {

    state = { videos: [] };

    onTermSubmit = async searchTerm => {
        const response = await youtube.get('/search', {
            params: {
                q: searchTerm
            }
        });

        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
        );
    }
}
