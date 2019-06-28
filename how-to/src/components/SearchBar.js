import React from "react"
import { connect } from "react-redux"
import { fetchByAuthor, fetchByText } from "../actions"

//styles
import { IconButton, InputAdornment, Input, FormControl } from '@material-ui/core/'


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
        this.props.fetchByText(this.state.searchTerm)
        this.setState({ searchTerm: "" })
        this.props.history.push("/searchresults");
    }

    render() {
        return (
            <FormControl onSubmit={this.search}>
                <Input
                    autoFocus={true}
                    onChange={this.handleChanges}
                    value={this.state.searchTerm}
                    name="searchTerm"
                    placeholder="Search"
                    endAdornment={<InputAdornment position="end"><IconButton onClick={this.search}><i className="fas fa-search" color="#f69314" /></IconButton></InputAdornment>}
                />
            </FormControl>

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
    { fetchByAuthor, fetchByText }
)(SearchBar);