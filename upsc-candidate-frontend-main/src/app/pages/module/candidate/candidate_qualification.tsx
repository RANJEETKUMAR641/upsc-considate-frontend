/**
 *
 * candidate_qualification
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const CandidateQualification = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  const formDateValidation = useCallback((data) => {
    const { course_from, course_to, result_date, degree_date } = data

    const courseFrom: any = splitDate(course_from)
    const courseTo: any = splitDate(course_to)
    const courseResult: any = splitDate(result_date)
    const courseDegree: any = splitDate(degree_date)

    if (courseFrom !== undefined && courseTo !== undefined) {
      if (courseFrom.getTime() >= courseTo.getTime()) {
        methods.setError('course_from', {
          message: 'course from date should be gretter than course to date',
        })
      } else if (courseFrom.getTime() <= courseTo.getTime()) {
        methods.clearErrors('course_from')
      }
    }

    if (courseTo !== undefined && courseResult !== undefined) {
      if (courseTo.getTime() >= courseResult.getTime()) {
        methods.setError('course_to', {
          message: 'course To date should be greater than result date',
        })
      } else if (courseTo.getTime() <= courseResult.getTime()) {
        methods.clearErrors('course_to')
      }
    }

    if (courseResult !== undefined && courseDegree !== undefined) {
      if (courseResult.getTime() >= courseDegree.getTime()) {
        methods.setError('result_date', {
          message: 'result date should be greater than degree date',
        })
      } else if (courseResult.getTime() <= courseDegree.getTime()) {
        methods.clearErrors('result_date')
      }
    }
  }, [])

  const splitDate = useCallback((date) => {
    const issueParts = date?.split('/')
    const day = parseInt(issueParts?.[0], 10)
    const month = parseInt(issueParts?.[1], 10) - 1
    const year = parseInt(issueParts?.[2], 10)
    return new Date(year, month, day)
  }, [])

  const handleOnFormChange = useCallback((values) => {
    formDateValidation(values)
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="candidate_qualification"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
        onFormChange={handleOnFormChange}
        pluginProps={{
          initData: props,
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default CandidateQualification
