import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 810,
    height: 410,
  },
  subheader: {
    width: '100%',
  },
});

  const tileData = [
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367886/06-talleres/IMG_0218.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 3,
   },
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367887/06-talleres/IMG_0169.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 1,
   },
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367887/06-talleres/DSC_0001.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 2,
   },
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367893/06-talleres/IMG_20180321_093455392.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 1,
   },
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367889/06-talleres/IMAG0233.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 1,
   },
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367888/06-talleres/_DSC0017.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 1,
   },
   {
     img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367896/06-talleres/IMG_1287.jpg',
     title: 'Image',
     author: 'opuslab',
     cols: 2,
   },
 {
   img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367888/06-talleres/IMG_0300.jpg',
   title: 'Image',
   author: 'opuslab',
   cols: 1,
 },
{
  img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367895/06-talleres/IMG_0343.jpg',
  title: 'Image',
  author: 'opuslab',
  cols: 3,
},
{
  img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367890/06-talleres/IMG_0325.jpg',
  title: 'Image',
  author: 'opuslab',
  cols: 2,
},
{
  img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367890/06-talleres/IMAG0390.jpg',
  title: 'Image',
  author: 'opuslab',
  cols: 1,
},
{
  img: 'https://res.cloudinary.com/opuslab/image/upload/v1525367887/06-talleres/DSC_2803.jpg',
  title: 'Image',
  author: 'opuslab',
  cols: 3,
},
];

function ImageGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);
