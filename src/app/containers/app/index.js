import React from 'react';
import { connect } from 'react-redux';
import styles from './nprogress.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

