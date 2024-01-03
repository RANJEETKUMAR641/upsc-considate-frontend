import styled from 'styled-components'
import List from '@mui/material/List'
interface Props {}

export const MyListStyle = styled(List)<Props>`
  .MuiListItemIcon-root {
    min-width: 10px;
  }
  .MuiCheckbox-root {
    padding: 0;
  }
  .MuiTypography-root {
    font-size: 0.7rem;
  }
  .MuiSvgIcon-root {
    width: 0.5cm;
    height: 0.5cm;
  }
`
