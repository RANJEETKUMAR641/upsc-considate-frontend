import axios from 'axios'
import { config } from 'utils/constants'
import { getItem } from './storage'

export const requestPayload = (
  payload,
  url,
  headers = { 'Content-Type': 'application/json' },
) => {
  const axiosInstance = axios.create({
    baseURL: config.baseURL, //eslint-disable-line
    responseType: 'json',
    headers: headers,
    withCredentials: true,
  })

  const options = {
    method: payload?.method || 'POST',
    data: {
      ...payload,
      initData:
        headers['Content-Type'] === 'application/json'
          ? payload?.initData
          : JSON.stringify(payload?.initData),
    },
    baseURL: config.baseURL,
  }

  const token = getItem('token')?.token

  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  if (getItem('token')?.user?.type?.toString()?.length !== 0) {
    axiosInstance.defaults.headers.common['user_type'] =
      getItem('token')?.user?.type
  }

  // remove response data

  axiosInstance.interceptors.response.use(
    (response: any) => {
      return response?.data
      // return JSON.parse(bsDecrypt(response?.data) as string)
    },
    (err) => {
      // configureAppStore().dispatch(actions.stopLoader())
      return Promise.reject(err)
    },
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      // dispatch(actions.stopLoader())
      // return JSON.parse(bsDecrypt(response?.data) as string)
      return response?.data
    },
    (err) => {
      return Promise.reject(err)
    },
  )

  return axiosInstance(url, options)
}
