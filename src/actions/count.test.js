import * as actions from './count'

describe('actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = {
      type: 'INCREMENT_COUNT',
    }
    expect(actions.incrementCount()).toEqual(expectedAction)
  })
})
