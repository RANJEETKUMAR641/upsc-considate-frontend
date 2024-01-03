import { render } from '@testing-library/react'
import { configureAppStore } from 'store/configureStore'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CandidateExperience from 'app/pages/module/candidate/candidate_experience'
import CandidateApplication from 'app/pages/module/candidate/candidate_application'

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
        <CandidateApplication match={undefined} />
      </QueryClientProvider>
    </Provider>,
  )

  expect(component.container.firstChild).toMatchInlineSnapshot()
})
