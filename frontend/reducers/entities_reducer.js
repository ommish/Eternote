import { combineReducers } from 'redux';
import NotebooksReducer from './notebooks_reducer';
import NotesReducer from './notes_reducer';
import TagsReducer from './tags_reducer';
import FlagsReducer from './flags_reducer';
import MarkersReducer from './markers_reducer';

export default combineReducers({
  notebooks: NotebooksReducer,
  notes: NotesReducer,
  tags: TagsReducer,
  flags: FlagsReducer,
  markers: MarkersReducer,
});
