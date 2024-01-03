import { trimStart, lowerCase } from 'lodash'
import { myValue } from './commanHealper'

export const compareField = (params, methods) => {
  const { values, field, fields, cols } = params
  const v = lowerCase(myValue(values[field]))
  if (v === '') return
  const isMatched = [] as any
  for (let f of fields) {
    const fv = lowerCase(myValue(values[f]))
    if (v === fv) {
      isMatched.push(cols[f].title)
    }
  }
  if (isMatched.length > 0) {
    methods.setError(field, {
      type: 'custom',
      message: `This value can't be same as [${isMatched.join(',')}]`,
    })
  } else {
    methods.clearErrors(field)
  }
}

export const capitalizeValue = (value, field, methods) => {
  const CapValue = value?.replace(/\b\w/g, (char) => char?.toUpperCase())
  methods.setValue(field, trimStart(CapValue))
}

export const parttenValidate = (params, methods) => {
  let { values, field, cols, pattern, message } = params
  const value = myValue(values?.[field])
  if (value === '') return
  if (!value.match(pattern)) {
    message = `${cols?.[field]?.title} is not valid! ${myValue(message)}`
    methods.setError(field, { message })
  } else {
    methods.clearErrors(field)
  }
}
