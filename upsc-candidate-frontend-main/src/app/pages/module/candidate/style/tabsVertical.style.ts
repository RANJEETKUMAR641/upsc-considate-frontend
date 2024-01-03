import styled from 'styled-components'
import Tabs from '@mui/material/Tabs'
interface Props {}

export const TabsVerticalStyle = styled(Tabs)<Props>`
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

  .RRT__container {
    display: flex;
    width: 100%;
    align-items: flex-start;
  }
  .RRT__tabs {
    width: 250px;
    text-align: center;
  }
  .RRT__tab {
    background: #fff;
    border-width: 0.5px;
  }

  .RRT__tab--selected,
  .RRT__tab:hover {
    background: #e2e3e5 !important;
    border-color: #d3d6d8;
    color: var(--bs-dark);
    font-weight: 700;
  }

  .RRT__tab:hover {
    background: #f7f7f7 !important;
    font-weight: 400;
  }
  .verticaltab {
    width: 100%;
    text-align: left;
  }

  .verticalPanel {
    width: calc(100% - 250px);
    padding: 0;
  }

  .verticaltab {
    display: flex;
  }
  .tabHeading {
    width: 100%;
  }
  .tabIcon {
    width: 15px;
    padding: 3px 0 0;
    display: none;
  }
  .RRT__tab .upicon {
    display: none;
  }
  .RRT__tab--selected.RRT__tab .upicon {
    display: block;
  }
  .RRT__tab .downicon {
    display: block;
  }
  .RRT__tab--selected.RRT__tab .downicon {
    display: none;
  }
  @media screen and (max-width: 767px) {
    .tabHeading {
      width: calc(100% - 15px);
    }
    .tabIcon {
      display: block;
    }
    .RRT__tabs {
      width: 100%;
    }
    .verticalPanel {
      width: 100%;
    }
  }
`
