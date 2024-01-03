import { useMutation } from '@tanstack/react-query'
import { setItem } from 'utils/storage'
import { requestPayload } from 'utils/requestPayload'
import { notify } from 'utils/notify'

export const useGetLogin = () => {
  const { isLoading, mutate, data } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/login'),
    onSuccess(data: any) {
      if (data?.token) {
        setItem('token', data)
        window.location.href = '/dashboards/main'
      }
    },
    onError(e: any) {
      notify(e?.message, 'error')
    },
  })
  return { isLoading, mutate, res: data }
}
