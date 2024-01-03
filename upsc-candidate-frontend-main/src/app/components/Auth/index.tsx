import React from 'react'
import { isEmpty } from 'lodash'
import { Redirect, Route } from 'react-router-dom'
import { getItem } from 'utils/storage'

export const RouteAuthenticated = ({ render: Component, path }: any) => {
  const isAuthenticated = !isEmpty(getItem('token'))

  if (!isAuthenticated) {
    return <Redirect to="/" />
  }

  return <Route render={Component} path={path} />
}

export const RouteUnauthenticated = ({ render: Component, path }: any) => {
  const isAuthenticated = !isEmpty(getItem('token'))

  if (isAuthenticated) {
    return <Redirect to="/dashboards" />
  }

  return <Route render={Component} path={path} />
}
