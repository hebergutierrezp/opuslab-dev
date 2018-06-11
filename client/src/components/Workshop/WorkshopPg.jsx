import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import WorkShop1 from '../Workshop/wShop.jsx'
import WorkShop2 from '../Workshop/wShop2.jsx'
import HeaderBar from "../base/menu.jsx"
import WorkShopImg from "../Workshop/WorkShopImg.jsx"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: 'black',
    fontSize: '16px',
    paddingRight: '15px',
    h1: {
      textAlign:'left'
    }
  },
  video: {
    padding: '56.25% 0 0 0',
    position:'relative'
  },
  iframe: {
    position:'absolute',
    top:0,
    left:0,
  }
});


function WorkShopGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <HeaderBar />
      <Grid container spacing={16}>
        <Grid item xs={12}>
            <br></br><br></br><br></br><br></br><br></br><br></br>
          <img src='http://www.workshopevents.com/wp-content/uploads/2015/05/logo-clear-background-2.gif' width='100%' />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} elevation={0}>
            <h2>Nuestros Talleres en Accion:</h2>
            <br></br>
<div className={classes.video}><iframe src="https://player.vimeo.com/video/263410464?color=ffffff&title=0&byline=0&portrait=0" className={classes.iframe} width='100%' height='100%' frameborder="0" allowFullScreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>            <br></br><br></br>
              <div className={classes.video}>
                <iframe src="https://player.vimeo.com/video/196674935?color=ffffff&title=0&byline=0&portrait=0" className={classes.iframe} width='100%' height='100%'frameborder="0" allowFullScreen></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
          </Paper>
        </Grid>
        <Grid item xs={8}>
        <Paper className={classes.paper} width='50%'elevation={0}>
          <h1 className={classes.paper.h1}>Talleres</h1> <br></br><br></br>
          Acompañamos diversas expresiones sociales, artísticas y culturales que
          nos han permitido compartir espacios y procesos de formación de saberes
          en temas de producción audiovisual, en donde se busca ponderar a los actores
          sociales como sujetos de transformación.
          <br></br><br></br>Los talleres audiovisuales son, también, un pretexto para reflexionar
            sobre temas específicos con actores sociales inmersos en diversos
            espacios comunitarios. De ahí que los talleres sean herramientas no
            solo para tratar un tema, sino para visibilizar y analizar una problemática
            local o regional utilizando técnicas como las video-cartas o photovoice.
            Talleres con enfoque en: derechos humanos, género, y distintos ejes
            transversales.
          <br></br><br></br>Esta propuesta surgió con la intención de aprovechar al máximo
            las tecnologías de la información para la producción de materiales
            audiovisuales que documenten o visibilicen los procesos de construcción
            y de participación comunitaria en México y Centroamérica.

        </Paper>
        <WorkShopImg />
      </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper} elevation={0}>
          <WorkShop1 /></Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper} elevation={0}>
          <WorkShop2 />
        </Paper>
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper} elevation={0}>
          <WorkShop1 /></Paper>
        </Grid>
      </Grid>
      <br />
      <div>
      </div>
    </div>
  );
}

WorkShopGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkShopGrid);
