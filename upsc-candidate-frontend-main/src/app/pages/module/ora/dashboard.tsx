/**
 *
 * dashboard
 *
 */

import { memo } from 'react'
import styled from 'styled-components'

const DashboardWrapper = styled.div`
  .EmbedFrame-footer {
    display: none;
  }
  overflow: auto;
`
const dashboard = memo(() => {
  return (
    <DashboardWrapper>
      <p />
    </DashboardWrapper>
  )
})

export default dashboard
