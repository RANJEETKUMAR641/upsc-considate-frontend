import styled from 'styled-components'
import Select from 'react-select'
interface Props {
  isMulti?: boolean
  ref: any
  invalid?: boolean
  isValid?: boolean
}

export const Textarea = styled('textarea')<Props>``
