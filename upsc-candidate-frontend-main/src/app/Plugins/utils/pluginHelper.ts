import { includes } from 'lodash'
import { PATTERN } from 'app/Plugins/utils/pluginConstants'

export const getPattern = (props) => {
  switch (props?.type) {
    case 'mobile':
      return {
        value: /^[0-9]{10}$/i,
        message: 'Please enter valid mobile numbers',
      }
    case 'email':
      return {
        value: PATTERN.EMAIL,
        message: 'Please enter valid email address',
      }
    case 'numeric':
      return {
        value: PATTERN.NUMERIC,
        message: 'Please enter numbers',
      }

    case 'name':
    case 'alphabet':
      return {
        value: PATTERN.ALPHABET,
        message: 'Please enter alphabets only',
      }
    case 'alphanumeric':
      return {
        value: PATTERN.ALPHANUMERIC,
        message: 'Please enter alphanumeric only',
      }
    case 'registration':
      return {
        value: /^[0-9]{15}$/i,
        message: 'Please enter valid registration id',
      }
    case 'custom':
      return {
        value: new RegExp(props?.addattrs?.pattern),
        message: 'Please enter valid data',
      }
    case 'alltext':
      return {
        value: PATTERN.ALL_TEXT,
        message: 'Please enter valid data',
      }
    default:
      return {
        value: PATTERN.TEXT,
        message: 'Required',
      }
  }
}

export const handleOnKeyDown = (event, props) => {
  const prevent = (type) =>
    !type.test(event.key) && !includes([8, 127], event.which)

  if (props.type === 'email') {
    return false
  }

  switch (props.type) {
    case 'numeric':
      if (prevent(PATTERN.NUMERIC)) {
        event.preventDefault()
      }
      break
    case 'mobile':
      if (prevent(PATTERN.MOBILE)) {
        event.preventDefault()
      }
      break
    case 'name':
    case 'alphabet':
      if (prevent(PATTERN.ALPHABET)) {
        event.preventDefault()
      }
      break
    case 'alphanumeric':
      if (prevent(PATTERN.ALPHANUMERIC)) {
        event.preventDefault()
      }
      break
    case 'custom':
      if (prevent(new RegExp(props?.addattrs?.pattern))) {
        event.preventDefault()
      }
      break

    case 'alltext':
      if (prevent(PATTERN.ALL_TEXT)) {
        event.preventDefault()
      }
      break
    default:
      if (prevent(PATTERN.ALPHANUMERIC)) {
        event.preventDefault()
      }
  }
}
