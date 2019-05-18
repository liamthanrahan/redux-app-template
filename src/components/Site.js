import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { FaHome, FaInfo } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Home from './Home'
import About from './About'
import Animated from './Animated'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Bottom = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
`

const Header = styled.h1`
  margin-right: 10px;
`

const UnstyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`

const Label = styled.span`
  margin-left: 5px;
`

const FillNav = styled(Nav)`
  width: 100%;
`

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
  }

  html,
  body,
  #root {
    height: 100%;
    position: relative;
  }
`

export class Site extends Component {
  render() {
    return (
      <Container>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <UnstyledLink to="/">
            <Navbar.Brand>React App Template</Navbar.Brand>
          </UnstyledLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FillNav fill>
              <Nav.Item>
                <UnstyledLink className="nav-link" to="/">
                  <FaHome size="2em" />
                  <Label>Home</Label>
                </UnstyledLink>
              </Nav.Item>
              <Nav.Item>
                <UnstyledLink className="nav-link" to="/about">
                  <FaInfo size="2em" />
                  <Label>About</Label>
                </UnstyledLink>
              </Nav.Item>
              <Nav.Item>
                <UnstyledLink className="nav-link" to="/animated">
                  <FaInfo size="2em" />
                  <Label>Animated</Label>
                </UnstyledLink>
              </Nav.Item>
            </FillNav>
          </Navbar.Collapse>
        </Navbar>
        <Bottom>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/animated" component={Animated} />
          </Switch>
        </Bottom>
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

export default withRouter(connect(mapStateToProps)(Site))
