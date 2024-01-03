/**
 *
 * candidate_ph
 *
 */

import { memo, useCallback, useEffect, useState } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import { isEqual, includes, isNull, has } from 'lodash'
import { hideByDiv, showByDiv } from 'utils/handleClass'
import {
  fieldValues,
  getSchemaColumns,
  setSchemaColumn,
  getNumberMask,
  showHideSections,
} from 'app/Plugins/utils/commanHealper'

const CandidatePh = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const [schema, setSchema] = useState<any>()

  const [fschema, setFSchema] = useState<any>()

  const { register, unregister } = methods

  const certOptions = (fschema, optkeys) => {
    let column = getSchemaColumns(fschema, 'ph_certtype') as any
    const newopts = column?.options?.data.filter((item) =>
      includes(optkeys, item.value),
    )
    column = { ...column, options: { data: newopts } }
    fschema = setSchemaColumn(fschema, 'ph_certtype', column)
    setSchema(fschema)
  }

  const onFormChange = useCallback((_values, schema) => {
    setFSchema(schema)
  }, [])

  let values = methods.getValues()
  values = fieldValues(values)

  useEffect(() => {
    if (!isNull(values?.physicallychallenged)) {
      if (isEqual(values?.physicallychallenged, '1')) {
        showHideSections({
          fschema,
          sectionids: ['ph_file', 'ph_info'],
          type: 'show',
        })
      } else {
        showHideSections({
          fschema,
          sectionids: ['ph_info', 'ph_file', 'ph_cert', 'ph_wem'],
          type: 'hide',
        })
      }
    }

    let min, max

    if (!isNull(values?.ph_percent_type)) {
      if (values?.ph_percent_type === '1') {
        min = 40
        max = 99
        showHideSections({
          fschema,
          sectionids: ['ph_cert'],
          type: 'show',
        })
      } else {
        min = 0
        max = 39
        showHideSections({
          fschema,
          sectionids: ['ph_cert'],
          type: 'hide',
        })
      }
    }

    let column = getSchemaColumns(fschema, 'ph_percent')
    column = {
      ...column,
      addattrs: getNumberMask({ min, max, mask: 'YY' }),
      type: 'text',
      hint:
        (min || max) &&
        `Disability percent should be in  between ${min} to ${max}`,
    }
    const _fschema = setSchemaColumn(fschema, 'ph_percent', column)
    setSchema(_fschema)

    let optkeys = [] as any
    switch (values?.phtype) {
      case '1':
        optkeys = ['2', '3']
        certOptions(fschema, optkeys)
        break
      case '2':
        showByDiv('my-colId-bigfontsize')
        optkeys = ['4']
        certOptions(fschema, optkeys)
        break
      case '3':
        optkeys = ['1']
        certOptions(fschema, optkeys)
        break
      case '5':
        optkeys = ['1']
        certOptions(fschema, optkeys)
        break
      case '6':
        optkeys = ['1', '2', '3', '4']
        certOptions(fschema, optkeys)
        break
    }

    // hide the big forn field

    if (values?.phtype !== '2') {
      hideByDiv('my-colId-bigfontsize')
    }

    // Do you Belong to Writing Extremity Category*

    if (isEqual(values?.wextremity, '0')) {
      showHideSections({
        fschema,
        sectionids: ['ph_wem'],
        type: 'hide',
      })
    }
    if (isEqual(values?.wextremity, '1')) {
      {
        showHideSections({
          fschema,
          sectionids: ['ph_wem'],
          type: 'show',
        })
      }
    }
  }, [
    methods.watch('ph_percent_type'),
    methods.watch('phtype'),
    methods.watch('ph_percent'),
    methods.watch('wextremity'),
    methods.watch('physicallychallenged'),
  ])

  useEffect(() => {
    if (includes(values?.assistive_device, '9999')) {
      showByDiv('my-colId-assistive_device_other')
      register('assistive_device_other')
    } else {
      hideByDiv('my-colId-assistive_device_other')
      unregister('assistive_device_other')
    }
  }, [
    values?.assistive_device,
    values?.assistive_device_other,
    register,
    unregister,
  ])
  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="candidate_ph"
        list={false}
        showForm={true}
        methods={methods}
        schemaData={schema}
        onFormChange={onFormChange}
        pluginProps={{
          initData: has(props, 'module_id') ? props : {},
        }}
      />
    </FormProvider>
  )
})

export default CandidatePh
