/**
 *
 * otr_form
 *
 */

import { memo, useCallback, useEffect } from 'react'
import { Box } from '@mui/material'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'
import { hideByDiv } from 'utils/handleClass'

import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const otr_form = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const { mutate, data, isLoading } = useMutation({
    mutationFn: ({ data }: any) => {
      const payload = {
        path: 'formio/candidate',
        section: 'otr_main',
        action: 'locked',
        data: {},
      }
      return requestPayload(payload, '/api/service')
    },
  }) as any

  useEffect(() => {
    mutate({} as any)
  }, [])

  const ele = document.getElementById('buttons')

  useEffect(() => {
    hideByDiv('my-colId-captcha')
  }, [ele])

  useEffect(() => {
    if (data?.locked) {
      hideByDiv('buttons')
    }
  }, [ele])

  const onFormChange = useCallback(() => {}, [])

  const beforeSubmitCB = () => {}

  const successCB = () => {}

  return (
    <Box sx={{ background: data?.locked ? '#fffff6' : '#fff' }}>
      <FormProvider {...methods}>
        <Stack sx={{ width: '100%' }} spacing={2}>
          {data?.locked && (
            <Alert severity="info">
              OTR form is locked, if you want any change please use change
              request form
            </Alert>
          )}
          <FormBuilder
            filterId=""
            formId="otr_main"
            list={false}
            showForm={true}
            methods={methods}
            disabled={data?.locked || false}
            showSection={true}
            onFormChange={onFormChange}
            beforeSubmitCB={beforeSubmitCB}
            successCB={successCB}
            pluginProps={{
              listInitData: {
                isAuthenticatedUser: true,
              },
              addPermission: false,
            }}
          />
        </Stack>
      </FormProvider>
    </Box>
  )
})

export default otr_form
export { otr_form }
