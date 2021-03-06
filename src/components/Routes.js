import React from 'react';
import PrivateRoute from '../containers/PrivateRoute';
import PublicRoute from '../containers/PublicRoute';
import HomePage from './HomePage';
import TestStepper from '../containers/Test/CreateTest/TestStepper';
import Login from '../containers/Auth/Login';
import { BrowserRouter, Switch } from 'react-router-dom';
import {
  HOME,
  CREATE_TEST,
  LOGIN,
  TESTS,
  TEST,
  COURSES,
  GRAPH,
  RESULTS,
  TEST_PREVIEW
} from '../routes';
import TestTable from '../containers/Test/TestTable';
import TakeTest from '../containers/Test/TakeTest';
import SubjectsPage from '../containers/Subject';
import { default as Graph }  from '../containers/Graph';
import TestResults from '../containers/TestResults';
import TestPreview from '../containers/Test/TestPreview';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={HomePage} path={HOME} exact />
          <PublicRoute restricted={true} component={Login} path={LOGIN} exact />
          <PrivateRoute component={TestStepper} path={CREATE_TEST} exact />
          <PrivateRoute component={SubjectsPage} path={COURSES} exact />
          <PrivateRoute component={TestTable} path={TESTS} exact />
          <PrivateRoute component={TakeTest} path={TEST} exact />
          <PrivateRoute component={TestPreview} path={TEST_PREVIEW} exact />
          <PrivateRoute component={Graph} path={GRAPH} exact />
          <PrivateRoute component={TestResults} path={RESULTS} exact />
        </Switch>
      </BrowserRouter>
  );
}