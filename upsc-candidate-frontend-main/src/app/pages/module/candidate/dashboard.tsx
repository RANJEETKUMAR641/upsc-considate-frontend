/**
 *
 * dashboard
 *
 */

import { memo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FormBuilder } from 'app/Plugins/FormBuilder'

import { useForm, FormProvider } from 'react-hook-form'

import Tooltip from '@mui/material/Tooltip'

import { Stack } from '@mui/material'

const Dashboard = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const columnUICB = useCallback((args) => {
    const { row } = args

    if (args.colDef.field === 'app_id') {
      return (
        <Stack direction="row" spacing={2}>
          <Tooltip
            arrow
            title={`Click here to get more of ${row['post_name']}`}
          >
            <Link to={`/dashboards/application?post_id=${row?.post_id}`}>
              {row['app_id']}{' '}
            </Link>
          </Tooltip>
        </Stack>
      )
    }

    if (args.colDef.field === 'post_name') {
      return (
        <Stack direction="row" spacing={2}>
          <Tooltip
            arrow
            title={`Click here to get more of ${row['post_name']}`}
          >
            <Link to={`/post-details/${row?.post_id}`}>
              {row['post_name']}{' '}
            </Link>
          </Tooltip>
        </Stack>
      )
    }

    return args.valueFormatted
  }, [])

  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId="candidate_applications"
          list={true}
          showForm={false}
          methods={methods}
          columnUICB={columnUICB}
          pluginProps={{
            addPermission: false,
            isreadonly: true,
          }}
        />
      </FormProvider>
    </>
  )
})

export default Dashboard
