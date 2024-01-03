/**
 *
 *
 *
 */

/* eslint-disable */

import Main from 'app/components/LibraryMain'
import { useGetPermission } from './Mutations/getPermission'
import { useEffect } from 'react'

export function Root() {
  const { mutate, data: menu, isLoading } = useGetPermission()

  useEffect(() => mutate(), [])

  return (
    <>
      <Main {...({ menuData: menu } as any)} {...(isLoading as any)} />
    </>
  )
}
