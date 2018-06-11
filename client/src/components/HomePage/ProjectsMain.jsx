import React from 'react';
import {Link} from "react-router-dom";


import Grid  from '../PhotoGallery/Grid.jsx';
import HeaderBar from "../base/menu.jsx";
import WorkShop from "../Workshop/WorkshopPg.jsx"
import VideoP from '../PortafolioVid/Layout.jsx'


class Project extends React.Component {
 constructor(props){
   super(props);
 }

 render() {
   return (
    <div>
      <div>
        <HeaderBar />
      </div>
     <div>
         <VideoP />
    </div>
  <div>
    <Grid />
  </div>
   </div>
   )
 }
};

export default Project;
