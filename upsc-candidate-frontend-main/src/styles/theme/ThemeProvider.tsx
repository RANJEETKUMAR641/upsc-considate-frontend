import * as React from 'react'
import { LicenseInfo } from '@mui/x-license-pro'
import { StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider as OriginalThemeProvider } from 'styled-components'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
} from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { useThemeSlice } from './slice'
import { selectTheme } from './slice/selectors'
import { CssBaseline } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useThemeSlice()

  const theme = useSelector(selectTheme)

  const materialTheme = createTheme({
    typography: {
      fontFamily: [
        'SourceSans3Regular',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      // fontSize: 14,
    },
  })
  React.useEffect(() => {
    document.getElementsByTagName('html')[0].style.fontSize = '16px'
  }, [])

  const cache = createCache({
    key: 'css',
    prepend: true,
  })

  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={cache}>
        <OriginalThemeProvider theme={theme}>
          <MaterialThemeProvider theme={materialTheme}>
            <CssBaseline />
            {React.Children.only(props.children)}
          </MaterialThemeProvider>
        </OriginalThemeProvider>
      </CacheProvider>
    </StyledEngineProvider>
  )
}
