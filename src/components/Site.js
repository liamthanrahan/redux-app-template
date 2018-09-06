import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'react-emotion'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { FaHome, FaInfo } from 'react-icons/fa'
import Home from './Home'
import About from './About'
import Animated from './Animated'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`

const Header = styled.h1`
  text-align: center;
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  * {
    &:hover {
      font-weight: bold;
      color: pink;
    }
  }
`

const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`

injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    font-family: 'Gotham Rounded';
    font-weight: 400;
  }

  html,
  body,
  #root {
    height: 100%;
    position: relative;
    background: #E0E6EA;
  }
`

export class Site extends Component {
  props: {
    test: string,
  }
  render() {
    return (
      <Container>
        <Header>React App Template</Header>
        <NavBar>
          <StyledLink to="/">
            <FaHome size="2em" />
            Home
          </StyledLink>
          <StyledLink to="/about">
            <FaInfo size="2em" />
            About
          </StyledLink>
          <StyledLink to="/animated">
            <FaInfo size="2em" />
            Animated
          </StyledLink>
        </NavBar>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/animated" component={Animated} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  test: state.test,
})

export default withRouter(connect(mapStateToProps)(Site))
