import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
interface Props {}

export const TabH = styled(Tabs)<Props>`
  .MuiTabs-indicator {
    height: 30px;
    background-color: var(--bs-warning);
  }
  .Mui-selected {
    color: #000 !important;
  }
`
