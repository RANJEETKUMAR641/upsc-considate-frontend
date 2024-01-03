/**
 *
 * candidate_daf
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const CandidateAgeRelax = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="candidate_add_agerelax_filter"
        formId="candidate_add_agerelax"
        list={false}
        showForm={true}
        methods={methods}
        successCB={successCB}
        pluginProps={{
          initData: props,
        }}
      />
    </FormProvider>
  )
})

export default CandidateAgeRelax
