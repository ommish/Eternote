import MapView from './map_view';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal, toggleDeleteForm } from '../../actions/ui_actions';
import { sortItems } from '../../util/sorters';

const mapStateToProps = (state, ownProps) => {
  return {
    flags: sortItems(Object.values(state.entities.flags), 4),
    mapViewOpen: state.ui.mapView,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleMapView: () => dispatch(toggleModal('mapView')),
    toggleDeleteForm: (id) => dispatch(toggleDeleteForm({id, type: "flag"}))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MapView));
