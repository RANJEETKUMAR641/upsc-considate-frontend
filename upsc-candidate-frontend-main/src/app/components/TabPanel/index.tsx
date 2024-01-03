/**
 *
 * TabPanel
 *
 */
import { useTabContext } from '@mui/lab/TabContext/TabContext'
import { Container } from '@mui/material'
import React, { memo } from 'react'
import { map, get } from 'lodash'

import TabList from '@mui/joy/TabList'

interface Props {
  modulesTabs: any[]
}

export function Panel(props: any) {
  const { children, className, style, value: id, ...other } = props
  const context = useTabContext()

  if (context === null) {
    throw new TypeError('No TabContext provided')
  }
  const tabId = context.value

  return (
    <div
      className={className}
      style={{
        width: '100%',
        ...style,
        position: 'absolute',
        left: 0,
        visibility: id === tabId ? 'visible' : 'hidden',
      }}
      {...other}
    >
      <Container>{children}</Container>
    </div>
  )
}

export const TabPanel = memo(({ modulesTabs }: Props) => {
  return (
    <React.Fragment>
      <TabList>
        {map(get(modulesTabs, 'data', []), ({ name }) => (
          <TabList>{name}</TabList>
        ))}
      </TabList>
    </React.Fragment>
  )
})
