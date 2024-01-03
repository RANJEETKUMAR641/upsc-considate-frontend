import { Route, Redirect } from 'react-router-dom'

export const AuthRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: '/candidate/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
