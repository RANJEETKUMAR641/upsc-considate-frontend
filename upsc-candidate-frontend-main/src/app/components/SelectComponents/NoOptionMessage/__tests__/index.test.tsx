import * as React from 'react'
import { render } from '@testing-library/react'

import { NoOptionMessage } from '..'

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

describe('<NoOptionMessage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NoOptionMessage />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
