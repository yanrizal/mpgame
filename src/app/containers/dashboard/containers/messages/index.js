import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from '../style.scss';
import NProgress from 'nprogress-npm';

export default class DashboardMessages extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    NProgress.start();
    setTimeout(() => {
      NProgress.done();
    }, 500);
  }

  render() {
    const imageStyle = "col-xs-6 col-sm-3 " + styles.placeholder;

    return (
      <div className={"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 " + styles.main}>
          <h1 className="page-header">Messages</h1>

          <div className={"row "+styles.placeholders}>
            <div className={imageStyle}>
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </div>
        </div>
    );
  }
}

