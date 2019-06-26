import React from "react"
import { connect } from "react-redux"


class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    search = e => {
        e.preventDefault();

    }
    render() {
        return (
            <form onInput={this.search}>
                <input
                    autoFocus={true}
                    placeholder="Search"
                    onChange={this.handleChanges}
                    value={this.state.searchTerm}
                    name="searchTerm"
                />
                <button onClick={this.search}>Search</button>
            </form>
        )
    }
}

export default SearchBar;