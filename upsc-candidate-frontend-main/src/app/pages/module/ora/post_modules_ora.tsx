/**
 *
 * PostModules
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const PostModulesORA = memo(() => {
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
        filterId="post_ora_filter"
        formId="post_modules_ora"
        showForm={true}
        list={true}
        methods={methods}
        pluginProps={{
          listInitData: {
            post_type: 'o',
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default PostModulesORA
