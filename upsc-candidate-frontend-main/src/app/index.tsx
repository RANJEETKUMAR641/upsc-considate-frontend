/* eslint-disable */

/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { lazy, useEffect, useState } from 'react'

import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { isEmpty, isEqual } from 'lodash'

import { GlobalStyle } from 'styles/global-styles'

import { useTranslation } from 'react-i18next'

import { Root } from './pages/root'
import { NotFoundPage } from './pages/common/NotFoundPage'
import { OverlayLoader } from './components/OverlayLoader'
import Swal from 'sweetalert2'
import { setItem, removeItem, getItem } from 'utils/storage'
import { config } from 'utils/constants'

import Faq from './pages/common/faq'
import Instruction from './pages/common/instruction'
import { AuthRoute } from 'app/components/Routes/auth'
import { PublicRoute } from './components/Routes/public_sidebar'

const Trems = lazy(() => import('./pages/common/tremsandconditions'))
const VacancyDetails = lazy(() => import('./pages/common/vacancydetails'))
const Signup = lazy(() => import('./pages/common/signup'))
const Login = lazy(() => import('./pages/common/login'))
const CandidateLogin = lazy(() => import('./pages/common/candidateLogin'))
const Posts = lazy(() => import('./pages/common/posts'))
const Examination = lazy(() => import('./pages/common/examination'))
const CandidateSignOn = lazy(() => import('./pages/common/candidateSignSSO'))
const Pdf = lazy(() => import('./pages/common/pdfGenerator'))

const Home = lazy(() => import('./pages/common/home'))

const News = lazy(() => import('./pages/common/news'))

export function App() {
  const { i18n } = useTranslation()

  const isAuthenticated = !isEmpty(getItem('token'))
  const [open, setOpen] = useState(true)

  const handleConfirm = () => {
    // Use SweetAlert with an input field
    // custom popup for aws blocking
    Swal.fire({
      title: 'Enter Password:',
      input: 'text',
      inputPlaceholder: 'Type here...',
      showCancelButton: false,
      confirmButtonText: 'Submit',
      // cancelButtonText: 'Cancel',
      inputValidator: (value) => {
        if (value !== '12345') {
          setOpen(false)
          return 'Password is wrong!'
        }
        setItem('inputvalue', value)

        return null
      },
      customClass: {
        popup: 'custom-sweetalert-popup',
      },
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle confirmed action
        Swal.fire('Submitted!', `You entered: ${result.value}`, 'success')
      }
    })
  }

  const isInputValueStored = getItem('inputvalue') === '12345'

  const isPasswordUrl = isEqual(
    config.blackListUrl,
    import.meta.env.VITE_REACT_APP_BLACKLIST_URL,
  )

  useEffect(() => {
    const removeInputValue = setTimeout(() => {
      removeItem('inputvalue')
    }, 24 * 60 * 60 * 1000)

    return () => clearTimeout(removeInputValue)
  }, [])

  return (
    <>
      <Helmet
        titleTemplate="%s - UPSC"
        defaultTitle="Union Public Service Commission - UPSC"
        htmlAttributes={{ lang: 'en' }}
      >
        <meta
          name="description"
          content="Union Public Service Commission - UPSC"
        />
      </Helmet>
      {isPasswordUrl && !isInputValueStored && open && handleConfirm()}

      <React.Suspense fallback={<OverlayLoader open className="root" />}>
        <Switch>
          <Route exact path="/" component={Login} />

          <PublicRoute exact path="/posts" component={Posts} />
          <PublicRoute exact path="/examination" component={Examination} />

          <PublicRoute exact path="/terms-and-conditions" component={Trems} />

          <PublicRoute path="/candidate/otr" component={Signup} />
          <PublicRoute path="/candidate/login" component={CandidateLogin} />
          <PublicRoute path="/home" component={Home} />
          <PublicRoute path="/news-and-events" component={News} />
          <PublicRoute path="/pdf" component={Pdf} />

          <PublicRoute
            path="/candidate/forgot-password"
            component={CandidateSignOn}
          />
          <PublicRoute path="/forgot-password" component={CandidateSignOn} />
          <PublicRoute
            exact
            path="/post-details/:id"
            component={VacancyDetails}
          />
          <AuthRoute
            path="/dashboards"
            component={Root}
            auth={isAuthenticated}
          />

          <PublicRoute path="/candidate/faq" component={Faq} />
          <PublicRoute path="/candidate/instr_otr" component={Instruction} />
          <PublicRoute path="*" component={NotFoundPage} />
        </Switch>
      </React.Suspense>
      <GlobalStyle />
    </>
  )
}
