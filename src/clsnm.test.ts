import * as assert from 'power-assert'

import clsnm from './clsnm'

test('', () => {
  const data = [
    ['', {}],
    [
      'success',
      {
        fail: false,
        success: true
      }
    ],
    [
      'join success',
      {
        join: true,
        success: true
      }
    ],

    [
      'foo',
      {
        foo: {}
      }
    ],
    [
      'foobar',
      {
        foo: {
          bar: true
        }
      }
    ],
    [
      'foo',
      {
        foo: {
          bar: false
        }
      }
    ],
    [
      'foo_active foo_bar-baz',
      {
        'foo': {
          _active: true,
          '_bar-baz': true,
          _inactive: false
        }
      }
    ],
  ]

  data.map(([result, obj]) => {
    assert(result === clsnm(obj))
  })

})
