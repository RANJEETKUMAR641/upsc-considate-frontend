/**
 *
 * demo form
 *
 */

import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'
import { Stack } from '@mui/material'

const CreateFormColumn = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const columnUICB = useCallback((args) => {
    if (args.colDef.field === 'changed_data') {
      return (
        <Stack direction="row" spacing={2} width={200}>
          <div
            dangerouslySetInnerHTML={{ __html: args.value }}
            style={{ overflow: 'auto' }}
          />
        </Stack>
      )
    }

    return args.valueFormatted
  }, [])

  // registation id form based readonly -> otr_main
  // image view
  // operator -> otr_main

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="approver_change_request_filter"
        formId="approver_change_request"
        list={true}
        showForm={false}
        methods={methods}
        pluginProps={{
          addPermission: false,
        }}
        columnUICB={columnUICB}
      />
    </FormProvider>
  )
})

export default CreateFormColumn
