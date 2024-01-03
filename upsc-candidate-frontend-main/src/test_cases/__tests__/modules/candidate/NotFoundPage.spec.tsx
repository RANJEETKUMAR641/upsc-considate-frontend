import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NotFoundPage from 'app/pages/module/candidate/NotFoundPage'

jest.mock('axios')
jest.mock('react-password-checklist', () => {})
jest.mock('@uppy/core', () => {})
jest.mock('@uppy/react', () => {})
jest.mock('utils/requestPayload', () => ({}))
jest.mock('utils/requestPayload2', () => ({}))

beforeAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
afterEach(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})
afterAll(() => {
  jest.clearAllMocks()
  jest.resetAllMocks()
})

const queryClient = new QueryClient()

test('Test Cases for PostNotices Ora Module | Component should render correctly', async () => {
  const component = render(
    <Provider store={configureAppStore()}>
      <QueryClientProvider client={queryClient}>
        <NotFoundPage />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot(`
    <div
      class="sc-gsnTZi iobKbN"
    >
      <div
        class="sc-jSMfEi hBxgQb"
      >
        <div
          style="margin-left: -0.6rem; margin-top: -3rem;"
        >
          <div
            class="app-header__logo"
          >
            <div
              class="sc-bczRLJ kxxrZ logoTxt"
            >
              <img
                alt="Logo"
                src="IMAGE_MOCK"
              />
              <h1
                class="MuiTypography-root MuiTypography-h1 css-o2w69a-MuiTypography-root"
              >
                संघ लोक सेवा आयोग
                <p>
                  UNION PUBLIC SERVICE COMMISSION
                </p>
              </h1>
            </div>
          </div>
          <div
            class="app-header__mobile-menu"
          >
            <div
              role="button"
              tabindex="0"
            >
              <button
                class="jsx-3928250682 BurgerSlider Burger"
              >
                <div
                  class="jsx-3928250682 BurgerBox"
                >
                  <div
                    class="jsx-3928250682 BurgerInner"
                  />
                </div>
              </button>
            </div>
          </div>
          <div
            class="app-header__menu"
          >
            <span
              role="button"
              tabindex="0"
            >
              <button
                class="btn-icon btn-icon-only btn btn-dark btn-sm"
                type="button"
              >
                <div
                  class="btn-icon-wrapper"
                >
                  <svg
                    aria-hidden="true"
                    class="svg-inline--fa fa-ellipsis-v "
                    data-icon="ellipsis-v"
                    data-prefix="fas"
                    focusable="false"
                    role="img"
                    style="vertical-align: 0rem;"
                    viewBox="0 0 192 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </button>
            </span>
          </div>
        </div>
        <div
          class="sc-dkzDqf cheNqM"
        >
          <span
            class="sc-eCYdqJ text-warning"
          >
            <i
              class="fa fa-exclamation-triangle"
            />
          </span>
           
          Page not found
        </div>
        <div
          class="sc-hKMtZM jLHcQx"
        >
          The requested URL 
          /
           was not found
        </div>
        <button
          class="mt-3 btn btn-outline-warning"
          type="button"
        >
          Go To Homepage
        </button>
      </div>
    </div>
  `)
})
