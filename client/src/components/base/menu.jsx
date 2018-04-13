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
          <Link to="/"><Button id='Home' label="Home">Opus</Button></Link>
          <Button id='About' component={Link} to="/aboutUs">Nosotros</Button>
          <Proyectos id='Proyectos' component={Link} to="/proyectos">Proyectos</Proyectos>
          <Link to="/project"><Button id='Proyectos' label="Project">Project</Button></Link>
          <Button id='Workshop' component={Link} to="/workshop">Formacion</Button>
          <Link to="/contact"><Button id='Contactus' label="Contact">Contáctanos</Button></Link>
          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
