export const ObjectsDiff = (o1, o2) => {
  const typeObject = function (o) {
    return typeof o === 'object'
  }

  const diff = function (o1, o2) {
    const result = {}
    // if first is item is not object
    if (!typeObject(o1) && typeObject(o2)) {
      return o2
    }
    // if second is item is not object
    else if (typeObject(o1) && !typeObject(o2)) {
      return undefined
    }
    // if they are equal
    else if (Object.is(o1, o2)) {
      return undefined
    }
    const keys = Object.keys(o2)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      // if both are objects
      if (typeObject(o1[key]) && typeObject(o2[key])) {
        // if equal, return nothing
        if (Object.is(o1[key], o2[key])) {
          // do nothing
        } else if (o1[key] === o2[key]) {
          // do nothing
        } else {
          const d = diff(o1[key], o2[key])
          if (typeObject(d)) if (Object.keys(d).length === 0) continue
          if (!d) continue
          result[key] = d
        }
      } else if (o1[key] !== o2[key]) {
        result[key] = o2[key]
      } else {
        // do nothing
      }
    }
    if (Object.keys(result).length > 0) return result
    return
  }
  return diff(o1, o2)
}
