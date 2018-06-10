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
      <Card className={classes.card} elevation={1}>
        <CardMedia
          className={classes.media}
          image="http://res.cloudinary.com/opuslab/image/upload/v1525367231/Crew/Abigail.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
          Abigail Ledesma

          </Typography>
          <Typography component="p">
          Realización / Producción / Post<br />
          Me entusiasma el hecho de diseñar y crear contenidos, contar historias por medio de la imagen y el sonido, todo dentro de una cajita que transmite a través de la luz.

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
