import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'
const ChangeRequest = memo(() => {
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

  const handleChangeData = (rowData) => {
    const payload = {
      ...rowData,
      ...rowData?.changed_data,
    }

    for (const [key, value] of Object.entries(payload)) {
      methods.setValue(key, value, { shouldTouch: true })
    }
  }

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="candidate_change_request_filter"
        formId="candidate_change_request"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
        pluginProps={{
          handleChangeData,
          isCustomGet: true,
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default ChangeRequest
