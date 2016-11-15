import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NProgress from 'nprogress-npm';
import { Surface , Image, Text } from 'react-canvas';
import io from 'socket.io-client';
let socket = io(`http://localhost:3000`)

export default class Home extends React.Component {

  state = {    
    players:[]
  }

  constructor () {
    super()
  }

  componentWillMount(){
    socket.on('server:newPos', (data) => {
      this.setState({
        players: data
      });
      console.log(data);
    })
  }

  componentDidMount(){
    socket.emit('client:message', {
      x1:'test'
    })

    socket.on('server:message', (data) => {
      console.log(data.msg)
    })

    
  }

  render() {
    const playerNode = this.state.players.map((player,idx) => {
      const textStyle = {
        left: player.x,
        width: window.innerWidth,
        height: 20,
        lineHeight: 20,
        fontSize: 12,
        top: player.y
      }
      return (
        <Text key={idx} style={textStyle}>wow</Text>
      )
    })
    

    return (
      <Surface width={500} height={500} left={0} top={0} >
        {playerNode}
      </Surface>
    );
  }
}

