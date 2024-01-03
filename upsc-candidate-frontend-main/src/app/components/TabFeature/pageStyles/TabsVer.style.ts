import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
interface Props {}

export const TabsVerStyle = styled(Tabs)<Props>`
  width: 100%;
  .MuiTabs-indicator {
    width: 100%;
    background-color: var(--bs-light);
  }
  .Mui-selected {
    color: #e74c3c !important;
  }

  .MuiTab-root {
    min-height: 10px;
    text-align: left;
    border-bottom: 0.1px solid #dee2e6;
    display: block;
    text-transform: capitalize;
    z-index: 1;
    color: #e74c3c;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0.9rem;
    padding: 9px 16px;
  }
  .form_done,
  .form_done.Mui-selected {
    color: green !important;
  }
`
