import PublicHeader from 'app/pages/common/components/HeaderPublic'
import PublicFooter from 'app/pages/common/components/publicFooter'
import { Route } from 'react-router-dom'

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <div style={{ minHeight: '100vh', background: '#eceff3' }}>
            <PublicHeader />
            <Component {...rest} {...props} />
            <PublicFooter />
          </div>
        </>
      )}
    />
  )
}
