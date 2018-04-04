import React from 'react'
import {Link} from "react-router-dom"

import Video from "./video.jsx"

export default class Home extends React.Component {
  render(){
    return (
      <div>
        <h1>hello</h1>
        <Video />
      </div>
    )
  }

}
