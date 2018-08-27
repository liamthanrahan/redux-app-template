import type { State, Action } from './types'

const initialState: State = {
  count: 0,
  test: 'test',
}

export default function reducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'SET_TEST':
      return {
        ...state,
        test: action.test,
      }
    default:
      return state
  }
}
