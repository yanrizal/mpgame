import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/home.scss';

export default class Carousel extends React.Component {

  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{marginBottom:'60px'}}>
      {/*<ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="2" className=""></li>
      </ol>*/}
      <div className="carousel-inner" role="listbox">
        <div className={styles.caro+" item active"}>
          <img className="first-slide" src="img/laptop.jpg" alt="First slide"/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline.</h1>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac</p>
              
            </div>
          </div>
        </div>
        
      </div>
      {/*<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>*/}
    </div>
    );
  }
}

