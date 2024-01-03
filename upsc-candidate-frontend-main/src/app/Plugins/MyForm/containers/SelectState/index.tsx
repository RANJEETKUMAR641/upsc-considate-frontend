/* eslint-disable */

/**
 *
 *
 *
 */

import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormContext } from 'react-hook-form'
import {
  get,
  uniqBy,
  find,
  isEqual,
  filter,
  last,
  split,
  map,
  includes,
  isEmpty,
  has,
} from 'lodash'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'

import { selectSelectState } from './selectors'
import { useSelectStateSlice } from './slice'
import { selectInitData } from 'app/Plugins/FormBuilder/selectors'
import { getValues } from 'utils/getValues'

export function SelectState({ col, children, initData, schema }: any) {
  const { actions } = useSelectStateSlice()
  const { setValue } = useFormContext()
  const formValues = useFormContext()?.getValues()
  const dispatch = useDispatch()

  const selectors = useSelector(selectSelectState)
  const getInitData = useSelector(selectInitData)

  const { mutate } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/service'),
    onSuccess(data) {
      if (data) {
        const field_action = get(col, 'options.child_field', col?.field)
        dispatch(
          actions.setAllSelectors({
            field: field_action,
            options: data,
          }),
        )
      }
    },
  })

  useEffect(() => {
    // select for having data as array
    if (col?.options?.data) {
      const payload = {
        field: col?.field,
        options: col?.options?.data,
      }
      dispatch(actions.setSelectors(payload))
    }
  }, [col?.options?.data, col?.field])

  useEffect(() => {
    // child field getting data options
    if (col?.options?.model) {
      const field_action = get(col, 'options.child_field', col?.field)

      const payload = {
        action: `select_${field_action}`,
        path: 'formio',
        section: col?.options?.model,
        initData: getValues(getInitData),
        params: {
          [col.field]:
            get(formValues?.[col.field], 'value', formValues?.[col.field]) ||
            initData,
        },
      }

      mutate({ ...payload } as any)
    }
  }, [])

  const getAsyncOptions = last(
    filter(selectors, (select) => isEqual(select.field, col?.field)),
  )

  const selectDefaultValue = find(
    get(col, 'options.data', []).concat(getAsyncOptions?.options),
    (option: any) =>
      isEqual(option?.value?.toString(), formValues?.[col?.field]?.toString()),
  )

  // const handleValue = () => {
  //   if (col?.type === 'multiple') {
  //     return children?.props?.values?.[col?.field] || []
  //     // // return selectedValue
  //   }

  //   if (selectDefaultValue !== null && col?.type !== 'multiple') {
  //     return selectDefaultValue
  //   }
  // }
  const handleValue = () => {
    if (!isEmpty(col?.defaultvalue) && isEmpty(formValues?.[col?.field])) {
      useFormContext()?.setValue(col?.field, col?.defaultvalue?.[0])
      return col?.defaultvalue
    }

    if (col?.type === 'multiple') {
      const selectedValue = col?.options?.data?.filter((item) =>
        includes(split(children?.props?.values?.[col?.field], ','), item.value),
      )

      return Array.isArray(formValues?.[col?.field])
        ? formValues?.[col?.field]
        : map(selectedValue, (op) => {
            const data = {
              value: op.value,
              label: op.label,
            }
            return data
          })
    }

    if (selectDefaultValue !== null && col?.type !== 'multiple') {
      return selectDefaultValue || formValues?.[col?.field] || {}
    }
    return null
  }

  const onSelectChange = useCallback((formValues) => {
    if (col?.options?.model) {
      const field_action = get(col, 'options.child_field', col?.field)

      const payload = {
        action: `select_${field_action}`,
        path: 'formio',
        section: col?.options?.model,
        initData: getValues(getInitData),
        params: {
          [col.field]: formValues?.value,
        },
      }

      setValue(field_action, [])
      mutate({ ...payload } as any)
    }

    setValue(col?.field, get(formValues, 'value', formValues))
  }, [])

  return (
    <div>
      {React.cloneElement(children, {
        selectorOptions: uniqBy(
          selectors
            .concat(getAsyncOptions)
            .filter((item) => Array.isArray(item?.options)),
          'field',
        ),
        defaultInitialValues: {
          [col.field]: handleValue(),
        },
        asyncOptions: getAsyncOptions,
        onSelectChange: onSelectChange,
      })}
    </div>
  )
}
