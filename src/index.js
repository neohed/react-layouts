import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import App from './components/App'
import Menu from './components/Menu'
import GridForm from './components/GridForm'
import DemoModal from './components/DemoModal'
import DemoHolyGrail from './components/DemoHolyGrail'

import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route path="/grid-form" component={GridForm}/>
                <Route path="/demo-modal" component={DemoModal}/>
                <Route path="/holy-grail" component={DemoHolyGrail}/>
                <Route path="/" component={Menu}/>
            </Switch>
        </App>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
