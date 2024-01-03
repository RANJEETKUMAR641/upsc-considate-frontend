import styled from 'styled-components'
interface Props {}

export const PublicSidebarStyle = styled('div')<Props>`
  .sidebar {
    position: fixed;
    background: #e7eef8;
    width: 320px;
    top: 60px;
    bottom: 0;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); */
    border-right: 1px solid #cbdcf3;
  }
  .rightContent {
    margin-left: 320px;
  }
  .MuiPaper-root.MuiPaper-outlined {
    border-radius: 0;
  }
  @media screen and (max-width: 767px) {
    .sidebar {
      position: static;
      background: transparent;
      border: none;
      padding: 0;
      margin-bottom: 0.7rem;
      width: 100%;
      border-right: none;
    }
    .rightContent {
      margin-left: 0;
    }
  }
`
