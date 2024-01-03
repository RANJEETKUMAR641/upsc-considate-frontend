/**
 *
 * demo form
 *
 */

import { memo } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const IfcForm = memo(({ form, schemas }: any) => {
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
        key={form?.formid}
        methods={methods}
        formId={form.formid}
        showForm={true}
        list={form.formview?.includes('table-form')}
        schemas={schemas}
      />
    </FormProvider>
  )
})

export default IfcForm
