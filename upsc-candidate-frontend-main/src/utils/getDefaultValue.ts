import { map, includes, get, size, isEqual, isEmpty, forEach } from 'lodash'

export const getDefaultValues = (schema: any[]) => {
  const columns = map(schema, (item) => item.columns).flat(Infinity)

  const colArray = map(columns, (item) => {
    return {
      field: item.field,
      value: includes(
        ['react-select', 'reactselect', 'async-reactselect'],
        item.component,
      )
        ? null
        : '',
    }
  })

  return colArray?.reduce((acc, column) => {
    let { field, value } = column

    return {
      ...acc,
      [field]: value,
    }
  }, {})
}

export const getFormValuesPayload = (values, columns) => {
  let payload = {}

  for (const [key, value] of Object.entries(values)) {
    if (includes(columns, key)) {
      payload = Object.assign(payload, { [key]: get(value, 'value', value) })
    }
  }

  return payload
}

function isElementVisible(element) {
  // Check if the element exists.
  if (!element) {
    return false
  }

  // Check if the element has a height and width greater than zero.
  if (element.offsetHeight <= 0 || element.offsetWidth <= 0) {
    return false
  }

  // Get the element's bounding rectangle.
  const boundingClientRect = element.getBoundingClientRect()

  // Check if the element's bounding rectangle is within the bounds of the viewport.
  return (
    boundingClientRect.top >= 0 &&
    boundingClientRect.left >= 0 &&
    boundingClientRect.bottom <= window.innerHeight &&
    boundingClientRect.right <= window.innerWidth
  )
}

export const getFormError = (errors, columns) => {
  let payload = [] as any

  for (const [key, value] of Object.entries(errors)) {
    if (includes(columns, key) && isEqual(size(errors?.[key]?.toString()), 0)) {
      payload.push(key)
    }
  }
  return payload
}

export const getPKeysPayload = (data, pKeys, pKey) => {
  let payload = {}

  if (!isEmpty(pKey)) {
    payload = Object.assign(payload, { [pKey]: data?.[pKey] })
  }

  if (!isEmpty(pKeys)) {
    forEach(pKeys, (pkey) => {
      if (data?.[pkey]) {
        payload = Object.assign(payload, { [pkey]: data[pkey] })
      }
    })
  }

  return payload
}
