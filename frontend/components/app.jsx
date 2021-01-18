import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchContainer from './search/search_container';
import BenchShowContainer from './bench_show/bench_show_container';
import BenchFormContainer from './bench_form/bench_form_container';
import ExerciseIndexContainer from './exercise/exercise_index_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreateExerciseFormContainer from './exercise_form/create_exercise_form_container'
import UpdateExerciseFormContainer from './exercise_form/update_exercise_form_container'
// import TraineeContainer from './'
import UserIndexContainer from './user/user_index_container'

// import CreatePerformanceFormContainer from './performance_form/create_performance_form_container'
import CreatePerformanceFormContainer from "./performance_form/create_performance_form_container";
import Landing from "./landing/landing";
import PerformanceIndexContainer from "./performance/performance_index_container"
import DayIndexContainer from "./day_index/day_index_container"
import DayShowContainer from "./day_show/day_show_container"
import LandingContainer from "./landing/landing_container"
import BannerContainer from "./banner/banner_container"
import ProfileContainer from "./profile/profile_container"
import Profile from './profile/profile';

// import RegimentContainer from "./"


const App = () => (
  <div >
    <header>
      {/* <GreetingContainer /> */}
      <BannerContainer />

    </header>
    <Switch>
      {/* Gives Warning: */}
      {/* Unknown props `location`, `computedMatch` on <div> tag. Remove these props from the element. */}
      <div className="app">

      <ProtectedRoute exact path="/exercises" component={ExerciseIndexContainer} />
      <ProtectedRoute exact path="/exercises/new" component={CreateExerciseFormContainer} />
      <ProtectedRoute exact path="/exercises/:exerciseId/update" component={UpdateExerciseFormContainer} />
      <ProtectedRoute exact path="/exercises/:exerciseId/performances/new" component={CreatePerformanceFormContainer} />

      <ProtectedRoute exact path="/performances" component={PerformanceIndexContainer} />
      <ProtectedRoute exact path="/users" component={UserIndexContainer} />
      {/* <ProtectedRoute exact path="" component={DayIndexContainer} /> */}

      <ProtectedRoute exact path="/users/:userId/days" component={DayIndexContainer} /> 
      <ProtectedRoute exact path="/users/:userId/days/:dayId" component={DayShowContainer} />
      <ProtectedRoute exact path="/profile/:userId" component={ProfileContainer} />

      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
      {/* <Route exact path="/" component={SearchContainer} /> */}
      
      <Route exact path="/" component={LandingContainer} /> 
      </div>
    </Switch>
  </div>
);

export default App;
