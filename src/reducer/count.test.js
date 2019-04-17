import count from './count'

describe('count increment counter', () => {
  it('should return the initial state', () => {
    expect(count(undefined, {})).toEqual(0)
  })

  it('should handle INCREMENT_COUNT', () => {
    expect(
      count(undefined, {
        type: 'INCREMENT_COUNT',
      })
    ).toEqual(1)
  })
})
