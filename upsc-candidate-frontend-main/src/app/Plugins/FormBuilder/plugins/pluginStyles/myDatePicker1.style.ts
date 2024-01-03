import styled from 'styled-components'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import DatePicker from 'react-datepicker'
interface Props {}

export const MyDatePickerStyle = styled(DatePicker)<Props>`
  .react-datepicker__day--keyboard-selected {
    background: var(--dark) !important;
  }
`
