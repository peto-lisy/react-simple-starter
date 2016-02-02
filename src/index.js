import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';


var mountNode = document.getElementById('app');
// Use ReactDOM to render our component into mount node.
ReactDOM.render(<Application name="Joe" />, mountNode);

