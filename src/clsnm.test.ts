import * as assert from 'power-assert'

import clsnm from './clsnm'

test('', () => {
  const toKebab = (v: string) => v.replace(/[A-Z]/g, (v) => '-' + v.toLowerCase())
  const data: [string, any, (undefined|((v: string) => string))][] = [
    ['', {}, undefined],
    [
      'success',
      {
        fail: false,
        success: true
      },
      undefined
    ],
    [
      'join success',
      {
        join: true,
        success: true
      },
      undefined
    ],

    [
      'foo',
      {
        foo: {}
      },
      undefined
    ],
    [
      'foobar',
      {
        foo: {
          bar: true
        }
      },
      undefined
    ],
    [
      'foo',
      {
        foo: {
          bar: false
        }
      },
      undefined
    ],
    [
      'foo_active foo_bar-baz',
      {
        foo: {
          _active: true,
          '_bar-baz': true,
          _inactive: false
        }
      },
      undefined
    ],
    [
      'foo_active foo_bar-baz',
      {
        foo: {
          _active: true,
          _barBaz: true,
          _inactive: false
        }
      },
      toKebab
    ],
    [
      'foo-bar-baz',
      {
        foo: {
          Bar: {
            Baz: true
          }
        }
      },
      toKebab
    ],
  ]

  data.map(([result, obj, mapper]) => {
    assert(result === clsnm(obj, mapper))
  })

})
