import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'

export const useGetPermission = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: () => {
      const payload = { action: 'mymenus', path: 'formio', section: 'admin/me' }
      return requestPayload(payload, '/api/service')
    },
  })
  return { mutate, data, isLoading }
}
