import get from 'lodash/get'
import map from 'lodash/map'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/isObject'
import trim from 'lodash/trim'
import includes from 'lodash/includes'
import objKeys from 'lodash/keys'
import toString from 'lodash/toString'
import filter from 'lodash/filter'

export const getValues = (object: Object, add?: Object): Object => {
  if (!object) return {}
  let payload = {}

  for (const [key, value] of Object.entries(object)) {
    let tValue = value

    if (Array.isArray(value)) {
      if (value) {
        tValue = map(value, (item) => {
          return get(item, 'value', get(item, 'label', item)) || item
        })
      }
    }

    payload = Object.assign(payload, {
      [key]: tValue || trim(get(value, 'value')),
    })
  }

  payload = Object.entries(payload).reduce(
    (a, [k, v]) => (v ? ((a[k] = v), a) : a),
    {},
  )

  if (!isEmpty(add)) {
    payload = {
      ...payload,
      ...add,
    }
  }

  return payload
}

export const handleEmptyValue = (obj) => {
  let payload = {}
  for (const [keys, value] of Object.entries(obj)) {
    if (!isEmpty(value)) {
      payload = Object.assign(payload, { [keys]: value })
    }
  }
  return payload
}

export const getFiles = (object: any): Object => {
  let payload = {}

  for (const [key, value] of Object.entries(object) as any) {
    if (isObject(value) && !isEmpty(value['name'])) {
      payload = Object.assign(payload, { [key]: value })
    }
  }
  return payload
}

export const handleEmptyFieldValue = (obj, values) => {
  let payload = {}
  for (const [key, value] of Object.entries(values)) {
    if (isEmpty(toString(value)) && includes(obj, key)) {
      payload = Object.assign(payload, { [key]: toString(value) })
    }
  }
  return objKeys(payload)
}

export const handleDNoneCols = (schema) => {
  const payload = {
    ...schema,
    sections: map(schema?.sections, (sec) => {
      return {
        ...sec,
        columns: map(sec.columns, (col) => {
          if (isEqual(col.classes, 'd-none')) {
            return {
              ...col,
              required: 0,
            }
          }
          return col
        }),
      }
    }),
  }

  return payload
}
