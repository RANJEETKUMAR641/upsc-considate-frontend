/**
 *
 * Appointment-Calendar
 *
 */

import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'
import { hideByDiv, showByDiv } from 'utils/handleClass'
import { get, isEqual } from 'lodash'

const Reports = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const onFormChange = useCallback((values, sections) => {
    const checkValues = get(values, 'status.value')

    if (isEqual(checkValues, '1')) {
      showByDiv(`my-sectionId-${sections?.[1]?.sectionid}`)
      hideByDiv(`my-sectionId-${sections?.[2]?.sectionid}`)
    } else if (isEqual(checkValues, '0')) {
      showByDiv(`my-sectionId-${sections?.[2]?.sectionid}`)
      hideByDiv(`my-sectionId-${sections?.[1]?.sectionid}`)
    } else {
      hideByDiv(`my-sectionId-${sections?.[1]?.sectionid}`)
    }
  }, [])

  const beforeSubmitCB = useCallback(() => {}, [])

  const successCB = useCallback(() => {}, [])

  // const columnUICB = useCallback((args) => {
  //   if (args.colDef.field === 'accepted_or_returned') {
  //     return (
  //       <Stack direction="row" spacing={2}>
  //         <Button
  //           className="m-2  mt-0"
  //           outline
  //           color="primary"
  //           onClick={handleStatus}
  //         >
  //           Add Case
  //         </Button>
  //       </Stack>
  //     )
  //   }
  //   return args.valueFormatted
  // }, [])

  // const handleStatus = useCallback((e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  // }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="reports"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={onFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
        // columnUICB={columnUICB}4
      />
    </FormProvider>
  )
})

export default Reports
