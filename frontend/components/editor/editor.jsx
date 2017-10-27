import React from 'react';
import ReactQuill from 'react-quill';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' } ;// You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    }

    // style, b/i/u, attachment, ul, ol, remove format,
    // font color, font size, strikethrough, alignment,
    // indent, sub/superscript
  handleChange(content, delta, source, editor) {
    this.setState({ text: editor.getContents() });
    console.log(content);
    console.log(delta);
    console.log(source);
    console.log(editor);
  }



  render() {
    return (
      <ReactQuill value={this.state.text}
                  onChange={this.handleChange}
                  id="quill" />
              );
  }
}

export default Editor;
