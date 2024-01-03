/**
 *
 * candidate_ph
 *
 */

import { memo, useCallback, useEffect, useState } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { isEqual, isEmpty, has } from 'lodash'
import { hideByDiv, showByDiv } from 'utils/handleClass'

const CandidateScribe = memo((props: any) => {
  const [schema, setFormSchema] = useState<any>([])
  const [sections, setSections] = useState<any>([])

  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const permValue = methods.watch('perm_or_mailsame')

  const onFormChange = useCallback((values, schema1) => {
    if (isEmpty(schema)) {
      setFormSchema(schema1?.sections)
    }
  }, [])

  useEffect(() => {
    if (isEqual(permValue, 'N')) {
      showByDiv(`my-sectionId-${schema?.[1]?.sectionid}`)
      setSections([schema?.[1]?.sectionid])
    } else {
      hideByDiv(`my-sectionId-${schema?.[1]?.sectionid}`)
      setSections([])
    }
  }, [permValue])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="candidate_address"
        list={false}
        showForm={true}
        methods={methods}
        onFormChange={onFormChange}
        pluginProps={{
          initData: has(props, 'module_id') ? props : {},
          sections: sections,
        }}
      />
    </FormProvider>
  )
})

export default CandidateScribe
