import { Route, Redirect } from 'react-router-dom'
import { Suspense, lazy, Fragment } from 'react'

import SuspenseLoader from 'app/components/Loader'

const Dashboards = lazy(() => import('../../DemoPages1/Dashboards'))

const AppMain = () => {
  return (
    <Fragment>
      <Suspense fallback={<SuspenseLoader />}>
        <Route path="/dashboards" component={Dashboards} />
      </Suspense>

      <Route exact path="/" render={() => <Redirect to="/dashboards/" />} />
    </Fragment>
  )
}

export default AppMain
