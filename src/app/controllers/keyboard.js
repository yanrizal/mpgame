import { keyboard } from '../helpers/keyboard';
import io from 'socket.io-client';

export const socket = io();
const rightBtn = keyboard(68);
const leftBtn = keyboard(65);
const upBtn = keyboard(87);
const downBtn = keyboard(83);

rightBtn.press = function() {
  socket.emit('client:keyPress',{
    inputId:'right',
    state:true
  })
};

rightBtn.release = function() {
  socket.emit('client:keyPress',{
    inputId:'right',
    state:false
  })
};

leftBtn.press = function() {
  socket.emit('client:keyPress',{
    inputId:'left',
    state:true
  })
};

leftBtn.release = function() {
  socket.emit('client:keyPress',{
    inputId:'left',
    state:false
  })
};

upBtn.press = function() {
  console.log('up')
  socket.emit('client:keyPress',{
    inputId:'up',
    state:true
  })
};

upBtn.release = function() {
  socket.emit('client:keyPress',{
    inputId:'up',
    state:false
  })
};

downBtn.press = function() {
  socket.emit('client:keyPress',{
    inputId:'down',
    state:true
  })
};

downBtn.release = function() {
  socket.emit('client:keyPress',{
    inputId:'down',
    state:false
  })
};