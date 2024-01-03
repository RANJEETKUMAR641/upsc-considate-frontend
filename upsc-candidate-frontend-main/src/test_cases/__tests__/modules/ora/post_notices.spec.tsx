import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { post_notices as PostNotices } from 'app/pages/module/ora/post_notices'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
        <PostNotices />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot(`
    <div
      class="loader-container"
      style="width: 100%;"
    >
      <div>
        <div
          aria-hidden="true"
          class="MuiBackdrop-root filter_form_loader css-1ol6qhc-MuiBackdrop-root"
          style="opacity: 1; webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms; transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;"
        >
          <span
            class="MuiCircularProgress-root MuiCircularProgress-indeterminate MuiCircularProgress-colorInherit css-62e83j-MuiCircularProgress-root"
            role="progressbar"
            style="width: 40px; height: 40px;"
          >
            <svg
              class="MuiCircularProgress-svg css-1idz92c-MuiCircularProgress-svg"
              viewBox="22 22 44 44"
            >
              <circle
                class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate css-176wh8e-MuiCircularProgress-circle"
                cx="44"
                cy="44"
                fill="none"
                r="20.2"
                stroke-width="3.6"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  `)
})
