import get from 'lodash/get'
import { useMutation } from '@tanstack/react-query'
import { requestPayload } from './requestPayload'

export const useAxios = ({ action, url }: any) => {
  const { mutate, data, isLoading, error } = useMutation({
    mutationFn: (listPayload: any) => {
      const payload = {
        method: action,
        ...get(listPayload, 'data', listPayload),
      }
      return requestPayload(payload, url)
    },
  })

  return { mutate, res: data, isLoading, error }
}
