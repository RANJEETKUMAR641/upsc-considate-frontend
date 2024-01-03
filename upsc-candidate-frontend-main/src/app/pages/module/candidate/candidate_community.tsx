/**
 *
 * candidate_community
 *
 */

import { memo, useCallback, useEffect, useState } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { get, includes, keys } from 'lodash'
import { hideByDiv, showByDiv } from 'utils/handleClass'
import { fieldValues, showHideSections } from 'app/Plugins/utils/commanHealper'

const CandidateCommunity = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const {
    formState: { errors },
    clearErrors,
    watch,
  } = methods
  const [fschema, setFSchema] = useState([])

  let values = methods.getValues()
  values = fieldValues(values)

  const onFormChange = useCallback((values, schema) => {
    setFSchema(schema)
  }, [])

  useEffect(() => {
    if (values?.community_code === undefined) {
      showHideSections({
        fschema,
        sectionids: ['community_info', 'community_iac'],
        type: 'hide',
      })
      return
    }
    const validCommunities = ['OBC', 'SC', 'ST']
    const validComm = ['GEN']
    if (includes(validCommunities, values?.community_code)) {
      showHideSections({
        fschema,
        sectionids: ['community_info'],
        type: 'show',
      })
    } else {
      showHideSections({
        fschema,
        sectionids: ['community_info'],
        type: 'hide',
      })
    }
    if (values?.creamy === undefined && values?.community_code === 'OBC') {
      showHideSections({
        fschema,
        sectionids: ['community_iac'],
        type: 'hide',
      })
    }
    if (
      includes(validComm, values?.community_code) ||
      (values?.community_code === 'OBC' && values.creamy === '1')
    ) {
      showHideSections({
        fschema,
        sectionids: ['community_iac'],
        type: 'hide',
      })
    } else {
      showHideSections({
        fschema,
        sectionids: ['community_iac'],
        type: 'show',
      })
    }
  }, [
    values.community_code,
    values.community_iac,
    values.creamy,
    values.community_info,
    watch('community_code'),
    watch('community_iac'),
    watch('creamy'),
    watch('community_info'),
  ])

  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId="candidate_community"
          list={false}
          showForm={true}
          methods={methods}
          onFormChange={onFormChange}
          pluginProps={{
            initData: props,
          }}
        />
      </FormProvider>
    </>
  )
})

export default CandidateCommunity
