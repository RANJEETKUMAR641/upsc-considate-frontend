import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { Formtest } from 'app/pages/module/emedical/formtest'
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

test('Test Cases for Formtest emedical Module | Component should render correctly', async () => {
  const component = render(
    <Provider store={configureAppStore()}>
      <QueryClientProvider client={queryClient}>
        <Formtest />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component).toMatchSnapshot()
})
