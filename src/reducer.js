const initialState = {
  count: 0,
  test: 'test',
}

export default function reducer(state = initialState, action) {
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
