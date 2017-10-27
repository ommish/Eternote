import React from 'react';
import { Link } from 'react-router-dom';
import NBSidemenu from '../sidemenu/sidemenu_notebook_container';

class SideNav extends React.Component {

  constructor (props) {
    super(props);
  }
  render () {

    return (
      <nav className="sidenav">
        <ul className="sidenav-ul">
          <li>LOGO</li>
          <li><button onClick={() => {}} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.greenPlus}/>
          </button></li>
          <li><button onClick={() => {}} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.notes}/>
          </button></li>
          <NBSidemenu />
          <li><button onClick={() => {}} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.tag}/>
          </button></li>
          <li><button onClick={this.props.logout} className="circle-button">
            <img className="sidenav-icon" src={window.staticAssets.account}/>
          </button></li>
        </ul>
      </nav>
    );
  }

}

export default SideNav;
