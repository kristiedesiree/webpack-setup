import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import png from './assets/cat.png';
import gif from './assets/matlab.gif';
import jpg from './assets/mushrooms.jpg';
import small from './assets/small.svg';
import large from './assets/large.svg';
console.log('Logging from the entrypoint, index.js')

const es6Function = () => {
  console.log('es6 arrow function properly compiled via babel-loader');
};
es6Function();
console.log('images should return links', png, gif, jpg);
console.log('SVG <1MB should be base 64 encoded string', small);
console.log('SVG >1MB should be link', large);

ReactDOM.render(<App />, document.getElementById('root'))
