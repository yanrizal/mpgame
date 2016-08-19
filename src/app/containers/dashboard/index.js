import React, { PropTypes } from 'react';
import Sidebar from './components/sidebar'
import Header from './components/header'
import { connect } from 'react-redux';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar/>
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

