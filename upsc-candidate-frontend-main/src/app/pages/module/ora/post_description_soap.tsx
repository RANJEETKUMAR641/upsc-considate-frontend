/**
 *
 * post_description
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const PostModules = memo(() => {
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
        filterId="post_soap_filter"
        formId="post_description"
        list={false}
        showForm={true}
        methods={methods}
        pluginProps={{
          listInitData: {
            post_type: 's',
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default PostModules
