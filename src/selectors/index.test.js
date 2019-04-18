import { derivedCountAndTextSelector } from './index'

describe('Derived Count and Text value', () => {
  it('should return a combined count and text string', () => {
    const mockParameters = {
      count: 10101,
      text: 'test text',
    }
    const selected = derivedCountAndTextSelector(mockParameters)
    expect(selected).toEqual(
      `Store values are: count = 10101, text = test text`
    )
  })
})
