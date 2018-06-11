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
    height: 280,
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} elevation={1} >
        <CardMedia
          className={classes.media}
          image="http://res.cloudinary.com/opuslab/image/upload/v1525367231/Crew/Miguel.jpg"
          title="Opuslab's Crew"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          Miguel Ángel Rosales

          </Typography>
          <Typography component="p">
          Planeación / Gestión / Producción<br />
          Me gusta hacer realidad los proyectos tal como surgen de la imaginación. Disfruto de crear contenidos audiovisuales y de hacer timelapses.

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
