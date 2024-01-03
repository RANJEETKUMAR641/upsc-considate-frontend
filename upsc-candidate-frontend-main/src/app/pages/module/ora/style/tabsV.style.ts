import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
interface Props {}

export const TabV = styled(Tabs)<Props>`
  .MuiTabs-indicator {
    width: 100%;
    background-color: var(--bs-warning);
  }
  .Mui-selected {
    color: #000 !important;
  }
`
