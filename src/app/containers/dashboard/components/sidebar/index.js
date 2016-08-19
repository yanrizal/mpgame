import React, { PropTypes } from 'react';
import styles from './style.scss';
import { Link } from 'react-router';

export default class Sidebar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"col-sm-3 col-md-2 "+ styles.sidebar}>
        <ul className="nav nav-sidebar">
          <li className="active"><Link to="/dashboard">Dashboard <span className="sr-only">(current)</span></Link></li>
          <li><Link to="/dashboard/products">Products</Link></li>
          <li><Link to="/dashboard/messages">Messages</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    );
  }
}

