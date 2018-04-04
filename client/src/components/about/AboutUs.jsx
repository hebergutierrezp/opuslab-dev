import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Footer from "../base/footer.jsx";
import HeaderBar from "../base/menu.jsx";

import Member1 from '../about/team/member1.jsx';
import Member2 from '../about/team/member2.jsx';
import Member3 from '../about/team/member3.jsx';
import Member4 from '../about/team/member4.jsx';
import Member5 from '../about/team/member5.jsx';
import Member6 from '../about/team/member6.jsx';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

function CenteredGrid(props) {
  // this.state = {
  //   direction: 'row',
  //   justify: 'center',
  //   alignItems: 'center',
  // };


  const { classes } = props;
//  const { direction, justify, alignItems }= this.state;
  return (
    <div className={classes.root}>
      <div>
        <HeaderBar />
      </div>
      <Grid container spacing={8}>
        <Grid  item xs={12}>
          <img id='team' src='http://res.cloudinary.com/opuslab/image/upload/v1528656953/02-realizacion-contenidos/cameracroped.jpg'/>
        </Grid>
        <Grid item sm={12} md={7} lg={7} spacing={16}>
          <h1>Nosotros</h1>
          <p class="description">
          Somos un equipo multidisciplinario que conformamos una plataforma creativa en donde realizamos y colaboramos a generar contenidos, utilizando los medios audiovisuales: fotografía, audio, video y cine digital.
          Opuslab se construye a partir de la inclusión de las ideas de todos y de todas las que colaboramos en la creación de un espacio creativo y plural. Trabajamos en proyectos propios, por asignación o en colaboración.
          Se trata de un grupo de comunicadores educativos apasionados por contar historias; tenemos más de 10 años compartiendo experiencias con compañer@s y con  organizaciones que mediante el arte y sus distintas dimensiones,  buscan transformar sus realidades.
          </p>
        </Grid>
        <Grid item sm={12} md={5} lg={5}>
          <h1>Por que Opuslab!</h1>
          <p class="manifiesto">Manifiesto</p>
          <div class="opuslab-text">
            <ul>
              <li>Trabajamos en lo que nos apasiona.</li>
              <li>Hacemos lo que nos gusta.</li>
              <li>Priorizamos  el trabajo colaborativo.</li>
              <li>Procuramos ser receptivos.</li>
              <li>Realizamos materiales provocadores.</li>
              <li>Sistematizamos nuestra experiencia y la compartimos.</li>
              <li>Creemos en el arte como herramienta de transformación.</li>
              <li>OpusLab es un proyecto abierto, en constante movimiento.</li>
            </ul>
          </div>
        </Grid>
        <br />
        <Grid container spacing={8} alignItems={'center'} justify={'center'}>
          <Grid item sm={12} md={6} lg={4}>
            <Grid container spacing={16} className={classes.demo} alignItems={'center'} justify={'center'}>
              <Member1 />
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Grid container spacing={16} className={classes.demo} alignItems={'center'} justify={'center'}>
              <Member2 />
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Grid container spacing={16} className={classes.demo} alignItems={'center'} justify={'center'}>
              <Member3 />
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Grid container spacing={16} className={classes.demo} alignItems={'center'} justify={'center'}>
              <Member4 />
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Grid container spacing={16} className={classes.demo} alignItems={'center'} justify={'center'}>
              <Member5 />
            </Grid>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Grid container spacing={16} className={classes.demo} alignItems={'center'} justify={'center'}>
              <Member6 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div>
        <Footer />
      </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
