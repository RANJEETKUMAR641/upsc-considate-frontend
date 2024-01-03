import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const SocialEconomic = memo((props: any) => {
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
        formId="daf2_social_economic_info"
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

export default SocialEconomic
