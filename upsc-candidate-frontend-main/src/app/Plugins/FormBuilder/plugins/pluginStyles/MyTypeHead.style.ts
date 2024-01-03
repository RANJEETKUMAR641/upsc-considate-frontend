import styled from 'styled-components'
import { Typeahead } from 'react-bootstrap-typeahead'

interface Props {}

export const MyTypeHeadStyle = styled(Typeahead)<Props>`
  .form-control.rbt-input {
    border-radius: 0;
    padding: 0.1rem 0.2rem;
  }
  .rbt-token {
    padding: 0 18px 0 0;
    margin: 0 3px 2px 0;
    line-height: 0.6rem;
    background: #666;
    color: #fff;
    font-size: 0.75rem;
    border-radius: 0;
  }
  .form-control.rbt-input .rbt-input-wrapper {
    margin: 0;
  }
  .form-control.rbt-input .rbt-input-main {
    height: 14px;
  }
  .form-control.rbt-input.focus {
    box-shadow: none;
    border: 1px solid hsl(0, 0%, 80%);
  }
`
