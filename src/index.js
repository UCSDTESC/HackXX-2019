import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Routes from './Routes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BrowserRouter>
        <Routes />
    </BrowserRouter>, document.getElementById('app'));

serviceWorker.unregister();
