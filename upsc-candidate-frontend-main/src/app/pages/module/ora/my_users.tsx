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

  const columnUICB = useCallback((args) => {
    if (args.colDef.field === 'resetpwd') {
      return (
        <Stack direction="row" spacing={2}>
          <Button
            className="m-2  mt-0"
            outline
            color="danger"
            onClick={handleResetPassword}
          >
            Reset Password
          </Button>
        </Stack>
      )
    }

    return args.valueFormatted
  }, [])

  const handleResetPassword = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
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
        columnUICB={columnUICB}
      />
    </FormProvider>
  )
})

export default my_users
