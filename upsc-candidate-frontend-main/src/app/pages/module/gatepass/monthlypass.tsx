/* eslint-disable */
/**
 *
 * DailyPass
 *
 */

import { memo, useEffect, useState } from 'react'
import { isEmpty, get } from 'lodash'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'
import { ModalBox } from 'app/components/ModalBox/Index'
import GatePassPrint from 'app/pages/module/gatepass/GatePass/Index'
import moment from 'moment'
import { Gatepass } from './style/gatepass.style'
// import { Daily } from './json/daily'

const MonthlyPass = memo(() => {
  const [passData, setPassData] = useState<Object>({})
  const [printForm, setPrintForm] = useState(null)
  const [getTime, setTime] = useState(null)

  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const [popOpen, setPopOpen] = useState(false)

  const additionalData = {
    current_date: `${moment().format('YYYY/MM/DD')}`,
    pass_number: `${moment().format('YYYYMM')}D0000`,
    time: getTime,
  }
  const successCB = (...args) => {
    let shouldPrintTime = true
    if (shouldPrintTime) {
      if (!isEmpty(get(args, '[0].message'))) {
        const mergedData = {
          ...passData,
          ...additionalData,
        } as any

        setPrintForm(mergedData)
        setPopOpen(true)
      }
    }
    shouldPrintTime = false
  }
  const beforeSubmitCB = (data) => {
    setPassData(data)
  }
  const onFormIdReceived = () => {}

  useEffect(() => {
    const time = moment().format('h:mm:ss A') as any
    setTime(time)
  }, [passData])

  return (
    <>
      <ModalBox
        onFormIdReceived={onFormIdReceived}
        open={popOpen}
        modalData={<GatePassPrint data={printForm} />}
      />
      <Gatepass>
        <FormProvider {...methods}>
          <FormBuilder
            filterId=""
            formId="monthlypass"
            list={false}
            showForm={true}
            methods={methods}
            successCB={successCB}
            beforeSubmitCB={beforeSubmitCB}
          />
        </FormProvider>
      </Gatepass>
    </>
  )
})

export default MonthlyPass
export { MonthlyPass }
