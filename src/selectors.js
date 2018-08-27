// @flow

import type { Count, State } from './types'

export const count: State => Count = state => state.count
export const test: State => string = state => state.test
