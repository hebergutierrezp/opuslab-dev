import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#B60027'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#B60027'
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <div class='footer'>
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper} elevation={0}>
            <br></br>
            <h1>Mapa del Sitio:</h1><br></br>
            <h3>Página Principal</h3>
            <h3>Nosotros</h3>
            <h3>Formación</h3>
            <h3>Contáctanos</h3>
            <h3>Seguimiento de Obra</h3>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper} elevation={0}><br></br><br></br>
          <br></br><h3>Producción:</h3>
          <h3>Portafolio</h3>
          <h3>Realización de Contenidos</h3>
          <h3>Documentales</h3>
          <h3>Colaboraciones</h3>
        </Paper>
        </Grid>
        <Grid id='icons' item xs={6} sm={4}>
          <Paper className={classes.paper} elevation={0}><br></br>
          <h1>Conacto:</h1>
          <br></br>
          <h3>+52 Numero aqui!</h3>
          <h3>hola@opuslab.com.mx</h3>
          <br></br>
            <h3>Síguenos en:</h3>
            <a href="https://www.youtube.com/channel/UCngt8ZTe2wlAAUnQtjNK4Sw"><img src="Logos/play-button-silhouette.png" height="30" width="30"/></a>
            <a href="https://www.facebook.com/opuslabmx/"><img src="Logos/facebook-logo-button.png" height="30" width="30"/></a>
            <a href="https://www.instagram.com/opuslabmx/"><img src="Logos/instagram-logo.png" height="30" width="30"/></a>
            <a href="https://vimeo.com/opuslabmx"><img src="Logos/social-vimeo-in-a-circle-logo.png" height="30" width="30"/></a>
            <a href="https://twitter.com/Opuslabmx"><img src="Logos/twitter.png" height="30" width="30"/></a>

      </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <p>opuslab Mx &copy; 2018</p>
          </Paper>
        </Grid>
      </Grid>
    </div></div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
