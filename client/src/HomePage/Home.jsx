import React from 'react'
import {Link} from "react-router-dom"
import MainImageGallery from "./MainImageGallery.jsx"
import Video from "./video.jsx"

 export default class Home extends React.Component {
  render(){
    return (
    <div>
      <div>
        <Video />
      </div>
      <div>
        <MainImageGallery/>
    </div>
  </div>
    )
  }

}
