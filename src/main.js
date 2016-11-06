import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainContainer from './containers/MainContainer/MainContainer';
import configureStore from './store/configureStore'
import Router from 'containers/Router';
import { browserHistory } from 'react-router'

const store = configureStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}/>
    </Provider>,
    document.getElementById('app')
)
