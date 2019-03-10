import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render = () => {
  const App = require('./app').App;
  ReactDOM.render(<AppContainer><App></App></AppContainer>, document.getElementById('app'));
};

render();
if(module.hot){ module.hot.accept(render); }
