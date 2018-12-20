import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import marked from 'marked';
import { getPaneClasses } from '../../utils';
import './Preview.scss';

class Preview extends Component {
  render() {
    let markup = { __html: marked(this.props.markup) };
    return (
      <div id="preview-pane" className={getPaneClasses(this.props.isModal)}>
        <header className="pane-header">
          <div>
            <FontAwesomeIcon icon="eye"/>
            <p>Live Preview</p>
          </div>
          <FontAwesomeIcon id="preview-expander" className="expand-button" icon="expand" onClick={this.props.toggleModal}/>
        </header>
        
        <div id="preview" dangerouslySetInnerHTML={markup}></div>
      </div>
    );
  }
}

export default Preview;
