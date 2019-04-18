export const setText = text => (dispatch, getState) => {
  dispatch({
    type: 'SET_TEXT',
    text,
  })
}
