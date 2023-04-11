import React, {Component} from 'react';
import { MdSearch } from 'react-icons/md'
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            placeHolder: "Star wars, Retour vers le futur..."
        }
    }
    render() {
        return (
            <div className="mx-auto w-1/2 sm:max-w-md">
                <div className="my-4 flex">
                    <input 
                    type="text" 
                    name="first-name" 
                    id="first-name" 
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6" 
                    placeholder={this.state.placeHolder}
                    onChange={this.handleChange.bind(this)} />
                    <button className="btn btn-secondary mx-2" onClick={this.handleOnClick.bind(this)}><MdSearch /></button>
                </div>
            </div>
        )
    }

    handleOnClick() {
        console.log("click");
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    }
}

export default SearchBar;