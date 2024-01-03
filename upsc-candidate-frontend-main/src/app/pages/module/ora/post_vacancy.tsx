/**
 *
 * post_description
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { communityVacancyValidation } from 'utils/formValidation'

const PostModules = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const handleOnFormChange = useCallback(
    (values) => {
      communityVacancyValidation(values, methods)
    },
    [communityVacancyValidation],
  )

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="post_ora_filter"
        formId="post_vacancy"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
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

export default PostModules
