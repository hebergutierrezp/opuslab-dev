import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from "react-router-dom";
import PrimaryPage from './PrimaryPage.jsx'



class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={PrimaryPage} />
      </BrowserRouter>
    )}
};
ReactDOM.render(<App />, document.getElementById('app'))
