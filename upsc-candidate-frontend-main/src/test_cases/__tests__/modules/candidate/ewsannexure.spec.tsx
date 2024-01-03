import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CreateVanue from 'app/pages/module/candidate/ewsannexure'

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
        <CreateVanue />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot(`
    <div
      class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded Mui-expanded MuiAccordion-gutters css-1elwnq4-MuiPaper-root-MuiAccordion-root"
    >
      <div
        aria-controls="panel4bh-content"
        aria-expanded="true"
        class="MuiButtonBase-root MuiAccordionSummary-root Mui-expanded MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root"
        id="panel4bh-header"
        role="button"
        tabindex="0"
      >
        <div
          class="MuiAccordionSummary-content Mui-expanded MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content"
        >
          <p
            class="MuiTypography-root MuiTypography-body1 css-1m4ljmh-MuiTypography-root"
          >
            Income Details
          </p>
        </div>
        <div
          class="MuiAccordionSummary-expandIconWrapper Mui-expanded css-yw020d-MuiAccordionSummary-expandIconWrapper"
        >
          <svg
            aria-hidden="true"
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            data-testid="ExpandMoreIcon"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
            />
          </svg>
        </div>
      </div>
      <div
        class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered css-pwcg7p-MuiCollapse-root"
        style="min-height: 0px;"
      >
        <div
          class="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
        >
          <div
            class="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
          >
            <div
              aria-labelledby="panel4bh-header"
              class="MuiAccordion-region"
              id="panel4bh-content"
              role="region"
            >
              <div
                class="MuiAccordionDetails-root css-15v22id-MuiAccordionDetails-root"
              >
                <div
                  style="position: relative;"
                >
                  <div
                    id="daf2_ews_incom_form"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
})
