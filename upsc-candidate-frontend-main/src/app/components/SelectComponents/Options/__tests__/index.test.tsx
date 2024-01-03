import * as React from 'react'
import { render } from '@testing-library/react'

import { Options } from '..'

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

describe('<Options  />', () => {
  const mockProps = {} as any
  it('should match snapshot', () => {
    const loadingIndicator = render(<Options {...mockProps} />)
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})
