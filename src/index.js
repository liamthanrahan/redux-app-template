import 'react-hot-loader/patch'

import React from 'react'
import getRoot from 'get-root'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const doRender = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
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
