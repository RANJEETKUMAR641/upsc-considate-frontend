/*
 * Create
 */

import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'
import dayjs from 'dayjs'

const post_notices = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const validateDates = useCallback((data) => {
    const { issue_date, notice_date, close_date_online, close_date_offline } =
      data

    const issueDate: any = splitDate(issue_date)
    const publishDate: any = splitDate(notice_date)
    const closingDateOnline: any = splitDate(close_date_online)
    const closingDateOffline: any = splitDate(close_date_offline)

    if (issueDate !== undefined && publishDate !== undefined) {
      if (issueDate.getTime() >= publishDate.getTime()) {
        methods.setError('notice_date', {
          message: 'Notice date should be greater than issue date',
        })
      } else if (issueDate.getTime() <= publishDate.getTime()) {
        methods.clearErrors('notice_date')
      }
    }

    if (publishDate !== undefined && closingDateOnline !== undefined) {
      if (publishDate.getTime() >= closingDateOnline.getTime()) {
        methods.setError('close_date_online', {
          message: 'Closing online date should be greater than Notice date',
        })
      } else if (publishDate.getTime() <= closingDateOnline.getTime()) {
        methods.clearErrors('close_date_online')
      }
    }

    if (publishDate !== undefined && closingDateOffline !== undefined) {
      if (publishDate.getTime() >= closingDateOffline.getTime()) {
        methods.setError('close_date_offline', {
          message: 'Closing offline date should be greater than Notice date',
        })
      } else if (publishDate.getTime() <= closingDateOffline.getTime()) {
        methods.clearErrors('close_date_offline')
      }
    }
  }, [])

  const splitDate = useCallback((date) => {
    const issueParts = date?.split('/')
    const day = parseInt(issueParts?.[0], 10)
    const month = parseInt(issueParts?.[1], 10) - 1
    const year = parseInt(issueParts?.[2], 10)
    return new Date(year, month, day)
  }, [])

  const handleOnFormChange = useCallback(
    (values) => {
      validateDates(values)
    },
    [validateDates],
  )

  const userMaxDate = () => {
    const newDate = new Date()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    const date = newDate.getDate()

    const updatedDate = `${month}-${date}-${year}`
    return dayjs(updatedDate)
  }

  const publicMaxDate = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const updatedDate = `${month}-${day}-${year}`
    return dayjs(updatedDate)
  }

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="postnotices_filter"
        formId="post_notices"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        pluginProps={{
          listInitData: {
            notice_type: 'o',
          },
          issue_date: {
            minDate: userMaxDate(),
          },
          notice_date: {
            minDate: publicMaxDate(),
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default post_notices
export { post_notices }
