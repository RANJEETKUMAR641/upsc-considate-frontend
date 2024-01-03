import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CandidateExperience from 'app/pages/module/candidate/candidate_experience'

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
        <CandidateExperience />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot(`
    <div
      style="position: relative;"
    >
      <div>
        <div
          class="MuiBox-root css-1wud0n6"
        >
          <div
            class="main-card mt-2 mb-3 card"
          >
            <div
              style="overflow-x: hidden;"
            >
              <div
                id="gridHight"
              >
                <div
                  aria-colcount="0"
                  aria-multiselectable="false"
                  aria-rowcount="1"
                  class="MuiDataGrid-root MuiDataGrid-root--densityStandard MuiDataGrid-withBorderColor css-1rnvqht-MuiDataGrid-root"
                  role="grid"
                >
                  <div
                    class="MuiDataGrid-toolbarContainer css-128fb87-MuiDataGrid-toolbarContainer"
                  >
                    <button
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="Select columns"
                      class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                      id=":r0:"
                      tabindex="0"
                      type="button"
                    >
                      <span
                        class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="ColumnIconIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
                          />
                        </svg>
                      </span>
                      Columns
                      <span
                        class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                      />
                    </button>
                    <button
                      aria-expanded="false"
                      aria-haspopup="true"
                      aria-label="Show filters"
                      class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                      data-mui-internal-clone-element="true"
                      id=":r2:"
                      tabindex="0"
                      type="button"
                    >
                      <span
                        class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                      >
                        <span
                          class="MuiBadge-root css-1c32n2y-MuiBadge-root"
                        >
                          <svg
                            aria-hidden="true"
                            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                            data-testid="FilterListIcon"
                            focusable="false"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                            />
                          </svg>
                          <span
                            class="MuiBadge-badge MuiBadge-standard MuiBadge-invisible MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary css-1pi4uwz-MuiBadge-badge"
                          >
                            0
                          </span>
                        </span>
                      </span>
                      Filters
                      <span
                        class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                      />
                    </button>
                    <button
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="Density"
                      class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                      id=":r5:"
                      tabindex="0"
                      type="button"
                    >
                      <span
                        class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="TableRowsIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
                          />
                        </svg>
                      </span>
                      Density
                      <span
                        class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                      />
                    </button>
                    <button
                      aria-expanded="false"
                      aria-haspopup="menu"
                      aria-label="Export"
                      class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                      id=":r7:"
                      tabindex="0"
                      type="button"
                    >
                      <span
                        class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                      >
                        <svg
                          aria-hidden="true"
                          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                          data-testid="SaveAltIcon"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
                          />
                        </svg>
                      </span>
                      Export
                      <span
                        class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                      />
                    </button>
                    <button
                      class="btn btn-tranparent p-0"
                      id="sectionFullscreen"
                    >
                      <svg
                        aria-hidden="true"
                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
                        data-testid="OpenWithIcon"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    class="MuiDataGrid-main css-204u17-MuiDataGrid-main"
                  >
                    <div
                      class="MuiDataGrid-columnHeaders MuiDataGrid-withBorderColor css-1iyq7zh-MuiDataGrid-columnHeaders"
                      role="presentation"
                      style="min-height: 24px; max-height: 24px; line-height: 24px;"
                    >
                      <div
                        class="MuiDataGrid-columnHeadersInner css-gl260s-MuiDataGrid-columnHeadersInner"
                        role="rowgroup"
                        style="transform: translate3d(0px, 0px, 0px);"
                      >
                        <div
                          aria-rowindex="1"
                          class="css-yrdy0g-MuiDataGrid-columnHeaderRow"
                          role="row"
                        />
                      </div>
                    </div>
                    <div
                      class="MuiDataGrid-virtualScroller css-axafay-MuiDataGrid-virtualScroller"
                      role="presentation"
                      style="overflow-x: hidden;"
                    >
                      <div
                        class="MuiDataGrid-overlayWrapper css-ql19fo-MuiDataGrid-overlayWrapper"
                      >
                        <div
                          class="MuiDataGrid-overlayWrapperInner css-1akuw9y-MuiDataGrid-overlayWrapperInner"
                          style="height: 0px; width: 0px;"
                        >
                          <div
                            class="MuiDataGrid-overlay css-1w53k9d-MuiDataGrid-overlay"
                          >
                            No rows
                          </div>
                        </div>
                      </div>
                      <div
                        class="MuiDataGrid-virtualScrollerContent MuiDataGrid-virtualScrollerContent--overflowed css-1kwdphh-MuiDataGrid-virtualScrollerContent"
                        role="presentation"
                        style="width: auto; height: 1px; min-height: auto;"
                      >
                        <div
                          class="MuiDataGrid-virtualScrollerRenderZone css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone"
                          role="rowgroup"
                          style="transform: translate3d(NaNpx, undefinedpx, 0px);"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="MuiBox-root css-13tqxrv"
          id="data"
          style="height: 653px; position: relative;"
        >
          <div
            class="sc-iqcoie gKGfLh"
          >
            <div
              class="splitter-layout"
            >
              <div
                class="layout-pane layout-pane-primary"
              >
                <div
                  class="pane-content"
                >
                  <div
                    class="main-card card"
                  >
                    <div
                      class="p-0 card-body"
                    >
                      <div
                        style="overflow-x: hidden;"
                      >
                        <div
                          id="gridHight"
                          style="height: 653px;"
                        >
                          <div
                            aria-colcount="0"
                            aria-multiselectable="false"
                            aria-rowcount="1"
                            class="MuiDataGrid-root MuiDataGrid-root--densityStandard MuiDataGrid-withBorderColor css-1rnvqht-MuiDataGrid-root"
                            role="grid"
                          >
                            <div
                              class="MuiDataGrid-toolbarContainer css-128fb87-MuiDataGrid-toolbarContainer"
                            >
                              <button
                                aria-expanded="false"
                                aria-haspopup="menu"
                                aria-label="Select columns"
                                class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                                id=":rr:"
                                tabindex="0"
                                type="button"
                              >
                                <span
                                  class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                                    data-testid="ColumnIconIcon"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
                                    />
                                  </svg>
                                </span>
                                Columns
                                <span
                                  class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                />
                              </button>
                              <button
                                aria-expanded="false"
                                aria-haspopup="true"
                                aria-label="Show filters"
                                class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                                data-mui-internal-clone-element="true"
                                id=":rt:"
                                tabindex="0"
                                type="button"
                              >
                                <span
                                  class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                                >
                                  <span
                                    class="MuiBadge-root css-1c32n2y-MuiBadge-root"
                                  >
                                    <svg
                                      aria-hidden="true"
                                      class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                                      data-testid="FilterListIcon"
                                      focusable="false"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
                                      />
                                    </svg>
                                    <span
                                      class="MuiBadge-badge MuiBadge-standard MuiBadge-invisible MuiBadge-anchorOriginTopRight MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-colorPrimary css-1pi4uwz-MuiBadge-badge"
                                    >
                                      0
                                    </span>
                                  </span>
                                </span>
                                Filters
                                <span
                                  class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                />
                              </button>
                              <button
                                aria-expanded="false"
                                aria-haspopup="menu"
                                aria-label="Density"
                                class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                                id=":r10:"
                                tabindex="0"
                                type="button"
                              >
                                <span
                                  class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                                    data-testid="TableRowsIcon"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
                                    />
                                  </svg>
                                </span>
                                Density
                                <span
                                  class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                />
                              </button>
                              <button
                                aria-expanded="false"
                                aria-haspopup="menu"
                                aria-label="Export"
                                class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall p-0 css-1knaqv7-MuiButtonBase-root-MuiButton-root"
                                id=":r12:"
                                tabindex="0"
                                type="button"
                              >
                                <span
                                  class="MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon"
                                >
                                  <svg
                                    aria-hidden="true"
                                    class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                                    data-testid="SaveAltIcon"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
                                    />
                                  </svg>
                                </span>
                                Export
                                <span
                                  class="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"
                                />
                              </button>
                              <button
                                class="btn btn-tranparent p-0 ps-0 "
                                id="sectionFull"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
                                  data-testid="EastIcon"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"
                                  />
                                </svg>
                              </button>
                              <button
                                class="btn btn-tranparent p-0"
                                id="sectionFullscreen"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
                                  data-testid="OpenWithIcon"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"
                                  />
                                </svg>
                              </button>

                              <button
                                class="btn btn-transparent p-0 pe-3"
                                id="datareload"
                              >
                                <svg
                                  aria-hidden="true"
                                  class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
                                  data-testid="RefreshIcon"
                                  focusable="false"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div
                              class="MuiDataGrid-main css-204u17-MuiDataGrid-main"
                            >
                              <div
                                class="MuiDataGrid-columnHeaders MuiDataGrid-withBorderColor css-1iyq7zh-MuiDataGrid-columnHeaders"
                                role="presentation"
                                style="min-height: 24px; max-height: 24px; line-height: 24px;"
                              >
                                <div
                                  class="MuiDataGrid-columnHeadersInner css-gl260s-MuiDataGrid-columnHeadersInner"
                                  role="rowgroup"
                                  style="transform: translate3d(0px, 0px, 0px);"
                                >
                                  <div
                                    aria-rowindex="1"
                                    class="css-yrdy0g-MuiDataGrid-columnHeaderRow"
                                    role="row"
                                  />
                                </div>
                              </div>
                              <div
                                class="MuiDataGrid-virtualScroller css-axafay-MuiDataGrid-virtualScroller"
                                role="presentation"
                                style="overflow-x: hidden;"
                              >
                                <div
                                  class="MuiDataGrid-overlayWrapper css-ql19fo-MuiDataGrid-overlayWrapper"
                                >
                                  <div
                                    class="MuiDataGrid-overlayWrapperInner css-1akuw9y-MuiDataGrid-overlayWrapperInner"
                                    style="height: 0px; width: 0px;"
                                  >
                                    <div
                                      class="MuiDataGrid-overlay css-1w53k9d-MuiDataGrid-overlay"
                                    >
                                      No rows
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="MuiDataGrid-virtualScrollerContent MuiDataGrid-virtualScrollerContent--overflowed css-1kwdphh-MuiDataGrid-virtualScrollerContent"
                                  role="presentation"
                                  style="width: auto; height: 1px; min-height: auto;"
                                >
                                  <div
                                    class="MuiDataGrid-virtualScrollerRenderZone css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone"
                                    role="rowgroup"
                                    style="transform: translate3d(NaNpx, undefinedpx, 0px);"
                                  />
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
              <div
                class="layout-splitter"
                role="separator"
              />
              <div
                class="layout-pane"
                style="width: 350px;"
              >
                <div
                  class="pane-content"
                >
                  <div>
                    <div
                      class="main-card card"
                    >
                      <div
                        class="p-0 card-body"
                      >
                        <div
                          id="candidate_experience_form"
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
                                  >
                                    <button
                                      class="btn btn-transparent ps-2 pe-2 pt-0 pb-0"
                                      id="sectionFull"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
                                        data-testid="WestIcon"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          d="m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"
                                        />
                                      </svg>
                                    </button>
                                    <button
                                      class="btn btn-transparent ps-2 pe-2 pt-0 pb-0"
                                      id="sectionFullscreen"
                                    >
                                      <svg
                                        aria-hidden="true"
                                        class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-ptiqhd-MuiSvgIcon-root"
                                        data-testid="OpenWithIcon"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"
                                        />
                                      </svg>
                                    </button>
                                  </div>
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
                                      style="height: -27px;"
                                    >
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
        </div>
      </div>
    </div>
  `)
})
