import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { hospitalentry as Hospitalentry } from 'app/pages/module/emedical/hospitalentry'
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

test('Test Cases for hospital entry emedical Module | Component should render correctly', async () => {
  const component = render(
    <Provider store={configureAppStore()}>
      <QueryClientProvider client={queryClient}>
        <Hospitalentry />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component).toMatchSnapshot()
})
