import text from './text'

describe('text set text value', () => {
  it('should return the initial state', () => {
    expect(text(undefined, {})).toEqual('some text')
  })

  it('should handle SET_TEXT', () => {
    expect(
      text(undefined, {
        type: 'SET_TEXT',
        text: 'some value',
      })
    ).toEqual('some value')
  })
})
