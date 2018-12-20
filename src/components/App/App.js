import React, { Component } from 'react';
import { INITIAL_EDITOR_DATA } from '../../utils';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: INITIAL_EDITOR_DATA,
      editorModal: false,
      previewModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  toggleModal(event) {
    switch (event.target.id) {
      case "editor-expander":
        this.setState({
          editorModal: !this.state.editorModal,
          previewModal: false
        });
        break;
      case "preview-expander":
        this.setState({
          editorModal: false,
          previewModal: !this.state.previewModal
        });
        break;
      default:
        break;
    }
  }

  render() {
    let editor = <Editor text={this.state.text} handleChange={this.handleChange} toggleModal={this.toggleModal} isModal={this.state.editorModal} />;
    let preview = <Preview markup={this.state.text} toggleModal={this.toggleModal} isModal={this.state.previewModal} />;
    if (this.state.editorModal) preview = <div></div>;
    if (this.state.previewModal) editor = <div></div>;
    return (
      <div id="main">
        <div id="pane-container">
          {editor}
          {preview}
        </div>

        <footer id="footer">
          <p>created by <a href="https://github.com/moody" target="_blank" rel="noopener noreferrer">justin moody</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
