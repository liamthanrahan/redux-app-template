import 'react-hot-loader/patch'

import React from 'react'
import getRoot from 'get-root'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import blue from '@material-ui/core/colors/blue'
import amber from '@material-ui/core/colors/amber'
import { ThemeProvider } from '@material-ui/styles'
import themeCreator from './theme-creator'
import App from './App'

const doRender = Component => {
  render(
    <ThemeProvider theme={themeCreator(blue, amber, 'light')}>
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
