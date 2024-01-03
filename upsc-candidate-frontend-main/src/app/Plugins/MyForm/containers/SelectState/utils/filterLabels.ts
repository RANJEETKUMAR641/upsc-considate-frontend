import { map, filter, isEmpty, toString } from 'lodash'

type MapOptions = {
  label: string | number
  value: string | number
  children?: any[]
}

const mapOptions = (options: MapOptions[]): MapOptions[] =>
  map(options, ({ label, value, children }) => {
    return {
      label: toString(label),
      value: toString(value),
      children,
    }
  })

export const filterLabels = (array: any[]): any[] => {
  return map(array, ({ field, options }) => {
    return {
      field,
      options: filter(mapOptions(options), ({ label }) => {
        return !isEmpty(label)
      }),
    }
  })
}
