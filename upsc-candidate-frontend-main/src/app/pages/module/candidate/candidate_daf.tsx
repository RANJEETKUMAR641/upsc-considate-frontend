/* eslint-disable */

import { memo, useCallback } from 'react'
import { has } from 'lodash'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { idValidation } from 'utils/formValidation'

const CandidateDaf = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const handleOnFormChange = useCallback(
    (values) => {
      if (values?.photo_id_no?.length >= 20) return
      else {
        idValidation(values, methods)
      }
    },
    [idValidation],
  )

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="candidate_daf"
        list={false}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        successCB={successCB}
        pluginProps={{
          initData: has(props, 'module_id') ? props : {},
        }}
      />
    </FormProvider>
  )
})

export default CandidateDaf
