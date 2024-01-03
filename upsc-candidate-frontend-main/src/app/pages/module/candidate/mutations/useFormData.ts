import { useMutation } from '@tanstack/react-query'
import { requestPayload } from 'utils/requestPayload'

export const useIFCData = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/service/IFC'),
  })
  return { mutate, data, isLoading }
}

export const useIFCFilters = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: (payload) => requestPayload(payload, '/api/formio'),
  })
  return { mutate, data, isLoading }
}

export const useGetCandidatePost = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: ({ data }: any) => {
      const payload = {
        path: 'formio/candidate',
        section: 'application',
        action: 'post_modules',
        data: {
          post_id: parseInt(data?.post_id),
        },
      }
      return requestPayload(payload, '/api/service')
    },
  })

  return { mutate, data, isLoading }
}

export const useApplicationData = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: ({ data }: any) => {
      const payload = {
        path: 'formio/candidate',
        section: 'application',
        action: 'data',
        data: {
          post_id: parseInt(data?.post_id),
        },
      }
      return requestPayload(payload, '/api/service')
    },
  })

  return { mutate, data, isLoading }
}

export const useUpsertApp = () => {
  const { mutate, data, isLoading } = useMutation({
    mutationFn: ({ data }: any) => {
      const payload = {
        path: 'formio/candidate',
        section: 'application',
        action: 'upsert',
        data: {
          post_id: parseInt(data?.post_id),
        },
      }
      return requestPayload(payload, '/api/service')
    },
  })

  return { mutate, data, isLoading }
}
