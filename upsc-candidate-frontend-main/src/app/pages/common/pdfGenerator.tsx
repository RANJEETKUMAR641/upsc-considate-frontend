import { useEffect } from 'react'

import { useAxios } from 'utils/useAxios'
import { OverlayLoader } from 'app/components/OverlayLoader'

function Pdf() {
  const { mutate, res, isLoading } = useAxios({
    action: 'POST',
    url: '/api/service',
  }) as any
  useEffect(() => {
    mutate({
      action: 'getForm',
      section: 'getForm',
      path: 'public',
      initData: {
        formid: ['otr_main'],
      },
    } as any)
  }, [])

  if (isLoading) return <OverlayLoader open className="posts" />

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: res?.images }} />
    </div>
  )
}

export default Pdf
