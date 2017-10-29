import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';
import Modal from 'react-modal';
import NotebookDropdown from './notebook_dropdown_container';
import Delta from 'quill-delta';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']
      ]
    };

    this.formats = [
      'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike',
      'blockquote', 'code-block', 'list', 'bullet', 'script', 'indent',
      'color', 'background', 'align', 'clean', 'direction'
    ];
}

handleBodyChange (content, delta, source, editor) {
  const newState = merge({}, this.state);
  newState.body = editor.getContents();
  newState.body_plain = editor.getText().trim();
  this.setState(newState);
}

handleTitleChange(e) {
  let newState = merge({}, this.state);
  newState.title = e.target.value;
  this.setState(newState);
}

handleSubmit() {
  let newState = merge({}, this.state);
  newState.notebook_id = this.props.selectedNotebook.id;
  newState.body = JSON.stringify(newState.body); // get quill error unless I do this
                                                // but body will not show up in editor
  this.props.action(newState);
  this.setState({ title: "", body: {}, body_plain: "", notebook_id: this.props.selectedNotebook.id});
}

componentWillReceiveProps(newProps) {
  if (this.props.location.pathname !== newProps.location.pathname) {
    this.setState(newProps.note);
  }
}

render() {
  return (
    <main>
      <NotebookDropdown />
      <input
        onChange={this.handleTitleChange}
        placeholder="Title your note"
        type="text"
        className="title"
        value={this.state.title}/>
      <ReactQuill
        id="quill"
        modules={this.modules}
        formats={this.formats}
        onChange={this.handleBodyChange}
        defaultValue={new Delta(this.state.body)}
        />
      <button
        className="square-button small narrow"
        onClick={this.handleSubmit}>Save Note</button>
    </main>
  );
}
}

export default Editor;
