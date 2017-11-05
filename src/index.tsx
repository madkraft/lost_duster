import 'semantic-ui-css/semantic.min.css'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import App from './App'
import { MainState, rootEpic, rootReducer } from './redux'
import registerServiceWorker from './registerServiceWorker'

const epicMiddleware = createEpicMiddleware(rootEpic)

const store = createStore<MainState>(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
