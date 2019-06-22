const entries = Object.entries
  ? Object.entries
  : (obj) => {
    const result = []
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push([key, obj[key]])
      }
    }
    return result
  }

const concat = [].concat

function flat(arr) {
  return concat.apply([], arr)
}

function noop(key) {
  return key
}

function classNames (obj, mapper, filter) {
  return flat(
    entries(obj)
      .filter(([_, v]) => filter(v))
      .map(([k, v]) => {
        const key = mapper(k)
        if ('object' === typeof v) {
          const nested = classNames(v, mapper, filter)
          if (nested.length) {
            return nested.map((nestedKey) => key + nestedKey)
          }
        }
        return key
      })
  )
}

type Mapper = (string) => string
type Filter = (any) => boolean

export default function clsnm (
  obj: any,
  mapper: Mapper|null = noop,
  filter: Filter|null = Boolean
): string {
  return classNames(obj, mapper, filter).join(' ')
}
