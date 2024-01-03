/* eslint-disable */
import { memo, useCallback, useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Col, Container, Row } from 'reactstrap'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import { LoginNewStyle } from './pageStyles/LoginNew'
import { Typography } from '@mui/material'
import Logo from 'app/assets/images/gov_Logo_white.png'
import { LABELS } from 'utils/constants'
import Steps from './components/StepsForgotPass'
import LoginOutlined from '@mui/icons-material/LoginOutlined'
import { showByDiv, hideByDiv } from 'utils/handleClass'
import { notify } from 'utils/notify'
import { setItem } from 'utils/storage'
import { forgotPasswordData } from 'app/assets/json/forgotPassword'
const data: any = forgotPasswordData
const CandidateSignOn = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const { mutate: candidateForget, data: data1 } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/service'),
  }) as any

  useEffect(() => {
    if (data1 && !isEmpty(data1)) {
      notify(data1?.[0]?.message, 'success')
      window.location.href = '/candidate/login'
      if (data1?.token) {
        setItem('token', data)
        window.location.href = '/dashboards/main'
      }
    }
  }, [data1])

  useEffect(() => {
    hideByDiv('my-colId-password')
  }, [data])

  const hendlePassword = (values) => {
    if (values.confirm_password !== '' && values.confirm_password !== undefined)
      if (values?.password !== values.confirm_password) {
        methods.setError('confirm_password', {
          message: 'Password and Confirm Password did not match',
        })
      }
  }

  // Updates unique identifier text and icon

  const onSubmit = () => {
    const payload = {
      action: 'setPassword',
      section: 'forgotPassword',
      path: 'public',
      password: methods.getValues().password,
      captcha: methods.getValues().captcha,
      recpeintId: methods.getValues()?.mobile || methods.getValues()?.email,
      userType: window.location.href.includes('candidate') ? 'candidate' : 'NA',
    }

    candidateForget({ ...payload } as any)
  }

  const handleSectionChange = (loginType) => {
    if (loginType?.value === 'email') {
      hideByDiv('my-colId-mobile')
      showByDiv('my-colId-email')
    }
    if (loginType?.value === 'mobile') {
      hideByDiv('my-colId-email')
      showByDiv('my-colId-mobile')
    }
  }

  const handleOnFormChange = useCallback((values) => {
    handleSectionChange(values?.login_type)
    hendlePassword(values)
  }, [])

  const successCB = () => {}

  return (
    <LoginNewStyle>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={{ size: 4 }} />
            <Col sm={{ size: 4 }}>
              <div className="">
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
                  {/* onSubmit={handleSubmit(onSubmit)} */}
                  <FormProvider {...methods}>
                    <FormBuilder
                      filterId=""
                      formId="forgotpassword"
                      list={false}
                      showForm={true}
                      methods={methods}
                      schemaData={data?.[0]}
                      onFormChange={handleOnFormChange}
                      successCB={successCB}
                      pluginProps={{
                        userType: 'candidate',
                      }}
                    />
                  </FormProvider>
                  <div className="divider" />
                  <div className="mb-4">
                    <button
                      id="buttons"
                      type="submit"
                      className="btn btn-warning p-0 ps-3 pe-3 input-sm"
                      style={{ float: 'right' }}
                      onClick={onSubmit}
                    >
                      <LoginOutlined
                        fontSize="small"
                        className="me-2"
                        style={{ marginTop: '-2px' }}
                      />
                      Forgot Password
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={{ size: 4 }}>
              <Steps />
            </Col>
          </Row>
        </Container>
      </div>
    </LoginNewStyle>
  )
})

export default CandidateSignOn
