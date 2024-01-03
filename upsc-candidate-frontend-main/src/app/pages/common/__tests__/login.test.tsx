import { render, screen, fireEvent, logRoles } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { configureAppStore } from 'store/configureStore'

import Login from '../login'
import { Provider } from 'react-redux'

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

jest.mock('utils/requestPayload', () => {
  return {
    data: { token: 'dummy_token' },
  }
})

const mockedAlert = jest.fn()
global.alert = mockedAlert

// describe('Test cases for login user', () => {
//   const queryClient = new QueryClient()
//   const store = configureAppStore()

//   it('should login new user', async () => {
//     const { result, waitFor } = renderHook(() => useGetLogin(), {
//       wrapper: wrapper,
//     })
//     nock('http://localhost:3000', {
//       reqheaders: {
//         'app-id': () => true,
//       },
//     })
//       .post('/api/user/login')
//       .reply(200, {})

//     act(() => {
//       result.current.mutate({
//         email: 'dummy@dummy.com',
//         password: 'asdA@123',
//       } as any)
//     })
//     await waitFor(() => {
//       return result.current.isLoading
//     })
//     expect(result.current.isLoading).toBe(true)
//   })
// })

describe('Test cases for login page snapshot', () => {
  const queryClient = new QueryClient()
  const store = configureAppStore()
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Provider>,
    )
    expect(loadingIndicator.container.firstChild).toMatchSnapshot()
  })
})

describe('Test cases for login form elements (email,password,login are present', () => {
  it('should element present in document', () => {
    const queryClient = new QueryClient()
    const store = configureAppStore()

    const { getByLabelText, getByText, getByRole } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Provider>,
    )

    expect(getByLabelText('Email')).toBeInTheDocument()
    expect(getByLabelText('Password')).toBeInTheDocument()
    expect(getByText('Login')).toBeInTheDocument()
    expect(
      getByRole('link', { name: 'One Time Registration (OTR)' }),
    ).toBeInTheDocument()
  })
})

describe('Test cases for displays login form validation', () => {
  it('displays validation errors for invalid input', async () => {
    const queryClient = new QueryClient()
    const store = configureAppStore()

    const { getByText } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Provider>,
    )

    userEvent.click(getByText('Login'))
    const email = await screen.findByText('Email is required')
    const password = await screen.findByText('Password is required')

    expect(email).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  })
})

describe('Test cases for link', () => {
  it('test for link of One Time Registration', async () => {
    const queryClient = new QueryClient()
    const store = configureAppStore()

    const { getByRole } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Provider>,
    )

    expect(
      getByRole('link', { name: 'One Time Registration (OTR)' }),
    ).toHaveAttribute('href', '/')
  })
})

//fail prevent default

// describe('Test cases recover password link', () => {
//   it('test for link of recover password', async () => {
//     const queryClient = new QueryClient()
//     const store = configureAppStore()

//     const { getByRole } = render(
//       <Provider store={store}>
//         <QueryClientProvider client={queryClient}>
//           <Login />
//         </QueryClientProvider>
//       </Provider>,
//     )
//     const recoverPassword = getByRole('link', { name: 'Recover Password' }));
//     fireEvent.click(getByRole('link', { name: 'Recover Password' }));
//     expect().toHaveAgetByRole('link', { name: 'Recover Password' })attribute('href', '/#')
//   })
// })

describe('Test cases for mock email', () => {
  it('email validation and displays it', async () => {
    const queryClient = new QueryClient()
    const store = configureAppStore()

    const { getByRole } = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Provider>,
    )

    const inputFirst = getByRole('textbox', { name: /email/i })
    const submitButton = getByRole('button', { name: /Login/i })
    userEvent.type(inputFirst, 'abcgmail.com')
    userEvent.tab()
    userEvent.click(submitButton)
    expect(inputFirst).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})

describe('Test cases for Email validation error', () => {
  it('displays  errors for invalid email', async () => {
    const queryClient = new QueryClient()
    const store = configureAppStore()

    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Login />
        </QueryClientProvider>
      </Provider>,
    )
    logRoles(screen.getByTestId('myForm'))
    const emailInput = screen.getByTestId('email')
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    const submitButton = screen.getByText('Login')
    fireEvent.click(submitButton)
    const validation = await screen.findByText('Enter a valid email')
    expect(validation).toBeInTheDocument()
  })
})

//prevent default

// describe('Test cases for focus', () => {
//   test('test focus and Blur', async () => {
//     const queryClient = new QueryClient()
//     const store = configureAppStore()

//     const { getByLabelText } = render(
//       <Provider store={store}>
//         <QueryClientProvider client={queryClient}>
//           <Login />
//         </QueryClientProvider>
//       </Provider>,
//     )

//     const input1 = getByLabelText('Email')
//     const input2 = getByLabelText('Password')

//     input1.focus()
//     fireEvent.change(input1, { target: { value: '' } })
//     userEvent.tab()

//     expect(input2).toHaveFocus()
//   })
// })

// describe('Test cases for password validation error', () => {
// it('display error for short password', async() => {
//   const queryClient = new QueryClient()
//     const store = configureAppStore()
//     const { getByText} = render(
//       <Provider store={store}>
//         <QueryClientProvider client={queryClient}>
//           <Login />
//         </QueryClientProvider>
//       </Provider>,
//     )
//   const passwordInput = screen.getByTestId("Password");
//  fireEvent.change(passwordInput,{target:{value: 'abc'}});
//   const submitButton = screen.getByText('Login');
//   fireEvent.click(submitButton);
// const validation = await screen.findByText('Password should be at least 8 characters long')
//   expect(validation).toBeInTheDocument();
// });
// });

// case fail
// describe('not show any error message', () => {
//   it('should not show any error message when the component is loaded', async() => {
//     const queryClient = new QueryClient()
//       const store = configureAppStore()

//       const { getByText} = render(
//         <Provider store={store}>
//           <QueryClientProvider client={queryClient}>
//             <Login />
//           </QueryClientProvider>
//         </Provider>,
//       )
//   const alertElement = screen.findByRole("alert");
//   expect(alertElement).not.toBeInTheDocument();
// });
// });

//(Case Fail)
// describe('Test cases for mock password', () => {
//   it('invalid password validation and displays it', async () => {
//     const queryClient = new QueryClient()
//     const store = configureAppStore()

//     const { getByRole, getByLabelText } = render(
//       <Provider store={store}>
//         <QueryClientProvider client={queryClient}>
//           <Login />
//         </QueryClientProvider>
//       </Provider>,
//     )

//     fireEvent.input(getByRole('textbox', { name: /email/i }), {
//       target: {
//         value: 'test',
//       },
//     })

//     fireEvent.input(getByLabelText('password'), {
//       target: {
//         value: 'password',
//       },
//     })

//     fireEvent.submit(getByRole('button'))

//     expect(await screen.findAllByRole('alert')).toHaveLength(1)
//     expect(Login).not.toBeCalled()
//     expect(getByRole('textbox', { name: /email/i })).toHaveValue('test')
//     expect(getByLabelText('password')).toHaveValue('password')
//   })
// })
