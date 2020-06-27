import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import ScoreBoard from './components/ScoreBoard';

// Setup a redux store
const initialState = {
  score: 0,
  players: [
    {
      name: 'Test',
      class: 'Mage'
    },
    {
      name: 'Test2',
      class: 'Warrior'
    }
  ],
  inventory: [
    {
      count: 100,
      type: 'potion'
    }
  ]
}
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'YOU_WIN':
      return {
        ...state,
        score: state.score + action.payload.points
      }
    case 'YOU_LOSE':
      return {
        ...state,
        score: state.score - action.payload.points
      }
    default:
      return state;
  }
}
const store = createStore(reducer);

// Provide that store to the App

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
