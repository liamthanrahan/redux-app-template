import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { injectGlobal } from 'react-emotion'

const Container = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
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

export class Site extends PureComponent {
  props: {
    test: string,
  }
  render() {
    return <Container>React 360 Practice</Container>
  }
}

const mapStateToProps = state => ({
  test: state.test,
})

export default connect(mapStateToProps)(Site)
