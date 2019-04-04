import React, { Component } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import { Route, Link, Switch, withRouter } from 'react-router-dom'
import { FaHome, FaInfo } from 'react-icons/fa'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button'
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
`

const StyledLink = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  &:not(:last-child) {
    border-right: 1px solid gray;
  }
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

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  root: {
    display: 'flex',
  },
}))

export class Site extends Component {
  render() {
    const classes = makeStyles(theme => ({
      content: {
        flexGrow: 1,
        padding: theme.spacing(2),
      },
      root: {
        display: 'flex',
      },
    }))

    return (
      <Container className={classes.root}>
        <Header>React App Template</Header>
        <NavBar>
          <StyledLink to="/">
            <Button color="primary">
              <FaHome size="2em" />
              Home
            </Button>
          </StyledLink>
          <StyledLink to="/about">
            <Button color="primary">
              <FaInfo size="2em" />
              About
            </Button>
          </StyledLink>
          <StyledLink to="/animated">
            <Button color="primary">
              <FaInfo size="2em" />
              Animated
            </Button>
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
