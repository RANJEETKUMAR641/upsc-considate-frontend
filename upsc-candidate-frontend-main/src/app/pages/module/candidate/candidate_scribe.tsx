/**
 *
 * candidate_ph
 *
 */

import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { get, isEqual, keys, map, forEach } from 'lodash'
import { hideByDiv, showByDiv } from 'utils/handleClass'

const CandidateScribe = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  const {
    formState: { errors },
    clearErrors,
  } = methods

  const onFormChange = useCallback((values, sections) => {
    const checkValues = get(
      values,
      'paormasame.value',
      get(values, 'paormasame'),
    )

    if (isEqual(checkValues, 'N')) {
      showByDiv(`my-sectionId-${sections?.[2]?.sectionid}`)
    } else {
      hideByDiv(`my-sectionId-${sections?.[2]?.sectionid}`)
      clearErrors(keys(errors))
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="candidate_ph_scribe_detail"
        list={false}
        showForm={true}
        methods={methods}
        successCB={successCB}
        onFormChange={onFormChange}
        pluginProps={{
          initData: props,
        }}
      />
    </FormProvider>
  )
})

export default CandidateScribe
