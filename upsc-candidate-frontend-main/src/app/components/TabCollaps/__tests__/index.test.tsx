import * as React from 'react'
import { render } from '@testing-library/react'

import TabCollaps from '..'

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }
  },
}))

describe('<TabCollaps  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <TabCollaps
        data={[]}
        title=""
        opentab={false}
        tabhandle={false}
        padding={false}
      />,
    )
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
