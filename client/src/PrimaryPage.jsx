import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './HomePage/Home.jsx';
import Project from './HomePage/ProjectsMain.jsx';

const PrimaryPage = ({ match }) => (
  <div className="primary-page">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home}/>
        <Route path={`${match.url}project`} component={Project} />
      </Switch>
    </main>
  </div>
)
export default PrimaryPage;
