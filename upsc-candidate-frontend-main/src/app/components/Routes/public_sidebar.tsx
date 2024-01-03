import PublicHeader from 'app/pages/common/components/HeaderPublic'
import PublicFooter from 'app/pages/common/components/publicFooter'
import { Route } from 'react-router-dom'
import { PublicSidebarStyle } from './public_sidebar.style'
import ImprtantLink from 'app/pages/common/components/ImportantLink'

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <div style={{ minHeight: '100vh', background: '#eceff3' }}>
            <PublicHeader />
            <PublicSidebarStyle>
              <div>
                <div className="sidebar px-sm-2">
                  <ImprtantLink />
                </div>
                <div className="rightContent">
                  <Component {...rest} {...props} />
                </div>
              </div>
            </PublicSidebarStyle>
            <PublicFooter />
          </div>
        </>
      )}
    />
  )
}
