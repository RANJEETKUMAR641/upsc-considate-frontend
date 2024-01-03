/* eslint-disable */

import { Suspense, useCallback, useEffect, useState } from 'react'

import { Col, Row, Container } from 'reactstrap'
import { isEmpty } from 'lodash'
import { FormProvider, useForm } from 'react-hook-form'
import { useGetLogin } from './Mutation/useGetLogin'
import { CircularProgress, Typography } from '@mui/material'
import LoginOutlined from '@mui/icons-material/LoginOutlined'
import { LABELS } from 'utils/constants'
import { OverlayLoader } from 'app/components/OverlayLoader'

import Features from './components/Feature'
import CandOtrFeature from './components/CandOtrFeature'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { notify } from 'utils/notify'

import { LoginNewStyle } from './pageStyles/LoginNew'

import Logo from 'app/assets/images/gov_Logo_white.png'
import { removeItem } from 'utils/storage'
import { showByDiv } from 'utils/handleClass'
import { candidateData } from 'app/assets/json/candidate'
import ImprtantLink from './components/ImportantLink'

let data: any = candidateData

interface Column {
  formid: string
  sectionid: string | null
  field: string
}

interface Section {
  columns: Column[]
}

interface FormData {
  formid: string
  sections: Section[]
}
function Home() {
  const [arr, setArr] = useState<any>([])
  const [type, setType] = useState<string>('')
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const { isLoading, mutate, res } = useGetLogin()
  const filterColumns = (columns: Column[], excludedFields: string[]) =>
    columns.filter((column) => !excludedFields.includes(column.field))

  useEffect(() => {
    setArr(data)

    const modifyData = (excludedFields: string[]) =>
      data.map((item) => {
        if (item.sections && item.sections.length > 0) {
          const modifiedSections = item.sections.map((section) => ({
            ...section,
            columns: filterColumns(section.columns, excludedFields),
          }))

          return { ...item, sections: modifiedSections }
        }
        return item
      })
    data = modifyData(['email', 'password', 'registrationid', 'mobile'])
  }, [])
  // (type, 'typeeeee')

  if (type === 'registrationid') {
    let modifiedData = arr.map((item) => {
      if (item.sections && item.sections.length > 0) {
        const modifiedSections = item.sections.map((section) => {
          if (section.columns && section.columns.length > 0) {
            const modifiedColumns = section.columns.filter(
              (column) => column.field !== 'mobile' && column.field !== 'email',
            )
            return { ...section, columns: modifiedColumns }
          }
          return section
        })

        return { ...item, sections: modifiedSections }
      }
      return item
    })
    data = modifiedData
  }
  if (type === 'email') {
    let modifiedData = arr.map((item) => {
      if (item.sections && item.sections.length > 0) {
        const modifiedSections = item.sections.map((section) => {
          if (section.columns && section.columns.length > 0) {
            const modifiedColumns = section.columns.filter(
              (column) =>
                column.field !== 'password' &&
                column.field !== 'registrationid' &&
                column.field !== 'mobile',
            )

            return { ...section, columns: modifiedColumns }
          }
          return section
        })
        return { ...item, sections: modifiedSections }
      }
      return item
    })
    data = modifiedData
  }
  if (type === 'mobile') {
    let modifiedData = arr.map((item) => {
      if (item.sections && item.sections.length > 0) {
        const modifiedSections = item.sections.map((section) => {
          if (section.columns && section.columns.length > 0) {
            const modifiedColumns = section.columns.filter(
              (column) =>
                column.field !== 'password' &&
                column.field !== 'registrationid' &&
                column.field !== 'email',
            )

            return { ...section, columns: modifiedColumns }
          }
          return section
        })
        return { ...item, sections: modifiedSections }
      }
      return item
    })
    data = modifiedData
  }
  const { handleSubmit } = methods
  useEffect(() => {
    if (type === 'registrationid') {
      showByDiv('buttons')
    }
  }, [type])

  // Updates unique identifier text and icon
  const handleDynamicUpdate = (e) => {
    const regexEmail = /^\S+@\S+\.\S+$/
    // Matches: 1234567890, 123-456-7890, 123 456 7890
    const regexPhone = /^(\d{10}|\d{3}[-\s]\d{3}[-\s]\d{4})$/
    // Matches exactly 15-digit input
    const regexOtrId = /^\d{15}$/

    const inputText = e

    if (regexEmail.test(inputText?.toString())) {
      return 'email'
    }

    if (regexPhone.test(inputText?.toString())) {
      return 'mobile'
    }

    if (regexOtrId.test(inputText?.toString())) {
      return 'registrationid'
    }

    return ''
  }

  const onSubmit = useCallback(
    (data: any) => {
      let payload = {}

      delete data?.login_type

      for (const [key, value] of Object.entries(data)) {
        if (!isEmpty(value)) {
          payload = Object.assign(payload, { [key]: value })
        }
      }

      payload['usertype'] = 'candidate'

      mutate(payload as any)
    },
    [methods, handleDynamicUpdate],
  )

  useEffect(() => {
    res?.statusCode?.statusCode === 400 && notify(res.message, 'error')
  }, [res])

  useEffect(() => removeItem('token'), [])

  const { mutate: mutateCaptcha } = useMutation({
    mutationFn: (payload) => requestPayload(payload, 'api/service'),
  })

  useEffect(() => {
    const payload = {
      action: 'generate',
      section: 'captcha',
      path: 'public',
    }

    mutateCaptcha({ ...payload } as any)
  }, [])
  const handleOnFormChange = useCallback((values) => {
    setType(values?.login_type?.value)
  }, [])

  return (
    <LoginNewStyle>
      <Suspense fallback={<OverlayLoader open className="" />}>
        <Container fluid>
          <Row>
            <Col sm={{ size: 4, order: 2 }}>
              <div className="mb-3">
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
                        formId="candidate_login"
                        list={false}
                        showForm={true}
                        methods={methods}
                        schemaData={data?.[0]}
                        onFormChange={handleOnFormChange}
                      />
                    </FormProvider>
                    <div className="divider" />
                    <div className="mb-3">
                      <a
                        href="/candidate/otr"
                        className="btn-lg btn btn-link text-warning recoverbtn p-0"
                        tabIndex={9}
                      >
                        <strong>One Time Registration (OTR)</strong>
                      </a>
                      {/* <span id="buttons" className="d-flex flex-row justify-content-end"> */}
                      <button
                        id="buttons"
                        type="submit"
                        className="btn btn-warning p-0 ps-3 pe-3 input-sm"
                        style={{ float: 'right' }}
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
                      {/* </span> */}
                    </div>
                    <div className="divider" />
                    <a
                      href="/candidate/forgot-password"
                      className="btn-lg btn btn-link text-warning recoverbtn p-0"
                    >
                      <strong>Forgot Password</strong>
                    </a>
                  </form>
                </div>
              </div>
            </Col>
            <Col sm={{ size: 2, order: 1 }} className="mb-3">
              {/* <ImprtantLink /> */}
            </Col>

            <Col sm={{ size: 5, order: 3 }}>
              <Features />
            </Col>
          </Row>
        </Container>
      </Suspense>
    </LoginNewStyle>
  )
}

export default Home
