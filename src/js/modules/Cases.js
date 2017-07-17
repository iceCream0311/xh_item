import React, { Component } from 'react';
/*import {Carousel,Tabs,Tab,Row,Col} from 'react-bootstrap';*/
import '../../css/Cases.css';

let calculationMinheight=()=>{
  var cases=document.querySelector(".Cases");
  cases.style.minHeight=(document.body.clientHeight-398)+"px"
}
class Cases extends Component {
   constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <div className="Cases"  >
      </div>
    );
  }
  componentDidMount(){
   calculationMinheight()
  }
}
export default Cases;