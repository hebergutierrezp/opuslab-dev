import React from 'react';
import VideoPlayer from '../Projects/videoGallery.jsx';


class Project extends React.Component {
 constructor(props){
   super(props);
 }

 render() {
   return (
     <div>
         <VideoPlayer />
     </div>

   )
 }
};

export default Project;
