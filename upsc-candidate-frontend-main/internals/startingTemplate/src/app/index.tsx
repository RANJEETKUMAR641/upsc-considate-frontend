/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

/* eslint-disabled */

import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyle } from 'styles/global-styles'

import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './components/NotFoundPage/Loadable'

export function App() {
  return (
    <BrowserRouter>
      <Route>
        <Route path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Route>
      <GlobalStyle />
    </BrowserRouter>
  )
}
