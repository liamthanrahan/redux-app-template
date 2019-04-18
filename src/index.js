import 'react-hot-loader/patch'

import React from 'react'
import getRoot from 'get-root'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import themeCreator from './theme-creator'
import App from './App'

const arupPrimary = { main: '#FF5056' }
const arupSecondary = { main: '#FFFFFF' }

const doRender = Component => {
  render(
    <ThemeProvider theme={themeCreator(arupPrimary, arupSecondary, 'light')}>
      <Router>
        <AppContainer>
          <Component />
        </AppContainer>
      </Router>
    </ThemeProvider>,
    getRoot()
  )
}

doRender(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const next = require('./App')
    doRender(next.default)
  })
}
