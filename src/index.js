import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import Hero from './components/Hero';

let firstElement = <h1 class='h'>Hello World</h1>;

ReactDOM.render(<Hero/>, document.getElementById('root'));