import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import  {Router} from 'react-router';


ReactDOM.render(<Router>{Routes}</Router>, document.getElementById('root'));
registerServiceWorker();
