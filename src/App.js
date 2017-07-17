import React, { Component } from 'react';
import {Navbar,NavItem,Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './css/App.css';
import logo from './images/logo.png'
import footerLogo from './images/footer-logo.png'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar  collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="logo-img" href="#"><img src={logo} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={2.4}>首页</NavItem>
            </LinkContainer>
            <LinkContainer to="/cases">
              <NavItem eventKey={3.2}>产品介绍</NavItem>
            </LinkContainer>
            <LinkContainer to="/cooperation">
              <NavItem eventKey={3.2} >开发者</NavItem>
            </LinkContainer>
            <LinkContainer to="/contactus" pullRight>
              <NavItem eventKey={3.2}>关于我们</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to="/contactus">
              <NavItem eventKey={2}>登录</NavItem>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <NavItem eventKey={2}>注册</NavItem>
            </LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Navbar>

        <div id="container">
            {this.props.children}
        </div>
        <div className="footer">
          <div className="container">
            <div className="footer-left clearfix">
              <div className="foot-bg">
                  <img src={footerLogo} />
              </div>
              <div className="foot-address">
                <p className="ad-title">星火传媒</p>
                <p className="ad-info">移动广告平台领导者 </p>
              </div>
            </div>
            <div>
              <a href="#">关于我们</a> <a href="#">技术支持</a> <a href="#"> 开发者服务</a> <a href="#">广告主服务</a>
              <p>©2016  京ICP备16058317号 -1</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
