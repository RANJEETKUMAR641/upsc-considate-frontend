import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
interface Props {}

export const TabStyle = styled(Tabs)<Props>`
  //background: #000;
  .MuiTabs-flexContainer {
    display: block;
  }
  .MuiTabs-scroller {
    white-space: unset;
  }
  .MuiButtonBase-root {
    border: solid 1px #e7e7e7;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 4px;
    padding-right: 4px;

    font-size: 0.7rem;
    min-width: 200px;
    justify-content: left;
    -webkit-justify-content: left;
  }
  .MuiButtonBase-root i {
    display: inline-block;
    width: 21px;
    height: 21px;
    background: #ddd;
    border-radius: 50%;
    line-height: 21px;
  }
  .MuiButtonBase-root.Mui-selected {
    background: rgba(18, 21, 78, 0.7);
    color: #fff;
  }
  .MuiButtonBase-root.Mui-selected i {
    color: rgba(18, 21, 78, 0.7);
  }
  .tabVertical.MuiButtonBase-root {
    width: calc(100% - 10px);
    justify-content: left;
    -webkit-justify-content: left;
  }
`
