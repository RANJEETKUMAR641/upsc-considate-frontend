/**
 *
 * candidate_experience
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { dateValidation } from 'utils/formValidation'

const candidate_experience = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  const handleOnFormChange = useCallback(
    (values) => {
      dateValidation(values?.from_dt, values?.to_dt, 'to_dt', methods)
    },
    [dateValidation],
  )
  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="candidate_experience"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
        onFormChange={handleOnFormChange}
        pluginProps={{
          listInitData: {
            props,
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default candidate_experience
