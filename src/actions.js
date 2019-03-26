export function incrementCount() {
  return {
    type: 'INCREMENT_COUNT',
  }
}

export const setTest = test => (dispatch, getState) => {
  dispatch({
    type: 'SET_TEST',
    test,
  })
}
