import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/HomePage/Home.jsx';
import Project from './components/HomePage/ProjectsMain.jsx';
import Contact from './components/HomePage/Contact.jsx'
const PrimaryPage = ({ match }) => (
  <div className="primary-page">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home}/>
        <Route path={`${match.url}project`} component={Project} />
        <Route path={`${match.url}contact`} component={Contact} />
      </Switch>
    </main>
  </div>
)
export default PrimaryPage;
