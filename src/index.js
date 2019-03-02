import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name =' JSX element' ;
const elemtSample = <h1>Test Elemnt {name} </h1> ;
function tick(){
const elementDate = ( 
    <div>
        <h1>H1</h1>
        <h2> It is  {new Date().toLocaleTimeString()}. </h2>
    </div>
);
ReactDOM.render( elementDate, document.getElementById('root'));
}

setInterval(tick, 100)
//var element = React.createElement('h1',  {className:'greeting'} , 'Hello First offline  React App')
//ReactDOM.render(element, document.getElementById('root'));
//ReactDOM.render(elementDate, document.getElementById('root')) ;

//ReactDOM.render(elemtSample, document.getElementById('root')) ;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
