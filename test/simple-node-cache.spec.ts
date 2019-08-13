import SimpleNodeCache from '../src/simple-node-cache'

describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new SimpleNodeCache()).toBeInstanceOf(SimpleNodeCache)
  })
})
