import Sidemenu from './sidemenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    items: Object.values(state.entities.notebooks),
    sidemenuOpen: state.ui.sidemenu,
    itemType: "notebook",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSidemenu: () => dispatch(toggleModal("sidemenu")),
    toggleCreateForm: () => dispatch(toggleModal("createForm")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu);
