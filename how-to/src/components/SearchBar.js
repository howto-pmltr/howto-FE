import React from "react"
import { connect } from "react-redux"
import { fetchByAuthor } from "../actions"


class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.searchTerm)
    };

    search = e => {
        e.preventDefault();
        this.props.fetchByAuthor(this.state.searchTerm)
        this.setState({ searchTerm: "" })
        this.props.history.push("/searchresults");
    }

    render() {
        return (

            <form onSubmit={this.search}>
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

const mapStateToProps = state => {
    return {
        articles: state.articles,
        fetching: state.fetching,
        error: state.error,
        editingStep: state.editingStep
    };
};

export default connect(
    mapStateToProps,
    { fetchByAuthor }
)(SearchBar);