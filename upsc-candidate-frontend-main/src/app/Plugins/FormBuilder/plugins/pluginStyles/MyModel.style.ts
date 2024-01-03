import styled from 'styled-components'
import { Modal } from 'reactstrap'
interface Props {}

export const MyModelStyle = styled(Modal)<Props>`
  .modal-title {
    font-size: 0.75rem;
    font-weight: 700;
  }
  .btn-close {
    font-size: 0.6rem;
    color: #000;
    opacity: 1;
  }
  .uppy-Dashboard-AddFiles-title {
    font-size: 0.8rem;
  }
  .uppy-Dashboard-inner {
    height: auto !important;
    min-height: 200px;
  }
  .uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
  .uppy-StatusBar-actions {
    line-height: 30px !important;
    height: 30px !important;
  }
  .uppy-StatusBar {
    height: 30px !important;
  }
  .uppy-StatusBar.is-waiting .uppy-StatusBar-actions {
    background: #f4f4f4 !important;
  }
`
