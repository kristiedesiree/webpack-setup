import './style.scss';
console.log('Logging from the entrypoint, index.js')

const es6Function = () => {
  console.log('es6 arrow function properly compiled via babel-loader')
};

es6Function();