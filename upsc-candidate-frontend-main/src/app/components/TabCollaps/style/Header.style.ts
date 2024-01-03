import styled from 'styled-components'
import { CardHeader } from 'reactstrap'
interface Props {}

export const HeaderStyle = styled(CardHeader)<Props>`
  height: auto;
  background-color: #f5f7f7;
  position: relative;
  &:before {
    content: '';
    top: 0;
    bottom: -1px;
    right: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
  }
  .app-sidebar__heading {
    margin-left: 0;
  }
  .headerbgOverlay {
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: space-between;
  }
`
