import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import SwipeableViews from 'react-swipeable-views';
import Footer from "../base/footer.jsx";
import HeaderBar from "../base/menu.jsx";

const imgData = [
  {
    label: 'How to be happy :)',
    imgPath: 'https://res.cloudinary.com/opuslab/image/upload/v1525367307/01-produccion/_MG_0092.jpg',
  },
  {
    label: '1. Work with something that you like, like…',
    imgPath: 'https://res.cloudinary.com/opuslab/image/upload/v1525367306/01-produccion/_MG_0162.jpg',
  },
  {
    label: '2. Keep your friends close to you and hangout with them',
    imgPath: 'https://res.cloudinary.com/opuslab/image/upload/v1525367307/01-produccion/_MG_0209.jpg',
  },
  {
    label: '3. Travel everytime that you have a chance',
    imgPath: 'https://res.cloudinary.com/opuslab/image/upload/v1525367307/01-produccion/_MG_0258.jpg',
  },
  {
    label: '4. And contribute to Material-UI :D',
    imgPath: 'https://res.cloudinary.com/opuslab/image/upload/v1525367307/01-produccion/_MG_0363.jpg',
  },
];

const styles = theme => ({
  root: {
    maxWidth: 850,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 510,
    maxWidth: 900,
    overflow: 'hidden',
    width: '100%',
  },
});

class AlbumOne extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      activeStep:0,
    }
    this.handleNext=this.handleNext.bind(this);
    this.handleBack=this.handleBack.bind(this);
    this.handleStepChange=this.handleStepChange.bind(this);
  }

  handleNext(e) {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack(e) {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange(activeStep) {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = imgData.length;

    return (
      <div className={classes.root}>
        <div>
          <HeaderBar />
        </div>
        <br></br><br></br><br></br>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {imgData.map(step => (
            <img key={step.label} className={classes.img} src={step.imgPath} alt={step.label} />
          ))}
        </SwipeableViews>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? ' < ' : ' >' }
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? ' >' : ' < ' }
              Back
            </Button>
          }
        />
        <div>
          <Footer />
        </div>
  </div>

    );
  }
}

AlbumOne.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AlbumOne);
