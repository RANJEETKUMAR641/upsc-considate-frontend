import styled from 'styled-components'
interface props {}
export const SplitterStyle = styled('div')<props>`
  .layout-splitter {
    background: #f7f7f7 !important;
  }
  .layout-splitter:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 50px;
    background: var(--bs-secondary);
    top: 50%;
    transform: translateY(-50%);
  }
`
