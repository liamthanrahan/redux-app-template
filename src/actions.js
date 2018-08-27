// @flow

import type { IncrementCountAction, SetTestAction } from './types'

export function incrementCount(): IncrementCountAction {
  return {
    type: 'INCREMENT_COUNT',
  }
}

export const setTest = (test: string): SetTestAction => (
  dispatch,
  getState
) => {
  dispatch({
    type: 'SET_TEST',
    test,
  })
}
