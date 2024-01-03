import styled from 'styled-components'
import Select from 'react-select'
interface Props {
  isMulti?: boolean
  ref: any
  invalid?: boolean
  isValid?: boolean
  hasError?: any
}

export const MySelectStyle = styled(Select)<Props>`
  .react-select__control {
    min-height: 24px !important;
    padding-left: 0.15rem;
    font-size: var(--fontsize);
    height: ${(props) => (props.isMulti === true ? '' : '24px')};
    border-radius: 0 !important;
    flex-wrap: nowrap !important;
    border: ${(props) =>
      `1px solid ${props?.hasError ? '#d92550' : '#ced4da'}!important`};
  }

  .react-select__control--is-focused {
    border: 1px solid #ced4da !important;
    box-shadow: none !important;
  }

  .react-select__value-container {
    padding: 0 !important;
  }
  .react-select__input-container {
    margin: 0 !important;
    padding: 0 !important;
    height: ${(props) => (props.isMulti === true ? '' : '24px')};
    color: #000 !important;
  }
  .react-select__placeholder {
    color: #000 !important;
  }
  .react-select__menu {
    padding: 0;
    z-index: 99;
    position: absolute;
    margin: 0;
    box-shadow: none;
    border: 1px solid #e7e7e7;
  }
  .react-select__menu-list {
    margin: 0;
    padding: 0;
  }
  .react-select__indicator-separator {
    background: #ced4da;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .react-select__indicator {
    padding: 2px 5px;
  }
  .react-select__multi-value {
    height: 20px;
    line-height: 15px;
    margin: 1px;
  }
`
