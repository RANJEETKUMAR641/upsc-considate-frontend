import { getValues, getFiles } from './../../../utils/getValues'
import { isEqual, get, toNumber } from 'lodash'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload2'
import { notify } from 'utils/notify'

type listPayload = {
  formId: string
  initData: Object
  data: any
  path: string
  isCustomPayload?: boolean
  params: any
}

export enum axiosAction {
  GET = 'get',
  SCHEMA = 'schema',
  UPSERT = 'upsert',
  LIST = 'list',
  SERVICE = 'service',
}

type IUseAxios = {
  action: string
  url: string
  headers?: any
}

export const useAxios = ({
  action,
  url,
  headers = { 'Content-Type': 'application/json' },
}: IUseAxios) => {
  const { mutate, data, isLoading, error } = useMutation({
    mutationFn: (listPayload: listPayload) => {
      if (listPayload.isCustomPayload) {
        return requestPayload(listPayload.data, url, headers)
      }
      const payload = {
        action: action,
        formId: listPayload.formId,
        data: isEqual(action, axiosAction.UPSERT)
          ? JSON.stringify(getValues({ ...listPayload.data }))
          : getValues({ ...listPayload.data }),
        initData: getValues(listPayload.initData),
        path: listPayload.path,
        params: listPayload.params,
        ...getFiles(listPayload.data),
      }
      return requestPayload(payload, url, headers)
    },
    onSuccess(data, _variables, _context) {
      if (isEqual(action, axiosAction.UPSERT)) {
        if (data?.data?.data?.statusCode?.statusCode === 400) {
          notify(data?.data?.data?.message, 'error')
        }
        if (data?.data?.data?.statusCode?.statusCode !== 400) {
          notify(get(data, 'data.message', 'Saved successfully'), 'success')
        }
      }
    },
    onError() {
      if (isEqual(action, axiosAction.UPSERT)) {
        notify(data?.data?.message || 'Error`s', 'error')
      }
    },
  })

  return { mutate, res: data?.data?.data, isLoading }
}
