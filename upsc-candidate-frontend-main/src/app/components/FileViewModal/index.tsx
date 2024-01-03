/**
 *
 * FileViewModal
 *
 */
import { memo, useCallback, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import { isEmpty, isEqual } from 'lodash'
import { ModalBox } from 'app/components/ModalBox/Index'
import { useAxios, axiosAction } from 'app/Plugins/Mutations/useAxios'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

interface Props {
  fileName: string
  paramData: any
}

export const FileViewModal = memo(({ fileName, paramData }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {
    mutate: viewFile,
    res: fileRes,
    isLoading: fileLoading,
  } = useAxios({ action: axiosAction.GET, url: '/api/service' })

  if (isEmpty(fileName)) {
    return <div>-</div>
  }

  const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    const bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach((b) => (binary += String.fromCharCode(b)))

    return `data:${fileRes?.type?.mime};base64,${window.btoa(binary)}`
  }

  const handleOnClick = useCallback(() => {
    setIsOpen(true)
    const payload = {
      data: {
        action: 'get',
        path: 'formio',
        section: 'candidate/candidate_file_view',
        data: paramData,
        formId: 'candidate_master',
        initData: {},
      },
      isCustomPayload: true,
    }

    viewFile({ ...payload } as any)
  }, [viewFile])

  return (
    <div>
      <IconButton onClick={handleOnClick}>
        <VisibilityOutlinedIcon color="secondary" />
      </IconButton>

      <ModalBox
        onFormIdReceived={() => setIsOpen(false)}
        open={isOpen}
        modalData={
          <div style={{ width: 300 }}>
            {isEqual(fileRes?.type?.mime, 'application/pdf') ? (
              <iframe
                src={arrayBufferToBase64(fileRes?.file?.data)}
                title=""
                style={{ width: 750, height: '90vh' }}
              />
            ) : (
              <img
                src={arrayBufferToBase64(fileRes?.file?.data)}
                alt=""
                style={{ width: 750, height: '90vh' }}
              />
            )}
          </div>
        }
      />
    </div>
  )
})
