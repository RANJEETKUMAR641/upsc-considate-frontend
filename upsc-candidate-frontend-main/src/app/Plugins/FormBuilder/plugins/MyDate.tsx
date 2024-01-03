import { isEqual } from 'lodash'
import { MyDatePickerStyle } from './pluginStyles/myDatePicker.style'
import { FormFeedback } from 'reactstrap'
import { useCallback } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import moment from 'moment'
import dayjs from 'dayjs'

export const MyDate = (props: any) => {
  const { register, setValue, formState } = props?.fmethods

  const handleRequired = useCallback(() => {
    if (isEqual(props.required, 1)) {
      return 'Required'
    }

    return false
  }, [props.required, props.value])

  const { errors } = formState
  const invalid =
    props?.touched?.[props?.field] && Boolean(props?.errors?.[props?.field])

  const hasError: any = errors?.[props.field]

  const dateValue = useCallback(() => {
    return moment(props?.values?.[props?.field], 'DD-MM-YYYY').format(
      'YYYY-MM-DD',
    )
  }, [props?.values?.[props?.field]])

  const handleChangeValue = useCallback((e) => {
    setValue(props?.field, moment(e?.$d)?.format('DD/MM/YYYY'), {
      shouldTouch: true,
      shouldValidate: true,
      shouldDirty: true,
    })
  }, [])

  const { ref, ...registerField } = register(props.field, {
    required: handleRequired(),
    ...props?.addattrs,
  })

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MyDatePickerStyle
          format="DD/MM/YYYY"
          isClearable
          type={props?.type}
          id={props?.title}
          autoComplete="off"
          placeholder={props?.placeholder}
          invalid={invalid}
          readOnly={props?.readonly}
          style={{ width: '100%' }}
          className={`form-control p-0 input-sm my-input-${props?.field} ${
            errors?.[props?.field] ? 'invalidDate' : ''
          }`}
          {...registerField}
          {...props?.addattrs}
          {...props.pluginProps?.[props?.field]}
          value={dayjs(dateValue())}
          onChange={handleChangeValue}
          hasError={hasError}
        />
      </LocalizationProvider>
      <FormFeedback
        aria-errormessage={`error_${props.field}_required`}
        style={{ height: 10 }}
      >
        <span>{errors[props.field]?.message as string}</span>
      </FormFeedback>
    </>
  )
}
