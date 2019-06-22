# clsnm
A utility function for generating a string for use as a DOM element's `className`.


## Install

```
$ npm install --save clsnm
```


## Usage

```js
import clsnm from 'clsnm'

clsnm({ foo: true, bar: false })
//=> foo

clsnm({ foo: { bar: false } })
//=> foo

clsnm({ foo: { bar: true, baz: true } })
//=> foobar foobaz

clsnm({ foo: true, bar: { _baz: true } })
//=> foo bar_baz
```

## License

clsnm is MIT licensed. See [LICENSE](LICENSE.md).
