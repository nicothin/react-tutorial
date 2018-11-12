import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Counter from './components/Counter.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
