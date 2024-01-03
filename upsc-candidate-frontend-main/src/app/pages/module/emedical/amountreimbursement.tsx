/**
 *
 * amount-reimbursement
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'
import { Stack } from '@mui/material'
import { Button } from 'reactstrap'

const Amountreimbursement = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const onFormChange = useCallback(() => {}, [])
  const beforeSubmitCB = () => {}

  const successCB = () => {}

  const columnUICB = useCallback((args) => {
    if (args.colDef.field === 'document') {
      return (
        <Stack direction="row" spacing={2}>
          <Button className="m-2  mt-0" outline color="primary">
            Document
          </Button>
        </Stack>
      )
    }

    if (args.colDef.field === 'preview') {
      return (
        <Stack direction="row" spacing={2}>
          <Button className="m-2  mt-0" outline color="primary">
            Preview
          </Button>
        </Stack>
      )
    }

    if (args.colDef.field === 'action') {
      return (
        <Stack direction="row" spacing={2}>
          <Button className="m-2  mt-0" outline color="primary">
            Return
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
        formId="amount_reimbursement"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={onFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
        columnUICB={columnUICB}
      />
    </FormProvider>
  )
})

export default Amountreimbursement
export { Amountreimbursement }
