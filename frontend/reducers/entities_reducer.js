import { combineReducers } from 'redux';

import benches from './benches_reducer';
import reviews from './reviews_reducer';
import users from './users_reducer';
import exercises from './exercises_reducer'
import performances from './performances_reducer'
import days from './days_reducer'
import dayExercises from './day_exercises_reducer'
import dayPerformances from './day_performances_reducer'

export default combineReducers({
  benches,
  reviews,
  users,
  exercises, 
  performances, 
  days,
  dayPerformances,
  dayExercises,
});
