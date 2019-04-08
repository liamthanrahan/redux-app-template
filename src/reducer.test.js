import reducer from './reducer'

describe('reducer increment counter', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      count: 0,
      test: 'test',
    })
  })

  it('should handle INCREMENT_COUNT', () => {
    expect(
      reducer(undefined, {
        type: 'INCREMENT_COUNT',
      })
    ).toEqual({
      count: 1,
      test: 'test',
    })
  })
})

describe('reducer set test value', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      count: 0,
      test: 'test',
    })
  })

  it('should handle SET_TEST', () => {
    expect(
      reducer(undefined, {
        type: 'SET_TEST',
        test: 'some value',
      })
    ).toEqual({
      count: 0,
      test: 'some value',
    })
  })
})
