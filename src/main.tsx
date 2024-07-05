import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSageMiddleware from"redux-saga"
import myFirstReducer from './redux/reducer.tsx'
import mySaga from "./redux/sagas.tsx"


const sagaMiddleware=createSageMiddleware();
const rootReducer=combineReducers({myFirstReducer});
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
