
import React from 'react'
import {Link} from "react-router-dom"
import MainImageGallery from "./MainImageGallery.jsx"
import Video from "./video.jsx"
import VideoPlayer from '../Projects/videoGallery.jsx'
import Footer from "../base/footer.jsx"
import HeaderBar from "../base/menu.jsx"
import About from "../about/AboutUs.jsx"

 export default class Home extends React.Component {
  render(){
    return (
    <div>
      <div>
        <HeaderBar />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <MainImageGallery />
    </div>
    <div>
      <Footer />
    </div>
  </div>
    )
  }
}
