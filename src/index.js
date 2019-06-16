import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
console.log('Logging from the entrypoint, index.js')

const es6Function = () => {
  console.log('es6 arrow function properly compiled via babel-loader')
};

es6Function();

ReactDOM.render(<App />, document.getElementById('root'))

console.log('line after REACTDOM render exec')