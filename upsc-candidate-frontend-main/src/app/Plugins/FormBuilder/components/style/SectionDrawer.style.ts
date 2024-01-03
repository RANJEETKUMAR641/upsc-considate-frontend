import styled from 'styled-components'
import List from '@mui/material/List'

interface Props {}

export const SectionDrawerStyle = styled('div')<Props>`
  textarea {
    font-size: var(--fontsize);
    padding: 0.15rem;
  }
  .input-sm {
    height: 24px;
    font-size: var(--fontsize);
    padding: 0.15rem;
  }
  .input-sm:focus {
    box-shadow: 0 0 0 1px rgba(84, 92, 216, 0.25);
  }
  .button-sm {
    height: 24px;
    padding: 0.15rem 0.75rem;
  }
  .button-sm svg {
    margin-right: 5px;
  }
  .my-label {
    font-size: 0.85rem;
    margin-bottom: 0;
    font-weight: 500;
    font-family: 'SourceSans3Medium', 'Franklin Gothic Medium', 'Arial Narrow',
      Arial, sans-serif;
  }
  .my-mb {
    margin-bottom: 0.3rem !important;
  }
  .is-invalid-mail {
    border: 1px solid #d92550;
  }
  .is-invalid-mail ~ .invalid-feedback {
    display: block;
  }
  .is-invalid-textarea {
    border: 1px solid #d92550;
  }
  .is-invalid-textarea ~ .invalid-feedback {
    display: block;
  }
  .btn {
    padding: 0rem 0.75rem;
    font-size: var(--fontsize);
    height: 24px;
  }

  .is-error {
    border: 1px solid #d92550;
  }

  .my-hint {
    font-size: 0.6em;
    font-weight: 600;
  }
  .my_error_border {
    border: 1px solid #d92550;
  }
  .my-fieldset {
    padding: 0.7rem 0.5rem 0.5rem;
    border: 1px solid #d7d7d7;
    margin: 15px 0 15px !important;
    position: relative;
    font-size: 0.8rem;
  }
  .my-fieldset legend {
    position: absolute;
    left: 0.3rem;
    top: -13px;
    background-color: #fff;
    width: auto;
    padding: 0 0.2rem;
    font-size: 0.9rem;
  }
  .inputArea {
    position: relative;
  }
  .inputArea input.userId {
    padding-left: 30px;
  }
  .input_icons {
    position: absolute;
    left: 5px;
    top: 2px;
  }
  .input_icons svg {
    font-size: 20px;
    color: #495057;
  }
  .d-info-pop {
    font-size: 14px;
  }
`
