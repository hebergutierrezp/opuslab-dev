import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
    height: 425,
    padding: 25,
    margin: 10,
  },
  media: {
    height: 200,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} elevation={1}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          Colaboradores:

          </Typography>
          <Typography component="p">
          Ana Ramirez<br />
          Fotografía / Video / Producción
          <br /><br />
          Adriana Somofora<br />
          Fotografía / Video
          <br /><br />
          Omar Verdiguel<br />
          Gerardo Miranda<br />
          Fotografía / Drone film maker<br /><br />
          Mónica Garfias
          <br />
          Aleks Ikoods<br />
          Diseño / Animación / Compositing<br />
          Me gusta sorprender y ser sorprendido visualmente, todo reto y dificultad tiene la condición de ser tumbada.

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
