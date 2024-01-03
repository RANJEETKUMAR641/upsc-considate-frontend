import { Fragment, useEffect } from 'react'
import Logo from 'app/assets/images/gov_Logo_white.png'
import { Col, Row } from 'reactstrap'
import { FormProvider, useForm } from 'react-hook-form'
import { useGetLogin } from './Mutation/useGetLogin'

import { CircularProgress, Typography } from '@mui/material'
import LoginOutlined from '@mui/icons-material/LoginOutlined'
import { LABELS } from 'utils/constants'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import { notify } from 'utils/notify'
import { LoginNewStyle } from './pageStyles/LoginNew'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { removeItem } from 'utils/storage'
import PublicHeader from './components/HeaderPublic'

function Login() {
  const { isLoading, mutate, res } = useGetLogin() as any
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const { handleSubmit } = methods
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm()

  const onSubmit = (data) => {
    const payload = {
      email: data?.loginid,
      password: data?.password,
      captcha: data?.captcha,
    }
    mutate(payload)
  }

  useEffect(() => {
    res?.statusCode?.statusCode === 400 && notify(res.message, 'error')
  }, [res])

  useEffect(() => removeItem('token'), [])

  const { mutate: mutateCaptcha } = useMutation({
    mutationFn: (payload) => requestPayload(payload, 'api/service'),
  })

  // const refresCaptcha = () => {
  //   const payload = {
  //     action: 'generate',
  //     section: 'captcha',
  //     path: 'public',
  //   }

  //   mutateCaptcha({ ...payload } as any)
  // }

  useEffect(() => {
    const payload = {
      action: 'generate',
      section: 'captcha',
      path: 'public',
    }

    mutateCaptcha({ ...payload } as any)
  }, [])

  return (
    <LoginNewStyle>
      <PublicHeader />
      <Fragment>
        <div className="loginContainer mt-3">
          <div className="loginLogo">
            <div className="logInLogoBox">
              <img
                src={Logo}
                alt="Logo"
                className="img-fluid mx-auto d-block loginLogoImg"
                aria-hidden="true"
              />
            </div>
            <div className="loginHeading">
              <Typography variant="h1">
                {LABELS.LOGIN_FORM.HEADING_TEXT}
                <br />
                <span>UNION PUBLIC SERVICE COMMISSION</span>
              </Typography>
            </div>
          </div>
          <div className="loginBox">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormProvider {...methods}>
                <FormBuilder
                  filterId=""
                  formId="admin_login"
                  list={false}
                  showForm={true}
                  methods={methods}
                />
              </FormProvider>
              <div className="divider" />
              <Row>
                <Col>
                  <a
                    href="/forgot-password"
                    className="btn-lg btn btn-link text-warning recoverbtn p-0"
                  >
                    <strong>Forgot Password</strong>
                  </a>
                </Col>
                <Col className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-warning p-0 ps-3 pe-3 input-sm"
                    tabIndex={8}
                  >
                    {isLoading ? (
                      <CircularProgress
                        color="inherit"
                        size={16}
                        aria-hidden="true"
                      />
                    ) : (
                      <LoginOutlined
                        fontSize="small"
                        className="me-2"
                        style={{ marginTop: '-2px' }}
                      />
                    )}
                    Login
                  </button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </Fragment>
    </LoginNewStyle>
  )
}

export default Login
