import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { MonthlyPass } from 'app/pages/module/gatepass/monthlypass'
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

test('Test Cases for Monthly GatePass Module | Component should render correctly', async () => {
  const component = render(
    <Provider store={configureAppStore()}>
      <QueryClientProvider client={queryClient}>
        <MonthlyPass />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot(`
    <div
      class="sc-evZas btyqPz"
    >
      <div
        style="position: relative;"
      >
        <div
          id="monthlypass_form"
        >
          <div>
            <div
              class="main-card card"
              style="border: 0.1px solid #dee2e6;"
            >
              <div
                class="sc-kDDrLX ejHkpa card-header"
                style="display: block;"
              >
                <div
                  class="headerbgOverlay"
                >
                  <span
                    class="MuiSkeleton-root MuiSkeleton-text MuiSkeleton-pulse w-75 css-1n7gpw1-MuiSkeleton-root"
                    style="height: 30px;"
                  />
                  <div
                    class="headingIcon"
                  />
                </div>
              </div>
              <div
                aria-hidden="false"
                class="ReactCollapse--collapse"
                style="height: auto; overflow: initial;"
              >
                <div
                  class="ReactCollapse--content"
                >
                  <div
                    class="p-0 mb-0  p-0 card-body"
                  >
                    <div>
                      <form>
                        <div
                          class="sc-jqUVSM glrpSr"
                        >
                          <div
                            class="me-0 ms-0 row"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})
