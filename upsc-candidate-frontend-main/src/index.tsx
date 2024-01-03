/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import { ConnectedRouter } from 'connected-react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styles/theme/ThemeProvider'
import { Provider } from 'react-redux'
import FontFaceObserver from 'fontfaceobserver'
import { ToastContainer } from 'react-toastify'
import history from 'utils/history'

// import 'rc-tree-select/assets/index.less'

import 'app/assets/base.scss'
import 'app/assets/fontawesome-free-6.4.2-web/css/all.css'

// impozrt 'rc-tree/assets/index.css'

// Use consistent styling
import 'sanitize.css/sanitize.css'

import { App } from 'app'

import { HelmetProvider } from 'react-helmet-async'

import { configureAppStore } from 'store/configureStore'

import reportWebVitals from 'reportWebVitals'

// Initialize languages
import './locales/i18n'

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('SourceSans3Thin', {})
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded')
// })

const SourceSans3Regular = new FontFaceObserver('SourceSans3Regular', {})
const SourceSans3Medium = new FontFaceObserver('SourceSans3Medium', {})
const SourceSans3MediumItalic = new FontFaceObserver(
  'SourceSans3MediumItalic',
  {},
)
const SourceSans3Light = new FontFaceObserver('SourceSans3Light', {})
const SourceSans3LightItalic = new FontFaceObserver(
  'SourceSans3LightItalic',
  {},
)
const SourceSans3Italic = new FontFaceObserver('SourceSans3Italic', {})
const SourceSans3Bold = new FontFaceObserver('SourceSans3Bold', {})
const SourceSans3BoldItalic = new FontFaceObserver('SourceSans3BoldItalic', {})
const SourceSans3Black = new FontFaceObserver('SourceSans3Black', {})
const SourceSans3BlackItalic = new FontFaceObserver(
  'SourceSans3BlackItalic',
  {},
)

// When Open Sans is loaded, add a font-family using Open Sans to the body
Promise.all([
  SourceSans3Regular.load(),
  SourceSans3Medium.load(),
  SourceSans3MediumItalic.load(),
  SourceSans3Light.load(),
  SourceSans3LightItalic.load(),
  SourceSans3Italic.load(),
  SourceSans3Bold.load(),
  SourceSans3BoldItalic.load(),
  SourceSans3Black.load(),
  SourceSans3BlackItalic.load(),
])

const store = configureAppStore()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <ThemeProvider>
        <ConnectedRouter history={history}>
          <QueryClientProvider client={queryClient}>
            <ToastContainer limit={1} autoClose={8000} />
            <App />
          </QueryClientProvider>
        </ConnectedRouter>
      </ThemeProvider>
    </HelmetProvider>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
