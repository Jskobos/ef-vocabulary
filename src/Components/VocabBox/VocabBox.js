import React, { Component } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import SearchBox from '../SearchBox/SearchBox';
import firebase from '../../firebase';
import './VocabBox.css';

class VocabBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      tags: '',
      units: {min:1, max:10},
      books: {min:1, max:10},
      cefr:  {min:0,max:6},
      vocab: this.props.project.vocab,
      sortKey: 'word'
    }

    this.handleTextInput  = this.handleTextInput.bind(this);
    this.handleTagInput   = this.handleTagInput.bind(this);
    this.addVocabEntry    = this.addVocabEntry.bind(this);
    this.editVocabEntry   = this.editVocabEntry.bind(this);
    this.deleteVocabEntry = this.deleteVocabEntry.bind(this);
    this.setMinMax        = this.setMinMax.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      vocab: nextProps.project.vocab,
      units: {min:1, max:nextProps.project.units},
      books: {min:1, max:nextProps.project.books},
    })
  }

  handleTextInput(val) {
    this.setState({filterText:val})
  }

  handleTagInput(val) {
    this.setState({tags:val})
  }

  setMinMax(target,min,max) {
    this.setState({
      [target]: {min:min, max:max}
    });
  }

  addVocabEntry(entry) {
    const vocabRef = firebase.database().ref('/projects/' + this.props.project.key + '/vocab');
    vocabRef.push(entry);
  }

  editVocabEntry(entry,wordID) {
    const wordRef = firebase.database().ref('/projects/' + this.props.project.key + '/vocab/' + wordID);
    wordRef.set(entry);
  }

  deleteVocabEntry(wordID) {
    const wordRef = firebase.database().ref('/projects/' + this.props.project.key + '/vocab/' + wordID);
    wordRef.remove().then(() => console.log(`Database entry ${wordID} removed.`))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="VocabBox">
        <SearchBox filterText={this.state.filterText}
                   cefr={this.state.cefr}
                   tags={this.state.tags}
                   books={this.state.books}
                   units={this.state.units}
                   handleTextInput={this.handleTextInput}
                   handleTagInput={this.handleTagInput}
                   setMinMax={this.setMinMax}/>
        <ResultBox vocab={this.state.vocab}
                   projectID={this.props.projectID}
                   cefr={this.state.cefr}
                   tags={this.state.tags}
                   books={this.state.books}
                   units={this.state.units}
                   filterText={this.state.filterText}
                   sortKey={this.state.sortKey}
                   addVocabEntry={this.addVocabEntry}
                   editVocabEntry={this.editVocabEntry}
                   deleteVocabEntry={this.deleteVocabEntry}/>
      </div>
    )
  }
}

export default VocabBox;
