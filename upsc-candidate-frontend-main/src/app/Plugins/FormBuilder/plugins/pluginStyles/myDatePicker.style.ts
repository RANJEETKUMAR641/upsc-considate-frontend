import styled from 'styled-components'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
//import DatePicker from 'react-datepicker'
interface Props {
  hasError?: any
}

export const MyDatePickerStyle = styled(DatePicker)<Props>`
  .MuiInputBase-root {
    border: ${(props) =>
      `1px solid ${props?.hasError ? '#d92550' : '#ced4da'}!important`};
    width: 100%;
  }
  .MuiInputBase-root {
    border-radius: 0;
    height: 24px !important;
  }
  .MuiInputBase-input {
    padding: 0.15rem;
    font-size: var(--fontsize);
    color: #495057;
  }
  ::placeholder {
    color: red;
    opacity: 1; /* Firefox */
  }

  ::-ms-input-placeholder {
    /* Edge 12-18 */
    color: red;
  }
  .Mui-focused fieldset {
    border-width: 0px !important;
    box-shadow: 0 0 0 1px rgba(84, 92, 216, 0.25);
  }
  .MuiOutlinedInput-notchedOutline {
    border: 0 !important;
    top: 0px;
    box-shadow: none !important;
  }
  .MuiButtonBase-root {
    padding: 0 !important;
  }
  .MuiButtonBase-root svg {
    width: 17px !important;
    height: 17px !important;
  }
`
