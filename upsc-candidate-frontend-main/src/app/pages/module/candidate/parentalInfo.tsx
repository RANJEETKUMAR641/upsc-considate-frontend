import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const ParentalInfo = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const handleOnFormChange = useCallback(() => {}, [])

  const beforeSubmitCB = () => {}

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="parentalinfo"
        list={false}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
        pluginProps={{
          initData: props,
        }}
      />
    </FormProvider>
  )
})

export default ParentalInfo
