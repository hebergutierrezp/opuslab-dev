import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { Link } from 'react-router-dom';
import Fade from 'material-ui/transitions/Fade';


class Production extends React.Component {
  constructor(props){
    super(props)

  this.state = {
    anchorEl: null,
  }
  this.handleClick = this.handleClick.bind(this);
  this.handleClose = this.handleClose.bind(this)
}

  handleClick(e) {
    this.setState(
      {anchorEl: e.currentTarget }
    )
  }

  handleClose(e) {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <button id='Production'
          aria-owns={anchorEl ? 'dropDown' : null}
          aria-haspopup="true"
          font-family='NowRegular'
          font-style='normal'
          font-size='12px'
          onClick={this.handleClick}>
          PRODUCCION
        </button>
        <Menu
          id="dropMenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}>
          <MenuItem id='Produccion' component={Link} to="/portafolio">Portafolio</MenuItem>
          <MenuItem id='Proyectos' component={Link} to="/project">Realizacion de Contenidos</MenuItem>
          <MenuItem id='' component={Link} to="/realizacion">Seguimiento de Obra</MenuItem>
          <MenuItem id='Documentary' component={Link} to="/Documentary">Documentales</MenuItem>
          <MenuItem id='Colaboration' component={Link} to="/colaboration">Colaboraciones</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default Production;
