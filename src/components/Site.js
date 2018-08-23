import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'react-emotion'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { FaHome, FaInfo } from 'react-icons/fa'
import { Motion, spring } from 'react-motion'
import Home from './Home'
import About from './About'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`

const Header = styled.h1``

const NavBar = styled.nav`
  * {
    &:hover {
      color: pink;
    }
  }
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
          <Link to="/">
            <Motion defaultStyle={{ x: 1 }} style={{ x: spring(2) }}>
              {style => <FaHome size={`${style.x}em`} />}
            </Motion>
            Link
          </Link>
          <Link to="/about">
            <FaInfo size="2em" />
            About
          </Link>
        </NavBar>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  test: state.test,
})

export default withRouter(connect(mapStateToProps)(Site))
