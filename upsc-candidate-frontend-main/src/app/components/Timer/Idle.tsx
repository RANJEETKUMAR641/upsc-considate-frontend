import React from 'react'
import { useIdleTimer } from 'react-idle-timer'
import { LABELS } from 'utils/constants'
import { getItem, removeItem } from 'utils/storage'
import { useAxios } from 'utils/useAxios'

export default function Idle() {
  const { mutate } = useAxios({ action: 'POST', url: '/logout' })

  useIdleTimer({
    timeout: LABELS.IDLE_TIME,
    crossTab: true,
    leaderElection: true,
    syncTimers: 200,
    onIdle: () => {
      mutate({
        ...(getItem('token')?.user?.type?.toString()?.length !== 0 && {
          usertype: getItem('token')?.user?.type,
        }),
        email: getItem('token')?.email,
      })
      removeItem('token')
      location.href = '/candidate/login'
    },
  })

  return <React.Fragment />
}
