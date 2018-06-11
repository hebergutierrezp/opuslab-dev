import React from "react";
import ReactDOM from 'react-dom'
import PrimaryPage from './PrimaryPage.jsx'
import {MuiThemeProvider} from "material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <MuiThemeProvider>
        <Route path="/" component={PrimaryPage} />
        </MuiThemeProvider>
      </BrowserRouter>
    )}
};
ReactDOM.render(<App />, document.getElementById('app'))
