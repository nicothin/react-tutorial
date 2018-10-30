import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lesson from './components/Lesson.js';
import registerServiceWorker from './registerServiceWorker';

const hrader = <h1>Хелл о ворлд</h1>;

ReactDOM.render(<Lesson />, document.getElementById('root'));
registerServiceWorker();
