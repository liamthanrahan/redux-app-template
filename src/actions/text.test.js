import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './text'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe('async actions', () => {
  it('should create an action to set the text value', () => {
    const expectedActions = [{ type: 'SET_TEXT', text: 'test text' }]
    const store = mockStore({ text: '' })

    store.dispatch(actions.setText('test text'))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
