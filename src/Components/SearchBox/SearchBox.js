import React, { Component } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onFilterInputChange = this.onFilterInputChange.bind(this);
    this.onSetInputChange    = this.onSetInputChange.bind(this);
  }

  onFilterInputChange(e) {
    this.props.handleTextInput(e.target.value);
  }

  onSetInputChange(e) {
    this.props.handleSetInput(e.target.value);
  }

  render() {
    return(
      <div className="SearchBox">
        <Form inline>
          <FormGroup>
            <FormControl
              type="text"
              value={this.props.filterText}
              placeholder="Search"
              onChange={this.onFilterInputChange}
            />
            <FormControl
              type="text"
              value={this.props.set}
              placeholder="Tags"
              onChange={this.onSetInputChange}
            />
          </FormGroup>
        </Form>
      </div>
    )
  }
}


export default SearchBox;
