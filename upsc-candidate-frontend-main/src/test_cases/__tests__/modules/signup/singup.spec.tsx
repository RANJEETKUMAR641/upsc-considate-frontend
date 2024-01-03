import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import Signup from 'app/pages/common/signup'
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

test('Test Cases for Signup | Component should render correctly', async () => {
  const component = render(
    <Provider store={configureAppStore()}>
      <QueryClientProvider client={queryClient}>
        <Signup />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot(`
    <div
      class="sc-ksZaOG biZwdT"
    >
      <div
        class="fixed-header"
      >
        <div>
          <div
            aria-label="Site Header"
            class="app-header header-shadow appear appear-active"
            component="div"
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
            <div
              class="app-header__content"
            >
              <div
                class="app-header-right"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style="margin-top: 82px;"
      >
        <div
          class="container-fluid"
        >
          <div
            class="row"
          >
            <div
              class="col-sm-8 order-sm-1"
            >
              <div
                style="position: relative;"
              >
                <div>
                  <div
                    class="main-card card"
                    style="border: 0.1px solid #dee2e6;"
                  >
                    <div
                      class="sc-evZas iHWxng card-header"
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
                          <div
                            class="p-3"
                          >
                            <form>
                              <div
                                class="sc-crXcEl ftpJmu"
                              >
                                <div
                                  class="me-0 ms-0 row"
                                />
                                <span
                                  class="d-flex flex-row justify-content-end m-4"
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
            <div
              class="col-sm-4 order-sm-2"
            >
              <div
                class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root css-1v5z4dq-MuiPaper-root-MuiCard-root"
              >
                <div
                  class="MuiCardContent-root p-0 css-46bh2p-MuiCardContent-root"
                >
                  <h2
                    class="MuiTypography-root MuiTypography-body1 pt-4 pb-4 ps-3 mb-4 css-ahj2mt-MuiTypography-root"
                    style="font-weight: 700;"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium me-2 css-i4bv87-MuiSvgIcon-root"
                      data-testid="InfoIcon"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      />
                    </svg>
                    Steps for Applicants
                  </h2>
                  <div>
                    <ul>
                      <li>
                        <span>
                           Registration
                        </span>
                      </li>
                      <li>
                        <span>
                           Already Registered
                        </span>
                      </li>
                      <li>
                        <span>
                           Verification
                        </span>
                      </li>
                      <li>
                        <span>
                           Dashboard
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root mt-3  css-1v5z4dq-MuiPaper-root-MuiCard-root"
              >
                <div
                  class="MuiCardContent-root p-0 css-46bh2p-MuiCardContent-root"
                >
                  <h2
                    class="MuiTypography-root MuiTypography-body1 pt-4 pb-4 ps-3 mb-4 css-ahj2mt-MuiTypography-root"
                    style="font-weight: 700;"
                  >
                    <svg
                      aria-hidden="true"
                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium me-2 css-i4bv87-MuiSvgIcon-root"
                      data-testid="InfoIcon"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                      />
                    </svg>
                    Important Instructions for Filling Registration Form:
                  </h2>
                  <div
                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-1elwnq4-MuiPaper-root-MuiAccordion-root"
                  >
                    <div
                      aria-controls="panel1bh-content"
                      aria-expanded="false"
                      class="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root"
                      id="panel1bh-content"
                      role="button"
                      tabindex="0"
                    >
                      <div
                        class="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                        >
                          <svg
                            aria-hidden="true"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium me-2 css-i4bv87-MuiSvgIcon-root"
                            data-testid="AppRegistrationIcon"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17c-.16-.16-.42-.16-.58 0l-.88.88L20 12.75l.88-.88c.16-.16.16-.42 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"
                            />
                          </svg>
                           
                          <b>
                            Registration
                          </b>
                        </p>
                      </div>
                      <div
                        class="MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper"
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
                      class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root"
                      style="min-height: 0px;"
                    >
                      <div
                        class="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
                      >
                        <div
                          class="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
                        >
                          <div
                            aria-labelledby="panel1bh-content"
                            class="MuiAccordion-region"
                            id="panel1bh-content"
                            role="region"
                          >
                            <div
                              class="MuiAccordionDetails-root css-15v22id-MuiAccordionDetails-root"
                              style="border-top: 1px solid #e7e7e7;"
                            >
                              <div>
                                <p
                                  class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                                  style="font-weight: 700;"
                                >
                                  Applicant can submit his/her following details:
                                </p>
                                <div>
                                  <ul>
                                    <li>
                                      Name and Verify Name
                                    </li>
                                    <li>
                                      Full Name, if any
                                    </li>
                                    <li>
                                      Gender and Verify Gender
                                    </li>
                                    <li>
                                      Date of Birth and Verify Date of Birth
                                    </li>
                                    <li>
                                      Father's Name and Verify & Father's Name
                                    </li>
                                    <li>
                                      Mother's Name and Verify & Mother's Name
                                    </li>
                                    <li>
                                      Minority Status
                                    </li>
                                    <li>
                                      Valid Mobile Number (to be used as Login ID)
                                    </li>
                                    <li>
                                      Alternate Mobile Number, if any
                                    </li>
                                    <li>
                                      Valid Email ID (to be used as Login ID)
                                    </li>
                                    <li>
                                      Alternate Email ID, if any
                                    </li>
                                    <li>
                                      Board Examination Roll No (Class X)
                                    </li>
                                    <li>
                                      Security Questions
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-1elwnq4-MuiPaper-root-MuiAccordion-root"
                  >
                    <div
                      aria-controls="panel2bh-content"
                      aria-expanded="false"
                      class="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root"
                      id="panel2bh-content"
                      role="button"
                      tabindex="0"
                    >
                      <div
                        class="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                        >
                          <svg
                            aria-hidden="true"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium me-2 css-i4bv87-MuiSvgIcon-root"
                            data-testid="HowToRegIcon"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="m9 17 3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"
                              fill-rule="evenodd"
                            />
                          </svg>
                           
                          <b>
                            Already Registered
                          </b>
                        </p>
                      </div>
                      <div
                        class="MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper"
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
                      class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root"
                      style="min-height: 0px;"
                    >
                      <div
                        class="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
                      >
                        <div
                          class="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
                        >
                          <div
                            aria-labelledby="panel2bh-content"
                            class="MuiAccordion-region"
                            id="panel2bh-content"
                            role="region"
                          >
                            <div
                              class="MuiAccordionDetails-root css-15v22id-MuiAccordionDetails-root"
                              style="border-top: 1px solid #e7e7e7;"
                            >
                              <div>
                                <p
                                  class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                                  style="font-weight: 700;"
                                >
                                  Applicant can login his/her account using registered Email ID / Mobile Number as Login ID through OTP or OTR ID through Password:
                                </p>
                                <div>
                                  <ul>
                                     
                                    <li>
                                      Through OTP 
                                    </li>
                                    <li>
                                      Login ID as (Email ID / Mobile Number)
                                    </li>
                                    <li>
                                      OTP (Six numeric digit)
                                    </li>
                                    <li>
                                      Through Password
                                    </li>
                                    <li>
                                      Login ID as One Time Registration ID (OTR ID)
                                    </li>
                                    <li>
                                      Password
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-1elwnq4-MuiPaper-root-MuiAccordion-root"
                  >
                    <div
                      aria-controls="panel3bh-content"
                      aria-expanded="false"
                      class="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root"
                      id="panel3bh-content"
                      role="button"
                      tabindex="0"
                    >
                      <div
                        class="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                        >
                          <svg
                            aria-hidden="true"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium me-2 css-i4bv87-MuiSvgIcon-root"
                            data-testid="CheckCircleOutlineIcon"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                            />
                          </svg>
                           
                          <b>
                            Verification
                          </b>
                        </p>
                      </div>
                      <div
                        class="MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper"
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
                      class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root"
                      style="min-height: 0px;"
                    >
                      <div
                        class="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
                      >
                        <div
                          class="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
                        >
                          <div
                            aria-labelledby="panel3bh-content"
                            class="MuiAccordion-region"
                            id="panel3bh-content"
                            role="region"
                          >
                            <div
                              class="MuiAccordionDetails-root css-15v22id-MuiAccordionDetails-root"
                              style="border-top: 1px solid #e7e7e7;"
                            >
                              <div>
                                <p
                                  class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                                  style="font-weight: 700;"
                                >
                                  An applicant needs to verify his/her details which he/she gave during the One Time Registration:
                                </p>
                                <div>
                                  <ul>
                                     
                                    <li>
                                      Name
                                    </li>
                                    <li>
                                      Full Name
                                    </li>
                                    <li>
                                      Gender - (if you want to change, you can edit the Gender at the time of verification)
                                    </li>
                                    <li>
                                      Date of Birth
                                    </li>
                                    <li>
                                      Father's Name
                                    </li>
                                    <li>
                                      Mother's Name
                                    </li>
                                    <li>
                                      Minority - (if you want to change, you can edit the Minority status at the time of verification)
                                    </li>
                                    <li>
                                      Mobile
                                    </li>
                                    <li>
                                      Alternate Mobile - (if you want to change, you can edit the Alternate Mobile at the time of verification)
                                    </li>
                                    <li>
                                      Email ID
                                    </li>
                                    <li>
                                      Alternate Email ID - (if you want to change, you can edit the Alternate Email ID at the time of verification)
                                    </li>
                                    <li>
                                      Board Examination Roll No (Class X)
                                    </li>
                                    <li>
                                      Set New Password
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-1elwnq4-MuiPaper-root-MuiAccordion-root"
                  >
                    <div
                      aria-controls="panel4bh-content"
                      aria-expanded="false"
                      class="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root"
                      id="panel4bh-content"
                      role="button"
                      tabindex="0"
                    >
                      <div
                        class="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content"
                      >
                        <p
                          class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                        >
                          <svg
                            aria-hidden="true"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium me-2 css-i4bv87-MuiSvgIcon-root"
                            data-testid="DashboardIcon"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                            />
                          </svg>
                           
                          <b>
                            Dashboard
                          </b>
                        </p>
                      </div>
                      <div
                        class="MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper"
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
                      class="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root"
                      style="min-height: 0px;"
                    >
                      <div
                        class="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper"
                      >
                        <div
                          class="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner"
                        >
                          <div
                            aria-labelledby="panel4bh-content"
                            class="MuiAccordion-region"
                            id="panel4bh-content"
                            role="region"
                          >
                            <div
                              class="MuiAccordionDetails-root css-15v22id-MuiAccordionDetails-root"
                              style="border-top: 1px solid #e7e7e7;"
                            >
                              <div>
                                <p
                                  class="MuiTypography-root MuiTypography-body1 css-ahj2mt-MuiTypography-root"
                                  style="font-weight: 700;"
                                >
                                  Applicant can also view his/her application status of every steps on dashboard:
                                </p>
                                <div>
                                  <ul>
                                     
                                    <li>
                                      Personal Details
                                    </li>
                                    <li>
                                      Apply to
                                      <b>
                                         Active Notification
                                      </b>
                                    </li>
                                    <li>
                                      Check Application Submission Status
                                    </li>
                                  </ul>
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
    </div>
  `)
})
