/* eslint-disable */

import { Fragment, useCallback, useEffect, useState } from 'react'
import { isEmpty, lowerCase, isEqual, filter } from 'lodash'
import { CardTitle, Container, Col, Row } from 'reactstrap'

import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import styled from 'styled-components'
import { FormProvider, useForm } from 'react-hook-form'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { VALIDATIONS } from 'utils/constants'
import dayjs from 'dayjs'

import { clear } from 'utils/storage'
import { hideByDiv } from 'utils/handleClass'
import { SignUpStyle } from './pageStyles/SignUp.style'
import {
  fieldValues,
  getSchemaColumns,
  myValue,
  myWatch,
  setSchemaColumn,
  showHideSections,
} from 'app/Plugins/utils/commanHealper'
import {
  capitalizeValue,
  compareField,
  parttenValidate,
} from 'app/Plugins/utils/commanValidation'

export default function Signup() {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const [isSuccess, setIsSuccess] = useState('')
  const [schema, setSchema] = useState<any>({})

  let { mutate: candidateOtr, data } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/formio'),
  }) as any

  useEffect(() => {
    hideByDiv('buttons')
    clear()
    const payload = {
      formId: 'otr_form',
      action: 'schema',
    }

    candidateOtr({ ...payload } as any, {
      onSuccess: (fetchData) => {
        setSchema({ ...fetchData?.[0], orgSchema: fetchData?.[0] })
      },
    })
  }, [])

  let values = methods.getValues()
  values = fieldValues(values)
  let cols = getSchemaColumns({ fschema: schema }) as any
  const securityQuestion = cols?.securityquestionid1?.options?.data?.map(
    (opt) => opt.value,
  )
  const validateAge = (inputDate) => {
    const min_dt = dayjs()
      .subtract(VALIDATIONS.otr.min_age, 'year')
      .format('YYYY-MM-DD')
    const max_dt = dayjs()
      .subtract(VALIDATIONS.otr.max_age, 'year')
      .format('YYYY-MM-DD')

    if (inputDate !== undefined && inputDate !== '') {
      const idt = dayjs(inputDate, 'DD/MM/YYYY').format('YYYY-MM-DD')
      if (idt > min_dt || idt < max_dt) {
        methods.setError('dob', {
          type: 'custom',
          message: `Your Min Age:${VALIDATIONS?.otr?.min_age} years ${dayjs(
            min_dt,
          ).format('DD/MM/YYYY')}, Max Age:${
            VALIDATIONS?.otr?.max_age
          } years ${dayjs(max_dt).format('DD/MM/YYYY')}`,
        })
      } else {
        methods.clearErrors('dob')
      }
    }
  }
  // security Options
  const setSecurityOptions = (field1, field2) => {
    let column = getSchemaColumns({
      fschema: schema,
      field: field2,
      schematype: 'org',
    }) as any
    const newopts = column?.options?.data?.filter((opt) => {
      return opt.value !== values?.[field1]
    })
    column = { ...column, options: { data: newopts } }
    setSchema(setSchemaColumn(schema, field2, column))
  }

  // compare names

  useEffect(() => {
    if (myValue(schema) === '') return
    let fields = [
      'candidate_name',
      'father_name',
      'mother_name',
      'changed_name',
    ]

    if (Object.keys(schema).length > 0) {
      if (isEqual(lowerCase(myValue(values?.single_parent)), 'm'))
        fields = filter(fields, (item) => item !== 'father_name')
      if (isEqual(lowerCase(myValue(values?.single_parent)), 'f'))
        fields = filter(fields, (item) => item !== 'mother_name')
      if (isEqual(myValue(values?.birthcert_samename), '0')) {
        fields = filter(fields, (item) => item !== 'changed_name')
      }
      for (let field of fields) {
        const _fields = filter(fields, (item) => item !== field)
        compareField({ field, values, fields: _fields, cols }, methods)
      }
    }
  }, myWatch(methods, ['single_parent', 'birthcert_samename', 'candidate_name', 'father_name', 'mother_name', 'changed_name']))

  // validate input

  useEffect(() => {
    parttenValidate(
      {
        cols,
        values,
        pattern: /^[A-Za-z0-9\s]+$/,
        field: 'securityanswer1',
        message: 'Please Enter Alphabnumeric',
      },
      methods,
    )
    parttenValidate(
      {
        cols,
        values,
        pattern: /^[A-Za-z0-9\s]+$/,
        field: 'securityanswer2',
        message: 'Please Enter Alphabnumeric',
      },
      methods,
    )
  }, myWatch(methods, ['securityanswer1', 'securityanswer2']))

  // input age validation
  useEffect(() => {
    validateAge(values.dob)
  }, [values.dob, validateAge])

  useEffect(() => {
    capitalizeValue(values.candidate_name, 'candidate_name', methods)
  }, myWatch(methods, ['candidate_name']))

  useEffect(() => {
    capitalizeValue(values.changed_name, 'changed_name', methods)
  }, myWatch(methods, ['changed_name']))

  useEffect(() => {
    capitalizeValue(values.father_name, 'father_name', methods)
  }, myWatch(methods, ['father_name']))

  useEffect(() => {
    capitalizeValue(values.mother_name, 'mother_name', methods)
  }, myWatch(methods, ['mother_name']))

  // question 1 and question 2

  useEffect(() => {
    setSecurityOptions('securityquestionid1', 'securityquestionid2')
  }, [methods.watch('securityquestionid1')])

  useEffect(() => {
    setSecurityOptions('securityquestionid2', 'securityquestionid1')
  }, [methods.watch('securityquestionid2')])

  // single parents show hide
  useEffect(() => {
    let data = {} as any

    let showSections = ['father_name', 'mother_name']
    let hideSections = [] as any
    switch (lowerCase(values.single_parent)) {
      case 'm':
        showSections = ['mother_name']
        hideSections = ['father_name']
        break
      case 'f':
        showSections = ['father_name']
        hideSections = ['mother_name']
        break
      default:
        showSections = ['father_name', 'mother_name']
        hideSections = []
    }
    if (showSections.length > 0) {
      data = showHideSections({
        fschema: schema,
        sectionids: showSections,
        type: 'show',
      })
    }
    if (hideSections.length > 0) {
      data = showHideSections({
        fschema: schema,
        sectionids: hideSections,
        type: 'hide',
      })
    }

    setSchema(data)
  }, [values?.single_parent])

  const successCB = useCallback((args) => {
    if (!isEmpty(args)) {
      setIsSuccess(args?.[0]?.registationId)
    }
  }, [])

  const userMinDate = () => {
    return dayjs().subtract(VALIDATIONS.otr.min_age, 'year')
  }
  const userMaxDate = () => {
    return dayjs().subtract(VALIDATIONS.otr.max_age, 'year')
  }

  return (
    <Fragment>
      <Div>
        <SignUpStyle>
          <Container fluid className="p-sm-0 pe-sm-2">
            <Row>
              <Col sm={{ size: 12, order: 1 }} className="mb-3">
                <Fragment>
                  {!isEmpty(isSuccess) ? (
                    <CardTitle
                      style={{
                        textAlign: 'center',
                        textTransform: 'capitalize',
                      }}
                    >
                      {isSuccess}
                    </CardTitle>
                  ) : (
                    <FormProvider {...methods}>
                      <div
                        className="bg-white"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.12)' }}
                      >
                        <FormBuilder
                          filterId=""
                          formId="otr_form"
                          list={false}
                          showForm={true}
                          methods={methods}
                          isPublicForm
                          showSection
                          schemaData={schema}
                          successCB={successCB}
                          pluginProps={{
                            dob: {
                              minDate: userMaxDate(),
                              maxDate: userMinDate(),
                            },
                          }}
                        />
                      </div>
                    </FormProvider>
                  )}
                </Fragment>
              </Col>
              {/* <Col sm={{ size: 4, order: 2 }}>
                <CandOtrFeature />
              </Col> */}
            </Row>
          </Container>
        </SignUpStyle>
      </Div>
    </Fragment>
  )
}
const Div = styled.div`
  .fixed-header .app-header {
    z-index: 99;
    background: #fff;
  }
`
