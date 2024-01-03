import { memo, useState } from 'react'
import { useIFCFilters } from './mutations/useFormData'
import { FormProvider, useForm } from 'react-hook-form'
import { FormBuilder } from 'app/Plugins/FormBuilder'

interface Props {}

const CandidateCustomForms = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  const [setInitData] = useState<any>({})

  const { mutate: filterMutate } = useIFCFilters()
  const handleBeforeSubmit = (data) => {
    const payload = {
      action: 'schema',
      formId: data?.formid?.value,
    }
    filterMutate({ ...payload } as any)

    setInitData({ formId: data?.formid?.value })
    return { action: true, data: [] }
  }
  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId=""
          list={false}
          showForm={false}
          showSection={false}
          beforeSubmitCB={handleBeforeSubmit}
        />
      </FormProvider>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId="pm_custom_template_filter"
          list={false}
          showForm={true}
          methods={methods}
          successCB={successCB}
        />
      </FormProvider>
      {/* {map(formData, (form) => (
        <FormBuilder
          filterId=""
          formId={form?.formid}
          list={form?.formview?.includes('table-form')}
          showForm={true}
          showSection={true}
          initData={{ ...ifcInitData }}
          beforeSubmitCB={handleBeforeSubmitOfCustomModel}
        />
      ))} */}
    </>
  )
})

export default CandidateCustomForms
