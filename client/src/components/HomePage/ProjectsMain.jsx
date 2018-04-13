import React from 'react';
import {Link} from "react-router-dom";


import VideoPlayer from '../Projects/videoGallery.jsx';
import Footer from "../base/footer.jsx";
import HeaderBar from "../base/menu.jsx";


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
         <VideoPlayer />
     </div>
     <div>
       <Footer />
     </div>
   </div>
   )
 }
};

export default Project;
