import { configureAppStore } from '../configureStore'

describe('configureStore', () => {
  it('should return a store with injected enhancers', () => {
    const store = configureAppStore()
    expect(store).toEqual(
      expect.objectContaining({
        runSaga: expect.any(Function),
        injectedReducers: expect.any(Object),
        injectedSagas: expect.any(Object),
      }),
    )
  })

  it('should return an empty store', () => {
    const store = configureAppStore()
    expect(store.getState()).toMatchInlineSnapshot(`
      Object {
        "ThemeOptions": Object {
          "backgroundColor": "",
          "backgroundImage": "IMAGE_MOCK",
          "backgroundImageOpacity": "opacity-06",
          "colorScheme": "white",
          "enableBackgroundImage": false,
          "enableClosedSidebar": false,
          "enableFixedFooter": true,
          "enableFixedHeader": true,
          "enableFixedSidebar": true,
          "enableHeaderShadow": true,
          "enableMobileMenuSmall": "",
          "enablePageTabsAlt": true,
          "enablePageTitleIcon": true,
          "enablePageTitleSubheading": true,
          "enableSidebarShadow": true,
          "headerBackgroundColor": "",
        },
        "router": Object {
          "action": "POP",
          "location": Object {
            "hash": "",
            "pathname": "/",
            "query": Object {},
            "search": "",
            "state": undefined,
          },
        },
      }
    `)
  })
})
