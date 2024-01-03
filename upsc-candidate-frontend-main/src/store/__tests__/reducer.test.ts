import createReducer from '../reducers'
import { Reducer } from '@reduxjs/toolkit'

describe('reducer', () => {
  it('should inject reducers', () => {
    const dummyReducer = (s = {}, a) => 'dummyResult'
    const reducer = createReducer({ test: dummyReducer } as any) as Reducer<
      any,
      any
    >
    const state = reducer({}, '')
    expect(state.test).toBe('dummyResult')
  })

  it('should return identity reducers when empty', () => {
    const reducer = createReducer() as Reducer<any, any>
    const state = { a: 1 }
    const newState = reducer(state, '')
    expect(newState).toMatchInlineSnapshot(
      '',
      `
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
    `,
    )
  })
})
