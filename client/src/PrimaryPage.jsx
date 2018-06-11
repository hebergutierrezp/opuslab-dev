import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../src/components/HomePage/Home.jsx';
import Project from '../src/components/HomePage/ProjectsMain.jsx';
import Contact from '../src/components/HomePage/Contact.jsx'
import HeaderBar from "../src/components/base/menu.jsx";
import AboutUs from "../src/components/about/AboutUs.jsx"
import Workshop from "../src/components/Workshop/WorkshopPg.jsx"
import Documentary from "../src/components/documentary/Documentary.jsx"


const PrimaryPage = ({ match }) => (
  <div className="primary-page">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={Home}/>
        <Route path={`${match.path}project`} component={Project} />
        <Route path={`${match.path}contact`} component={Contact} />
        <Route path={`${match.path}AboutUs`} component={AboutUs} />
        <Route path={`${match.path}workshop`} component={Workshop} />
        <Route path={`${match.path}documentary`} component={Documentary} />
      <HeaderBar />
        <Route path={`${match.url}project`} component={Project} />
      </Switch>
    </main>
  </div>
);

export default PrimaryPage;
