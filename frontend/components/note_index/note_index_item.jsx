import React from 'react';
import { NavLink } from 'react-router-dom';
import DeleteForm from '../entity_forms/delete_form_container';

class NoteIndexItem extends React.Component {

  handleClick (id) {
    return (e) => {
      if (e.target.id === "delete") {
        e.stopPropagation();
        this.props.toggleDeleteForm(id);
      } else {
        e.stopPropagation();
        let path;
        this.props.toggleSelectedNotebook(this.props.notebook);
        if (this.props.match.params.notebookId) {
          path = `/notebooks/${this.props.match.params.notebookId}/notes/${this.props.note.id}`;
        } else if (this.props.match.params.tagId) {
          path = `/tags/${this.props.match.params.tagId}/notes/${this.props.note.id}`;
        } else {
          path = `/notes/${this.props.note.id}`;
        }
        this.props.history.push(path);
      }
    };
  }

  render () {

    return (
        <div className={this.props.note.id === parseInt(this.props.match.params.noteId) ?
            "note-item active" :
            "note-item" }
            onClick={this.handleClick()}
            key={1}>
            <ul className="note-info">
              <li className="note-item-title">{this.props.note.title}</li>
              <li className="note-item-date">{new Date(this.props.note.updatedAt).toDateString()}</li>
              <li className="note-item-body-snippet">{this.props.bodySnippet}</li>
            </ul>
            <div>
              <img
                id="delete"
                className="note-trash-icon"
                onClick={this.handleClick(this.props.note.id)}
                src={window.staticAssets.trash}/>
            </div>
          </div>
      );
    }
  }

  export default NoteIndexItem;
