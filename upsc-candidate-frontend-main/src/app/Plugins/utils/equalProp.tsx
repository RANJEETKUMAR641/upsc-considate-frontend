import get from 'lodash/get'

export const equalProps = (a, b) => {
  let payload = {}

  for (const [key, value] of Object.entries(a)) {
    const isArraValue = Array.isArray(value)
      ? value.map((item) => get(item, 'value', item))
      : value

    if (b?.includes(key)) {
      payload = Object.assign(payload, { [key]: isArraValue })
    }
  }
  return payload
}
