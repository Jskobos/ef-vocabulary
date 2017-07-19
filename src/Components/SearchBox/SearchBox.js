import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onFilterInputChange = this.onFilterInputChange.bind(this);
  }

  onFilterInputChange(e) {
    this.props.handleTextInput(e.target.value);
  }

  render() {
    return(
      <div className="SearchBox">
        <form>
          <FormGroup>
            <FormControl
              type="text"
              value={this.props.filterText}
              placeholder="Search"
              onChange={this.onFilterInputChange}
            />
          </FormGroup>
        </form>
      </div>
    )
  }
}


export default SearchBox;
