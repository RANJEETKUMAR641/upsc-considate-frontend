/**
 *
 * candidate_daf
 *
 */

import { memo } from 'react'
import { toNumber } from 'lodash'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

export const CandidateApplicationNAForm = memo(
  ({ formId, module_type, module_id }: any) => {
    const post_id = new URLSearchParams(window?.location?.search).get(
      'post_id',
    ) as string

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
          filterId=""
          formId={formId}
          list={['application_experience'].includes(formId)}
          showForm={true}
          methods={methods}
          successCB={successCB}
          pluginProps={{
            initData: {
              post_id: toNumber(post_id),
              module_id,
              module_type,
            },
            addPermission: true,
          }}
        />
      </FormProvider>
    )
  },
)
