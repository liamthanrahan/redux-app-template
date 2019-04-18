const initialState = 'some text'

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TEXT':
      return action.text
    default:
      return state
  }
}
