import React, { Component } from 'react';
import { Grid, Row, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onFilterInputChange = this.onFilterInputChange.bind(this);
    this.onSetInputChange    = this.onSetInputChange.bind(this);
    this.onBookMinChange     = this.onBookMinChange.bind(this);
    this.onBookMaxChange     = this.onBookMaxChange.bind(this);
    this.onUnitMaxChange     = this.onUnitMaxChange.bind(this);
    this.onUnitMinChange     = this.onUnitMinChange.bind(this);
    this.onCefrMinChange     = this.onCefrMinChange.bind(this);
    this.onCefrMaxChange     = this.onCefrMaxChange.bind(this);
  }

  onFilterInputChange(e) {
    this.props.handleTextInput(e.target.value);
  }

  onSetInputChange(e) {
    this.props.handleSetInput(e.target.value);
  }

  onBookMinChange(e) {
    const min = e.target.value;
    const max = this.props.books.max;
    this.props.setBooks(min,max);
  }

  onBookMaxChange(e) {
    const max = e.target.value;
    const min = this.props.books.min;
    this.props.setBooks(min,max);
  }

  onUnitMinChange(e) {
    const min = e.target.value;
    const max = this.props.units.max;
    this.props.setUnits(min,max);
  }

  onUnitMaxChange(e) {
    const min = this.props.units.min;
    const max = e.target.value;
    this.props.setUnits(min,max);
  }

  onCefrMinChange(e) {
    const min = e.target.value;
    const max = this.props.cefr.max;
    this.props.setCefrRange(min,max);
  }

  onCefrMaxChange(e) {
    const min = this.props.cefr.min;
    const max = e.target.value;
    this.props.setCefrRange(min,max);
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
              type="text"
              value={this.props.books.min}
              onChange={this.onBookMinChange}
            />
            <ControlLabel>–</ControlLabel>
            <FormControl
              className="small-input"
              type="text"
              value={this.props.books.max}
              onChange={this.onBookMaxChange}
            />
            <ControlLabel>Units: </ControlLabel>
            <FormControl
              className="small-input"
              type="text"
              value={this.props.units.min}
              onChange={this.onUnitMinChange}
            />
            <ControlLabel>–</ControlLabel>
            <FormControl
              className="small-input"
              type="text"
              value={this.props.units.max}
              onChange={this.onUnitMaxChange}
            />
            <ControlLabel>CEFR: </ControlLabel>
            <FormControl componentClass="select"
              className="small-input"
              onChange={this.onCefrMinChange}>
              <option value="0">A1</option>
              <option value="1">A2</option>
              <option value="2">B1</option>
              <option value="3">B2</option>
              <option value="4">C1</option>
              <option value="5">C2</option>
            </FormControl>
            <ControlLabel>–</ControlLabel>
            <FormControl componentClass="select"
              placeholder={this.props.cefr.max}
              className="small-input"
              onChange={this.onCefrMaxChange}>
              <option value="0">A1</option>
              <option value="1">A2</option>
              <option value="2">B1</option>
              <option value="3">B2</option>
              <option value="4">C1</option>
              <option value="5">C2</option>
            </FormControl>
          </Form>
        </Row>
        </Grid>
      </div>
    )
  }
}


export default SearchBox;
