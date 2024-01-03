import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { configureAppStore } from 'store/configureStore'

import { Provider } from 'react-redux'
import Header from '../index'

jest.mock('axios')

jest.mock('')
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

describe('Test cases for login page header snapshot', () => {
  const queryClient = new QueryClient()
  const store = configureAppStore()

  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Header />
        </QueryClientProvider>
      </Provider>,
    )
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})

describe('Test cases for element present', () => {
  it('should element present in document', () => {
    const queryClient = new QueryClient()
    const store = configureAppStore()

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Header />
        </QueryClientProvider>
      </Provider>,
    )
    const text = screen.getByTestId('logoTxt')
    const element = screen.getByTestId('OTR')
    expect(text).toBeInTheDocument()
    expect(element).toBeInTheDocument()
  })
})
