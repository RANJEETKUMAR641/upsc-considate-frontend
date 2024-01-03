/**
 *
 * Create
 *
 */

import { memo, useCallback } from 'react'

import { Button } from 'reactstrap'
import Stack from '@mui/material/Stack'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const my_users = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  const beforeSubmitCB = () => {
    return { rc: true, data: [] }
  }

  const columnUICB = useCallback((args) => {
    if (args.colDef.field === 'resetpwd') {
      return (
        <Stack direction="row" spacing={2}>
          <Button className="m-2  mt-0" outline color="danger">
            Reset Password
          </Button>
        </Stack>
      )
    }

    return args.valueFormatted
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="my_users"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
        beforeSubmitCB={beforeSubmitCB}
        columnUICB={columnUICB}
      />
    </FormProvider>
  )
})

export default my_users
