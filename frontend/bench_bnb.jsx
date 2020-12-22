//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { createExercise } from './util/exercise_api_util';


document.addEventListener('DOMContentLoaded', () => {
  //testing start
  window.createExercise = createExercise;
  /*
  ({
    name: "something", 
    description: "woiefowiejfowiejfowef",
    repetitions: 9,
    rest_time: 9, 
    sets: 1, 
    user_id: 1
  })
  */ 
  //testing end

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
