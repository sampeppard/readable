import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css'
import reducers from './reducers/index.js'
import App from './constiners/App'
import registerServiceWorker from './utils/registerServiceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
