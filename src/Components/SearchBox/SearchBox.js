import React, { Component } from 'react';
import { Button, Grid, Row, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import CefrSelect from '../CefrSelect/CefrSelect';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onFilterInputChange = this.onFilterInputChange.bind(this);
    this.onSetInputChange    = this.onSetInputChange.bind(this);
    this.onMinChange         = this.onMinChange.bind(this);
    this.onMaxChange         = this.onMaxChange.bind(this);
    this.clearAll            = this.clearAll.bind(this);
  }

  onFilterInputChange(e) {
    this.props.handleTextInput(e.target.value);
  }

  onSetInputChange(e) {
    this.props.handleSetInput(e.target.value);
  }

  onMinChange(e) {
    const name = e.target.name;
    const min = Number(e.target.value);
    const max = this.props[name]['max'];
    this.props.setMinMax(name,min,max);
  }

  onMaxChange(e) {
    const name = e.target.name;
    const min = this.props[name]['min'];
    const max = Number(e.target.value);
    this.props.setMinMax(name,min,max);
  }

  clearAll() {
    this.props.setMinMax('cefr',0,5);
    this.props.setMinMax('units',1,10);
    this.props.setMinMax('books',1,10);
    this.props.handleTextInput('');
    this.props.handleSetInput('');
  }

  render() {
    return(
      <div className="SearchBox">
        <Grid>
        <Row>
          <Form inline>
            <FormGroup>
              <FormControl
                className="text-search"
                type="text"
                value={this.props.filterText}
                placeholder="Search"
                onChange={this.onFilterInputChange}
              />
              <FormControl
                type="text"
                className="tag-input"
                value={this.props.set}
                placeholder="Tags"
                onChange={this.onSetInputChange}
              />
            </FormGroup>
          </Form>
        </Row>
        <Row>
          <Form inline>
            <ControlLabel>Books: </ControlLabel>
            <FormControl
              className="small-input"
              name="books"
              type="text"
              value={this.props.books.min}
              onChange={this.onMinChange}
            />
            <ControlLabel>–</ControlLabel>
            <FormControl
              className="small-input"
              name="books"
              type="text"
              value={this.props.books.max}
              onChange={this.onMaxChange}
            />
            <ControlLabel>Units: </ControlLabel>
            <FormControl
              className="small-input"
              type="text"
              name="units"
              value={this.props.units.min}
              onChange={this.onMinChange}
            />
            <ControlLabel>–</ControlLabel>
            <FormControl
              className="small-input"
              type="text"
              name="units"
              value={this.props.units.max}
              onChange={this.onMaxChange}
            />
            <ControlLabel>CEFR: </ControlLabel>
            <CefrSelect onChange={this.onMinChange}/>
            <ControlLabel>–</ControlLabel>
            <CefrSelect onChange={this.onMaxChange}/>
            <Button onClick={this.clearAll} bsStyle="warning">Clear</Button>
          </Form>
        </Row>
        </Grid>
      </div>
    )
  }
}


export default SearchBox;
