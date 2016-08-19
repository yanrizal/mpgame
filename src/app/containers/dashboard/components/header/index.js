import React, { PropTypes } from 'react';
import styles from './style.scss';
import { Link } from 'react-router';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
     <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <span className="navbar-brand"><Link to="/" style={{color:'#FFF'}}>Vida web</Link></span>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..." />
          </form>
        </div>
      </div>
      </nav>
    );
  }
}

