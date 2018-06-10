import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Production from './DropDown.jsx';
import { Link } from 'react-router-dom'; /* set to actual react router and add links*/
import Button from 'material-ui/Button';


/*DropDown menu component*/



  const HeaderBar = (props) => (
      <AppBar id='appBar'>
          <Toolbar id='menu'>
          <Button id='Home' component={Link} to="/"></Button>
          <Button id='About' component={Link} to="/aboutUs">Nosotros</Button>
          <Button id='Workshop' component={Link} to="/workshop">Formacion</Button>
          <Button id='Contactus' component={Link} to="/contact">Contactanos</Button>
          <Production />
          </Toolbar>
      </AppBar>
  );

  export default HeaderBar;
