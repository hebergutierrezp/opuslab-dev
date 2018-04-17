import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { Link } from 'react-router-dom' /* set to actual react router and add links*/
import Button from 'material-ui/Button';


/*DropDown menu component*/
import Proyectos from './DropDown.jsx'


  const HeaderBar = (props) => (
      <AppBar id='appBar'>
          <Toolbar id='menu'>
          <Button id='Home' component={Link} to="/">Opus</Button>
          <Button id='About' component={Link} to="/aboutUs">Nosotros</Button>
          <Button id='Proyectos'component={Link} to="/project">Projectos</Button>
          <Button id='Workshop' component={Link} to="/workshop">Formacion</Button>
          <Button id='Contacts' component={Link} to="/contact">Contáctanos</Button>
          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
