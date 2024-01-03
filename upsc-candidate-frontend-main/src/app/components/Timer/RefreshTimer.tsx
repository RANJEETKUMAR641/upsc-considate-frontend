import React, { useEffect, useCallback } from 'react'
import { getItem, setItem } from 'utils/storage'
import { useAxios } from 'utils/useAxios'

export default function RefreshTimer() {
  const { mutate, res, error } = useAxios({
    action: 'POST',
    url: '/refresh-token',
  })

  const data = getItem('token')

  const fetchMetrics = useCallback(() => {
    mutate({
      email: data?.user?.email,
      ...(data.type?.toString()?.length !== 0 && {
        usertype: data?.user?.type,
      }),
    })
  }, [data])

  useEffect(() => {
    const interval = setInterval(fetchMetrics, 40000)
    return () => clearInterval(interval)
  }, [40000])

  useEffect(() => {
    if (res) {
      setItem('token', res)
    }
  }, [res])

  useEffect(() => {
    if (error) {
      // clear()
      // location.href = '/'
    }
  }, [error])

  return <React.Fragment />
}
