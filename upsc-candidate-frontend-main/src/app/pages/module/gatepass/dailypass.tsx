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

const EntryPass = memo(() => {
  const [passData, setPassData] = useState<any>({})
  const [printForm, setPrintForm] = useState<any>({})
  const [getTime, setTime] = useState<any>('')
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const [popOpen, setPopOpen] = useState(false)

  const successCB = (...args) => {
    let shouldPrintTime = true
    if (shouldPrintTime) {
      if (!isEmpty(get(args, '[0].message'))) {
        const additionalData = {
          current_date: `${moment().format('YYYY/MM/DD')}`,
          pass_number: `${moment().format('YYYYMM')}D0000`,
          time: getTime,
        }
        const mergedData = {
          ...passData,
          ...additionalData,
        }

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
    const time = moment().format('h:mm:ss A')
    setTime(time)
  }, [])

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
            formId="dailypass"
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

export default EntryPass
export { EntryPass }
