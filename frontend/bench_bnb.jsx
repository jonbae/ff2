//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { createExercise } from './util/exercise_api_util';
import { createPerformance, deletePerformance, fetchPerformance, fetchExercisePerformances } from "./util/performance_api_util";
import { fetchUsers } from './util/session_api_util'
import { fetchDays } from "./util/day_api_util";
import { fetchDayExercises } from "./util/day_exercise_api_util";
import { select } from './reducers/selectors';
import { fetchDayPerformances } from './util/day_performance_api_util';

document.addEventListener('DOMContentLoaded', () => {
  
  //testing start
  window.createPerformance = createPerformance; 
  window.deletePerformance = deletePerformance;
  window.fetchUsers = fetchUsers;
  window.fetchPerformance = fetchPerformance;
  window.fetchExercisePerformances = fetchExercisePerformances;  
  window.fetchDays = fetchDays; 
  window.fetchDayExercises = fetchDayExercises;
  window.select = select;
  window.fetchDayPerformances = fetchDayPerformances
  
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
