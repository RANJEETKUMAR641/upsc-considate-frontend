import styled from 'styled-components'
interface Props {}

export const MyRCSelectTreeStyle = styled('div')<Props>`
  .MuiInputBase-sizeSmall {
    padding: 0 !important;
    border-radius: 0;
    border-color: #ced4da;
  }
  .MuiFormLabel-root {
    display: none;
  }
  legend {
    display: none;
  }
  .MuiOutlinedInput-notchedOutline {
    top: 0;
    border-color: #ced4da;
  }
  .MuiInputBase-input {
    height: 19px;
  }
`
