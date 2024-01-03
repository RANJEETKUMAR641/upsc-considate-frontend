import styled from 'styled-components'
// import { Typeahead } from 'react-bootstrap-typeahead'
interface Props {}

export const PassStyle = styled('div')<Props>`
  width: 793.92px;
  margin: 0 auto;

  h2 {
    font-size: 18px;
  }
  h4 {
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
  .mydivider {
    border-bottom: 1px dashed #000;
  }
  .valueSize {
    font-size: 13px;
  }
  .HeadingSize {
    font-size: 11px;
    margin: 0;
    padding: 0;
  }

  .smallPass {
    margin-top: 80px;
    margin-left: 30px;
    width: 250px;
  }
  .smallPass p {
    font-size: 8px;
    margin: 0 0 5px;
  }
  .smallPass p strong {
    font-size: 9px;
  }

  .topHeading {
    margin: 0 !important;
    padding: 0;
  }
  .smalltopvalue strong {
    font-size: 8px !important;
  }
`
