/* eslint-disable */

import { useCallback, useEffect, useState } from 'react'
import { isEmpty, isEqual, includes, keys } from 'lodash'
import { Controller, useFormContext } from 'react-hook-form'
import { Button, FormFeedback, Input as InputRS } from 'reactstrap'
import { notify } from 'utils/notify'
import styled from 'styled-components'
import { useAxios, axiosAction } from 'app/Plugins/Mutations/useAxios'
import { ModalBox } from 'app/components/ModalBox/Index'

const MyFileInput = (props) => {
  const { formState, setValue, setError, getValues } = props?.fmethods
  const [isOpen, setIsOpen] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<any>()

  const { errors } = formState

  const { mutate: viewFile, res: fileRes } = useAxios({
    action: axiosAction.GET,
    url: '/api/service',
  })

  const { mutate: deleteFile, res: delfile } = useAxios({
    action: axiosAction.GET,
    url: '/api/service',
  })

  const settings: any = {
    minFileSize: 5000,
    maxFileSize: 1024000 * 2,
    fileExtentions: ['jpg', 'jpeg', 'png', 'pdf'],
  }

  const updatedSetting = Object.assign(settings, props?.addattrs)

  const f = props

  const get_size = (size, attr) => {
    size = size || 0
    size = parseInt(size)
    if (size === 0) return ''
    size = size >= 1024 ? `${size / 1024}MB` : `${size}KB`
    return `${attr} ${size}`
  }

  const convertHint = (addattr) => {
    if (!addattr) return ''
    if (typeof addattr !== 'object') return ''
    if (Object?.keys(addattr).length === 0) return ''
    let supportedfiles = addattr.fileExtentions || ''
    if (supportedfiles !== '') {
      supportedfiles = `Supported Files [${supportedfiles}]`
    }

    let filesize = `${get_size(addattr?.minFileSize, 'Minimum')} ${get_size(
      addattr?.maxFileSize,
      'Maximum',
    )}`.trim()
    if (filesize !== '') filesize = `File Size ${filesize}`
    return `${supportedfiles} ${filesize}`.trim()
  }

  const handleImageChange = async (e) => {
    const fileUploaded = e.target.files[0]

    if (!isEmpty(fileUploaded?.name)) {
      setError(f.field, { message: '' })
    }

    if (fileUploaded?.size > updatedSetting?.maxFileSize * 1000) {
      setValue(f.field, '')
      notify('File is too big', 'error')
      return false
    }

    if (fileUploaded?.size < updatedSetting?.minFileSize * 1000) {
      setValue(f.field, '')
      notify('File is too small', 'error')
      return false
    }

    if (fileUploaded === undefined) {
      setValue(f.field, '')
      notify('Please select file', 'error')
      return false
    }
    const allowedExtensions = updatedSetting?.fileExtentions
    const validFileExt = '.' + allowedExtensions?.join('  .')
    const fileExtension = fileUploaded?.name.split('.').pop().toLowerCase()

    if (!allowedExtensions.includes(fileExtension)) {
      setValue(f.field, '')
      notify(
        `Invalid file format, supported Files ( ${validFileExt} )`,
        'error',
      )
      return false
    }

    if (!allowedExtensions.includes(fileExtension)) {
      setValue(f.field, '')
      notify(
        `Invalid file format, supported Files ( ${validFileExt} )`,
        'error',
      )
      return false
    }
    setUploadedFile(fileUploaded)
    setValue(f?.field, fileUploaded, {
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const handleViewImage = () => {
    const {
      formid,
      schema: { module },
    } = props
    const fieldValue = props?.values[f.field]
    const payload = {
      data: {
        action: 'get',
        path: 'formio',
        section: 'candidate/candidate_file_view',
        data: { formid, module, fieldValue, field: f.field },
        formId: formid,
        initData: {},
      },
      isCustomPayload: true,
    }

    viewFile({ ...payload } as any)
  }

  const handleRemoveImage = () => {
    const {
      formid,
      schema: { module },
    } = props
    const fieldValue = props?.values[f.field]
    const payload = {
      data: {
        action: 'deleteFile',
        path: 'formio',
        section: 'candidate/candidate_file_view',
        data: { formid, module, fieldValue, field: f.field },
        formId: formid,
        initData: {},
      },
      isCustomPayload: true,
    }

    deleteFile({ ...payload } as any)
  }

  useEffect(() => {
    if (fileRes?.file) {
      setIsOpen(true)
    }
  }, [fileRes])

  useEffect(() => {
    if (delfile) {
      window.location.reload()
    }
  }, [delfile])

  const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    const bytes = [].slice.call(new Uint8Array(buffer))
    bytes.forEach((b) => (binary += String.fromCharCode(b)))

    return `data:${fileRes?.type?.mime};base64,${window.btoa(binary)}`
  }

  const handleRequired = useCallback(() => {
    return isEqual(props.required, 1) ? 'Required' : false
  }, [])

  return (
    <div>
      {isEmpty(props?.values[f.field]) ? (
        <Controller
          name={props.field}
          control={props.control}
          render={({ field }) => {
            return (
              <InputRS
                title="please brows the doc"
                id={f?.field}
                placeholder={f?.placeholder}
                type="file"
                readOnly={f?.readonly}
                invalid={errors?.[props?.field]}
                valid={field.value}
                accept={f.addattrs?.accepts}
                className="input-sm mt-1 d-none"
                {...field}
                onChange={(e) => handleImageChange(e)}
                value={props?.formData}
              />
            )
          }}
          rules={{
            required: handleRequired() && 'Required',
          }}
        />
      ) : (
        <div></div>
      )}

      <FileBox>
        {isEmpty(props?.values[f.field]) ? (
          <>
            <div
              className={`gymfRF imgboxfile ${
                errors?.[props?.field] &&
                isEmpty(props?.values[props.field]?.name)
                  ? 'border border-danger'
                  : ''
              }`}
            >
              {props?.values[props.field]?.name}
            </div>
          </>
        ) : (
          <div className="imgboxfile pe-3" style={{ fontSize: '0.625rem' }}>
            {props?.values[f.field]}
          </div>
        )}
        {!isEmpty(props?.values[f.field]) && (
          <div className="viewbtn">
            <Button
              className="w-100 btn-secondary"
              color="white"
              onClick={handleViewImage}
            >
              <i className="fa fa-eye" />
            </Button>
          </div>
        )}
        {!isEmpty(props?.values[f.field]) && (
          <div className="viewbtn">
            <Button
              color="danger"
              className="w-100 active"
              onClick={handleRemoveImage}
              role="button"
            >
              <i className="fa fa-trash" />
            </Button>
          </div>
        )}
        {isEmpty(props?.values[f.field]) && (
          <div className="browsebtn">
            <label
              htmlFor={f.field}
              className="w-100 btn btn-secondary rounded-0"
              role="button"
            >
              Browse File
            </label>
          </div>
        )}
      </FileBox>
      <small style={{ marginTop: 10 }}>
        <div>
          {convertHint(f?.addattrs) ||
            'Supported Files ( .jpg,.png,.jpeg,.pdf ) File Size Minimum 50KB Maximum 2MB'}
        </div>
      </small>

      <ModalBox
        onFormIdReceived={() => setIsOpen(false)}
        open={isOpen}
        modalData={
          <div style={{ width: 300 }}>
            {isEqual(fileRes?.type?.mime, 'application/pdf') ? (
              <iframe
                src={arrayBufferToBase64(fileRes?.file?.data)}
                title=""
                style={{ width: 750, height: 550 }}
              />
            ) : (
              <img
                src={arrayBufferToBase64(fileRes?.file?.data)}
                alt=""
                style={{ width: 750, height: 450 }}
              />
            )}
          </div>
        }
      />
      {errors?.[props?.field] && (
        <FormFeedback aria-errormessage={`error_${props.field}_required`}>
          <span>{errors[props.field]?.message as string}</span>
        </FormFeedback>
      )}
    </div>
  )
}

export default MyFileInput

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
  .imgboxfile {
    width: calc(100% - 120px);
    display: inline-block;
    background: #f7f7f7;
    padding: 0 0.3rem;
  }
`
