import React, { Component } from 'react';
/*import {Carousel,Tabs,Tab,Row,Col} from 'react-bootstrap';*/
import '../../css/ContactUs.css';
let calculationMinheight=()=>{
  var ContactUs=document.querySelector(".ContactUs");
  ContactUs.style.minHeight=(document.body.clientHeight-398)+"px"
}
class ContactUs extends Component {
   constructor(props){
    super(props)
   }
  render() {
    return (
      <div className="ContactUs">

      </div>
    );
  }
  componentDidMount(){
   calculationMinheight()
  }
}
export default ContactUs;