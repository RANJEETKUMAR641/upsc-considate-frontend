import { Fragment, Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

import Idle from 'app/components/Timer/Idle'
import RefreshTimer from 'app/components/Timer/RefreshTimer'

import map from 'lodash/map'
import flatten from 'lodash/flatten'
import without from 'lodash/without'

import { get } from 'lodash'

import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import concat from 'lodash/concat'

import AppHeader from 'theme-library/Layout/AppHeader'
import AppSidebar from 'theme-library/Layout/AppSidebar'

import routes from 'config/ora.json'
import candidateRoutes from 'config/candidate.json'
import gatePass from 'config/gatepass.json'
import emedical from 'config/emedical.json'
import ebill from 'config/ebill.json'
import vms from 'config/vms.json'
import exam from 'config/exam.json'
import dairyentryadmin from 'config/dairyentryadmin.json'
import asoadmin from 'config/asoadmin.json'
import soadmin from 'config/soadmin.json'
import soadminlink from 'config/soadminlink.json'
import usadmin from 'config/usadmin.json'
import usadminlink from 'config/usadminlink.json'
import dsadmin from 'config/dsadmin.json'
import jsadminlink from 'config/jsadminlink.json'
import jsadmin from 'config/jsadmin.json'
import asadmin from 'config/asadmin.json'
import asadminfa from 'config/asadminfa.json'
import courtcase from 'config/courtcase.json'
import asoadminI from 'config/asoadminI.json'
import soadminI from 'config/soadminI.json'
import usadminom from 'config/usadminom.json'
import accountsI from 'config/accountsI.json'
import pao from 'config/pao.json'
import systemadmin from 'config/systemadmin.json'

import { getItem } from 'utils/storage'

// Theme Options
import ThemeOptions from 'theme-library/Layout/ThemeOptions'
import { NotFoundPage } from 'app/pages/common/NotFoundPage'
import { OverlayLoader } from 'app/components/OverlayLoader'

const myUserRoutes = () => {
  const action = get(getItem('token'), 'user.email')
  let menu

  switch (action) {
    case 'gatepass@upsc.in':
      menu = gatePass
      break
    case 'e-medical@upsc.in':
      menu = emedical
      break
    case 'e-bill@upsc.in':
      menu = ebill
      break
    case 'ora@upsc.in':
    case 'soap@upsc.in':
      menu = routes
      break
    case 'vms@upsc.in':
      menu = vms
      break
    case 'exam@upsc.in':
      menu = exam
      break
    case 'dairy-entryadmin@upsc.in':
      menu = dairyentryadmin
      break
    case 'asoadmin@upsc.in':
      menu = asoadmin
      break
    case 'soadmin@upsc.in':
      menu = soadmin
      break
    case 'soadminlink@upsc.in':
      menu = soadminlink
      break
    case 'usadmin@upsc.in':
      menu = usadmin
      break
    case 'usadminlink@upsc.in':
      menu = usadminlink
      break
    case 'dsadmin@upsc.in':
      menu = dsadmin
      break
    case 'jsadminlink@upsc.in':
      menu = jsadminlink
      break
    case 'jsadmin@upsc.in':
      menu = jsadmin
      break
    case 'asadmin@upsc.in':
      menu = asadmin
      break
    case 'asadminfa@upsc.in':
      menu = asadminfa
      break
    case 'court-case@upsc.in':
      menu = courtcase
      break
    case 'asoadminI@upsc.in':
      menu = asoadminI
      break
    case 'soadminI@upsc.in':
      menu = soadminI
      break
    case 'usadminom@upsc.in':
      menu = usadminom
      break
    case 'accountsI@upsc.in':
      menu = accountsI
      break
    case 'pao@upsc.in':
      menu = pao
      break
    case 'systemadmin@upsc.in':
      menu = systemadmin
      break
    default:
      menu = candidateRoutes
  }
  return menu
}

const { menu, module } = myUserRoutes()

const parentMenu = map(
  filter(menu, ({ component }: any) => !isEmpty(component)),
  ({ label, to, component }: any) => {
    return {
      label,
      to,
      component,
    }
  },
)

const lazyComponentArray = without(
  flatten(menu?.map((item) => item.content)),
  undefined,
)

const asyncComponents = concat(lazyComponentArray, parentMenu).reduce(
  (acc: Object, route) => {
    const { label, component = 'NotFoundPage' } = route as any

    return {
      ...acc,
      [label]: lazy(() =>
        import(`../../../app/pages/module/${module}/${component}.tsx`).catch(
          () => ({
            default: () => <NotFoundPage />,
          }),
        ),
      ),
    }
  },
  {},
)

const Dashboards = ({ menus = [], isLoading = false }: any) => {
  return (
    <Fragment>
      <ThemeOptions />
      <Idle />
      <RefreshTimer />
      <AppHeader userLogin={true} />

      {isLoading ? (
        <OverlayLoader open={true} className="app-outer" />
      ) : (
        <div className="app-main">
          <AppSidebar menuData={menus} />
          <div className="app-main__outer">
            <div className="app-main__inner">
              {parentMenu &&
                map(parentMenu, ({ to, label }) => {
                  return (
                    <Suspense fallback={<div />} key={label}>
                      <Route
                        key={label}
                        path={to}
                        component={get(asyncComponents, label)}
                      />
                    </Suspense>
                  )
                })}

              {myUserRoutes() &&
                map(myUserRoutes(), (item: any) => {
                  return map(item, ({ content }) =>
                    map(content, ({ to, label, params }) => {
                      return (
                        <Suspense fallback={<div />} key={label}>
                          <Route
                            key={label}
                            path={to}
                            component={get(asyncComponents, label)}
                            {...params}
                          />
                        </Suspense>
                      )
                    }),
                  )
                })}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default Dashboards
