import { map, isEmpty, forEach, trim } from 'lodash'

export const getColumns = (schema) => {
  const schemaColumns = map(schema?.sections, ({ columns }) => columns).flat(
    Infinity,
  )

  const col = map(schemaColumns, ({ options, field }) => {
    const data = {
      field: field,
      options: mapOptions(options?.data),
      havingOptions: !isEmpty(options?.data),
    }
    return data
  })

  return col
}

const mapOptions = (options: any = []) => {
  const data = map(options, ({ value, label }) => {
    const data = {
      [`${value}`]: label,
    }

    return data
  })

  return data
}

const getDropDownValue = (item, cols) => {
  let mappedOptionValue = {}
  forEach(cols, ({ field, options }) => {
    if (trim(item[field])) {
      forEach(options, (opt) => {
        if (trim(opt[item[field]])) {
          mappedOptionValue = {
            [trim(`${field}_dropdown`)]: trim(opt[item[field]]),
          }
        }
      })
    }
  })

  return { ...item, ...mappedOptionValue }
}
export const getDropDownsValue = (schema, listData) => {
  const columns = getColumns(schema)

  const updatedList = map(listData, (listItem) => {
    return {
      ...listItem,
      ...getDropDownValue(listItem, columns),
    }
  })

  return columns
}
