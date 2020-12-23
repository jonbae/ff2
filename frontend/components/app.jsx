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


const App = () => (
  <div>
    <header>

      <GreetingContainer />
    </header>
    <Switch>
      <ProtectedRoute exact path="/exercises" component={ExerciseIndexContainer} />
      
      <ProtectedRoute exact path="/exercises/new" component={CreateExerciseFormContainer} />
      
      <ProtectedRoute exact path="/exercises/:exerciseId/update" component={UpdateExerciseFormContainer} />
      {/* <ProtectedRoute path = "/exercises/:exerciseId"  */}


      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
      <Route path="/benches/:benchId" component={BenchShowContainer} />
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
