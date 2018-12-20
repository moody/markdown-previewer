import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPaneClasses } from '../../utils';
import './Editor.scss';

class Editor extends Component {
  render() {
    return (
      <div id="editor-pane" className={getPaneClasses(this.props.isModal)}>
        <header className="pane-header">
          <div>
            <FontAwesomeIcon icon="edit"/>
            <p>Editor</p>
          </div>
          <FontAwesomeIcon id="editor-expander" className="expand-button" icon="expand" onClick={this.props.toggleModal}/>
        </header>

        <textarea id="editor" onChange={this.props.handleChange} spellCheck="false" defaultValue={this.props.text} placeholder="Enter markup..."></textarea>
      </div>
    );
  }
}

export default Editor;
