/* eslint-disable */

import { Button, FormFeedback } from 'reactstrap'
import { isEmpty, isEqual, toString } from 'lodash'
import { Controller, useFormContext } from 'react-hook-form'
import { notify } from 'utils/notify'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import { hideByDiv, showByDiv } from 'utils/handleClass'
import VerifiedIcon from '@mui/icons-material/Verified'
import { useRef, useCallback, useState, useEffect } from 'react'
import { IMaskInput } from 'react-imask'
import { PATTERN } from 'app/Plugins/utils/pluginConstants'
import { getPattern } from 'app/Plugins/utils/pluginHelper'

export const VerifyInput = (props: any) => {
  const methods = useFormContext()
  const { formState, setValue } = useFormContext()

  const { errors } = formState

  const {
    mutate: mutateSendOtp,
    data: otpData,
    error: onError,
  } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/service'),
  }) as any

  const {
    mutate: mutateVerifyOtp,
    data: verifyData,
    error: isError,
  } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/service'),
  })

  const f = props
  const [showResend, setShowResend] = useState(false)
  const [mobileMsg, setMobileMsg] = useState(false)
  const [emailMsg, setEmailMsg] = useState(false)
  const [emailOtp, setEmailOtp] = useState()
  const [mobileOtp, setMobileOtp] = useState()
  const [showSendDisable, setShowSendDisable] = useState(true)
  const [showTimer, setShowTimer] = useState(false)
  const [timer, setTimer] = useState(180)
  const [verifyDisable, setVerifyDisable] = useState(false)
  const timerRef: any = useRef(null)
  const [verifyMessage, setVerifyMessage] = useState(false)
  const [emailId, setEmailId] = useState()
  const [mobile, setMobile] = useState()
  useEffect(() => {
    hideByDiv('buttons')
  }, [])

  const handleSendOtp = async () => {
    setValue('verifyOtpMobile', '')
    setValue('verifyOtp', '')

    if (showResend) {
      handleResend()
    }
    const payload = {
      action: 'send',
      section: 'otp',
      path: 'notification',
      recpeintId:
        props.field === 'email'
          ? methods.getValues()?.email
          : methods.getValues()?.mobile,
      params: {
        userType: window.location.href.includes('candidate')
          ? 'candidate'
          : 'NA',
      },
      requestType: props?.formid,
    }
    if (props.field === 'mobile') {
      setMobile(methods.getValues()?.mobile)
      mutateSendOtp({ ...payload } as any)
    }
    if (props.field === 'email') {
      setEmailId(methods.getValues()?.email)
      mutateSendOtp({ ...payload } as any)
    }
    setShowSendDisable(true)
    // Start the timer countdown
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)
  }
  useEffect(() => {
    setValue('mobile', '')
    setValue('email', '')
  }, [methods?.getValues().login_type?.value])
  useEffect(() => {
    if (!isEmpty(otpData)) {
      const message = otpData?.[0]?.message
      const resOtp = otpData?.[0]?.otp
      const expire_in_secs = otpData?.[0]?.expire_in_secs

      if (props.field === 'email' && resOtp !== undefined) {
        setEmailOtp(resOtp)
        setEmailMsg(true)
        setVerifyDisable(true)
      }
      if (props.field === 'mobile' && resOtp !== undefined) {
        setMobileOtp(resOtp)
        setMobileMsg(true)
        setVerifyDisable(true)
      }
      if (expire_in_secs !== undefined && expire_in_secs !== null) {
        {
          notify(message, 'success')
          setTimer(expire_in_secs)
          setShowTimer(true)
          setVerifyDisable(true)
        }
      }
      if (message && expire_in_secs === undefined) {
        setVerifyDisable(false)
        setShowTimer(false)
        notify(message, 'success')
        props.field === 'mobile' ? setMobileMsg(false) : setEmailMsg(false)
      }
    }
  }, [otpData])

  const handleVerifyOtp = async () => {
    const payload = {
      action: 'verify',
      section: 'otp',
      path: 'notification',
      otp:
        props.field === 'email'
          ? methods.getValues()?.verifyOtp
          : methods.getValues()?.verifyOtpMobile,
      recpeintid:
        props.field === 'email'
          ? methods.getValues()?.email
          : methods.getValues()?.mobile,
      requestType: props?.formid,
    }
    mutateVerifyOtp({ ...payload } as any)
  }

  useEffect(() => {
    if (isError) {
      notify('Invalid otp', 'error')
    }
  }, [isError])
  const handleRequired = useCallback(() => {
    if (isEqual(props.required, 1)) {
      return 'Required'
    }

    return false
  }, [])
  const handleResend = () => {
    setTimer(180)
    setShowResend(false)
    setShowSendDisable(false)
  }

  useEffect(() => {
    if (timer === 0) {
      setShowTimer(false)
      setShowSendDisable(false)
      clearInterval(timerRef.current)
      setTimer(180)
      setShowResend(true)
      setVerifyDisable(false)
      setEmailMsg(false)
      setMobileMsg(false)
    }
  }, [timer])
  useEffect(() => {
    if (props.field === 'email') {
      const emailValue = toString(methods.getValues()?.email)
      emailValue.toLowerCase()
      const isValidEmail = PATTERN.EMAIL.test(emailValue)
      setShowSendDisable(!isValidEmail)
    }
  }, [methods.getValues()?.email])

  useEffect(() => {
    if (props.field === 'mobile') {
      const phone = toString(methods.getValues()?.mobile)
      const isValidNo = PATTERN.MOBILE.test(phone)
      setShowSendDisable(!isValidNo)
    }
  }, [methods.getValues()?.mobile])

  const invalid =
    props?.touched?.[props?.field] && Boolean(props?.errors?.[props?.field])
  useEffect(() => {
    if (verifyData?.[0]?.message) {
      const message = verifyData?.[0]?.message

      if (message === 'OTP VERIFIED') {
        setVerifyDisable(true)
        setVerifyMessage(true)
        showByDiv('buttons')
        showByDiv('my-colId-password')
      }

      if (message !== 'OTP VERIFIED') {
        notify(message, 'error')
        setShowTimer(true)
      }
    }
  }, [verifyData])

  useEffect(() => {
    if (onError) {
      const message = onError?.response?.data?.data?.message
      setTimer(1)
      setShowTimer(false)
      notify(message, 'error')
    }
  }, [onError])

  return (
    <div className={`mb-1 my-input-${props?.field}`} key={props.title}>
      {verifyMessage ? (
        <>
          <div
            className={` col${verifyDisable ? '-md-12' : ''}`}
            style={{
              color: 'var(--bs-success)',
              fontWeight: 700,
              border: '1px solid #f2f2f2',
              minHeight: 24,
            }}
          >
            <VerifiedIcon className="me-2" />{' '}
            <span style={{ color: 'var(--bs-dark' }}>
              {props.field === 'mobile' ? mobile : emailId}
            </span>{' '}
            Verified
          </div>
        </>
      ) : (
        <div className="row">
          <div className={`col${verifyDisable ? '-md-6' : ''}`}>
            <div className="input-group mb-3">
              <Controller
                name={props.field}
                control={props.control}
                render={({ field }) => (
                  <IMaskInput
                    type={props?.type}
                    id={props?.title}
                    autoComplete="off"
                    placeholder={props?.placeholder}
                    readOnly={props?.readonly}
                    valid={field.value}
                    className={`input-sm form-control my-input-${
                      props?.field
                    } ${
                      Boolean(errors?.[props?.field]) ? 'is-invalid-mail' : ''
                    } `}
                    {...props?.addattrs}
                    {...field}
                    onCopy={(e) => {
                      import.meta.env.VITE_REACT_APP_IS_PRODUCTION === 'Y' &&
                        e.preventDefault()
                    }}
                    onPaste={(e) => {
                      import.meta.env.VITE_REACT_APP_IS_PRODUCTION === 'Y' &&
                        e.preventDefault()
                    }}
                    mask={
                      (methods?.getValues().login_type?.value === 'mobile' ||
                        props?.type === 'mobile') &&
                      PATTERN?.MOBILE
                    }
                    onInput={(e: any) => {
                      if (methods?.getValues().login_type?.value === 'mobile') {
                        e.target.value = e?.target?.value?.replace(/\D/g, '')
                      }
                    }}
                  />
                )}
                rules={{
                  required: handleRequired(),
                  pattern: getPattern(props),
                }}
              />

              <Button
                color="warning"
                onClick={handleSendOtp}
                disabled={showSendDisable}
                className="input-sm"
              >
                <strong>{showResend ? 'Resend OTP' : 'Send OTP'}</strong>
              </Button>

              {errors?.[props?.field] && (
                <FormFeedback
                  aria-errormessage={`error_${props.field}_required`}
                >
                  <span>{errors[props.field]?.message as string}</span>
                </FormFeedback>
              )}
            </div>
            {props?.field === 'email' && emailMsg && (
              <small>
                <div className="hintHeading">
                  Please use as this {emailOtp} OTP
                </div>
              </small>
            )}
            {props?.field === 'mobile' && mobileMsg && (
              <small>
                <div className="hintHeading">
                  Please use this {mobileOtp} OTP
                </div>
              </small>
            )}
          </div>

          {!showResend && verifyDisable && (
            <div className={`col${verifyDisable ? '-md-6' : ''}`}>
              <div className="input-group mb-3">
                <div style={{ display: 'flex' }}>
                  <Controller
                    name={
                      props.field === 'mobile' ? 'verifyOtpMobile' : 'verifyOtp'
                    }
                    control={props.control}
                    render={({ field }) => (
                      <IMaskInput
                        id={
                          f?.field === 'mobile'
                            ? 'verifyOtpMobile'
                            : 'verifyOtp'
                        }
                        mask={/^[1-9]\d{0,5}$/}
                        placeholder={f?.placeholder}
                        readOnly={f?.readOnly}
                        className={`input-sm form-control my-input-${
                          props?.field
                        } ${invalid ? 'is-invalid-mail' : ''} `}
                        {...field}
                        type="text"
                        // pattern="[0-9]{6,6}"
                        // maxLength={6}

                        onCopy={(e) => {
                          import.meta.env.VITE_REACT_APP_IS_PRODUCTION ===
                            'Y' && e.preventDefault()
                        }}
                        onPaste={(e) => {
                          import.meta.env.VITE_REACT_APP_IS_PRODUCTION ===
                            'Y' && e.preventDefault()
                        }}
                      />
                    )}
                    rules={{
                      required: handleRequired(),
                    }}
                    shouldUnregister={false}
                  />
                  <Button
                    color="primary"
                    onClick={handleVerifyOtp}
                    className="input-sm"
                  >
                    Verify OTP
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Display timer countdown */}
      {showTimer && timer >= 0 && !verifyMessage && (
        <div>{`${Math.floor(timer / 60)}:${(timer % 60)
          .toString()
          .padStart(2, '0')}`}</div>
      )}
    </div>
  )
}
