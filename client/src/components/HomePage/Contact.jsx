import React from 'react';
import ContactForm from '../ContactForm.jsx';
import { Link } from 'react-dom'
import HeaderBar from "../base/menu.jsx";


class Contact extends React.Component {
  render(){
    return(
    <div>
      <div>
        <HeaderBar />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
    )
  }
}
export default Contact;
