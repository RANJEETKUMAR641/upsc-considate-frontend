/**
 *
 * Create
 *
 */
import { memo } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormBuilder } from 'app/Plugins/FormBuilder'

const CreateOtrData = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="otr_form"
        list={false}
        showForm={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default CreateOtrData
