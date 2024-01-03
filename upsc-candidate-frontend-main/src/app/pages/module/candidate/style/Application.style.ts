import styled from 'styled-components'
interface Props {}

export const ApplicationStyle = styled('div')<Props>`
  table {
    margin-bottom: 0;
  }
  td {
    padding: 0.1rem;
    padding-left: 0.4rem;
  }
  .alert {
    border-radius: 0;
    padding: 0 10px;

    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 0;
  }
  .MuiDataGrid-root {
    border-radius: 0;
  }
  .MuiDataGrid-virtualScrollerContent {
    height: auto !important;
    min-height: 180px !important;
  }
  .MuiDataGrid-cell {
    display: block !important;
    min-height: auto !important;
    max-height: inherit !important;
    line-height: 20px;
  }
  .MuiDataGrid-row {
    min-height: auto !important;
    max-height: inherit !important;
  }
`
