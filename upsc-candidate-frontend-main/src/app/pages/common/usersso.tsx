/* eslint-disable */

import { memo, useCallback, useEffect, useState, Fragment } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import { LoginNewStyle } from './pageStyles/LoginNew'
import { CircularProgress, Typography } from '@mui/material'
import Logo from 'app/assets/images/gov_Logo_white.png'
import { LABELS } from 'utils/constants'

const CandidateSignOn = memo((e) => {
  const [userData, SetUserDate] = useState({ loginid: '' })
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const { mutate: candidateLoginSSO, data } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/formio'),
  })

  useEffect(() => {
    const payload = {
      formId: 'forgotpassword',
      action: 'schema',
    }
    candidateLoginSSO({ ...payload } as any)
  }, [])
  const hendlePassword = (values) => {
    if (values.confirm_password !== '' && values.confirm_password !== undefined)
      if (values?.password !== values.confirm_password) {
        methods.setError('confirm_password', {
          message: 'Password and Confirm Password did not match',
        })
      }
  }
  const handleOnFormChange = useCallback((values) => {
    // SetUserDate({[values]:val})

    hendlePassword(values)
  }, [])

  const successCB = () => {}

  return (
    <LoginNewStyle>
      <Fragment>
        <div className="loginContainer">
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
              />
            </FormProvider>
          </div>
        </div>
      </Fragment>
    </LoginNewStyle>
  )
})

export default CandidateSignOn
