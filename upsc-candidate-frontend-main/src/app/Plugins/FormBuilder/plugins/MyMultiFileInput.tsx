import { useState } from 'react'
import { ModalBody, ModalHeader } from 'reactstrap'
import { MyModelStyle } from './pluginStyles/MyModel.style'
import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import styled from 'styled-components'

const MyMultiFileInput = () => {
  const settings = {
    minFileSize: 50,
    maxFileSize: 1024,
    fileExtentions: ['.jpg', '.jpeg', '.png', '.pdf', '.doc'],
  }

  //   const [uploadedFile, setUploadedFile] = useState<any>()
  const [modal, setModal] = useState(false)

  const updatedSetting = Object.assign(settings, {})

  //   const f = props
  const toggle = () => setModal(!modal)

  const uppy = new Uppy({
    restrictions: {
      maxFileSize: 1024 * updatedSetting?.maxFileSize,
      minFileSize: 1024 * updatedSetting?.minFileSize,
      allowedFileTypes: ['.jpg', '.jpeg', '.png', '.pdf', '.doc'],
      maxNumberOfFiles: 3,
    },
  })
  uppy.on('upload', () => {
    setModal(false)
  })
  const handleUppyImage = (e) => {
    e.preventDefault()
    setModal(true)
  }
  return (
    <div>
      <FileBox>
        <div className="browsebtn w-100">
          <button
            className="w-100 btn btn-secondary rounded-0"
            onClick={handleUppyImage}
          >
            Browse File
          </button>
        </div>
      </FileBox>
      <MyModelStyle isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add File</ModalHeader>
        <ModalBody>
          <Dashboard
            uppy={uppy}
            plugins={['Webcam']}
            proudlyDisplayPoweredByUppy={false}
          />
        </ModalBody>
      </MyModelStyle>
    </div>
  )
}

export default MyMultiFileInput

const FileBox = styled.div`
  button,
  label {
    height: 24px;
  }
  display: flex;
  .inputboxfile {
    width: calc(100% - 200px);
    margin-right: 1px;
  }
  .viewbtn {
    width: 40px;
    margin-right: 1px;
  }
  .browsebtn {
    width: 120px;
  }
`
