import {
  get,
  filter,
  flatten,
  map,
  isEqual,
  includes,
  size,
  isEmpty,
  split,
} from 'lodash'
import { getValues } from './getValues'

export const getTableColumns = (data, filterId = '') => {
  const sections = get(data, 'sections', [])
  const columns = flatten(map(sections, (item) => item.columns))

  if (!isEmpty(filterId)) {
    return columns
  }

  return filter(columns, (item) => item?.listview !== 0)
}

export const getColumns = (data, filterId = '') => {
  const sections = get(data, 'sections', [])
  const columns = flatten(map(sections, (item) => item.columns))

  if (!isEmpty(filterId)) {
    return columns
  }

  return filter(columns, (item) => item?.formview !== 0)
}

export const getPKeys = (cols, schema: any, values: any, methods) => {
  let payload = {}

  let count = 0
  const keys = map(
    filter(cols, ({ field }) => includes(schema?.pkeys, field)),
    ({ field }) => field,
  )

  const flattenValues = getValues(values)

  for (const [key, value] of Object.entries(flattenValues)) {
    const { isTouched, isDirty, invalid } = methods.getFieldState(
      key,
      methods.formState,
    )

    if (
      flattenValues[key] &&
      keys.includes(key) &&
      isTouched &&
      isDirty &&
      !invalid
    ) {
      count += 1
      payload = Object.assign(payload, { [key]: value })
    }
  }

  if (isEqual(size(keys), count)) {
    return payload
  }
}

export const getFieldValuesFromRes = (sections, def, key) => {
  const cols = map(sections, (col) =>
    col?.columns?.map((col) => {
      return {
        field: col?.field,
        type: col?.type,
        options: col?.options,
      }
    }),
  )
    .flat(Infinity)
    .filter((col) => col?.type === 'multiple')

  const multiCol = cols.filter((col) => col?.field === key)

  if (multiCol.length > 0) {
    const selectedValue = multiCol?.[0]?.options?.data?.filter((item) =>
      includes(split(def, ','), item.value),
    )

    return map(selectedValue, (op) => {
      const data = {
        value: op.value,
        label: op.label,
      }
      return data
    })
  }

  return def
}
