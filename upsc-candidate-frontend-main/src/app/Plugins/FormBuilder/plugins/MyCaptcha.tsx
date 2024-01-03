import { Fragment, useCallback } from 'react'
import { Input as InputRS, Button, FormFeedback } from 'reactstrap'
import { Controller } from 'react-hook-form'
import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { isEqual, get } from 'lodash'
import { requestPayload } from 'utils/requestPayload'
import { IoMdRefresh } from '@react-icons/all-files/io/IoMdRefresh'
// import RefreshIcon from '@mui/icons-material/Refresh';
const MyCaptcha = (props: any) => {
  const { mutate, data } = useMutation({
    mutationFn: (payload) => requestPayload(payload, 'api/service'),
  })

  const { formState } = props?.fmethods

  const { errors } = formState

  const refresCaptcha = () => {
    const payload = {
      action: 'generate',
      section: 'captcha',
      path: 'public',
    }

    mutate({ ...payload } as any)
  }

  useEffect(() => {
    const payload = {
      action: 'generate',
      section: 'captcha',
      path: 'public',
    }

    mutate({ ...payload } as any)
  }, [])

  const handleRequired = useCallback(() => {
    if (isEqual(props.required, 1)) {
      return 'Required'
    }

    return false
  }, [])

  return (
    <Fragment>
      <div className="d-flex">
        <div dangerouslySetInnerHTML={{ __html: get(data, 'image', '') }} />

        <Button
          block
          color="link"
          onClick={refresCaptcha}
          style={{ textAlign: 'left' }}
        >
          <span className="material-symbols-outlined text-warning">
            <IoMdRefresh
              style={{
                fontSize: '30px',
                display: 'inline-block',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            />
          </span>
        </Button>
      </div>
      <div>
        <Controller
          name={props.field}
          control={props.control}
          render={({ field }) => (
            <InputRS
              type={props?.type}
              id={props?.title}
              placeholder={props?.placeholder}
              invalid={errors?.[props?.field]}
              valid={field.value}
              className={`input-sm my-input-${props?.field}`}
              {...props?.addattrs}
              {...field}
              onCopy={(e) => {
                import.meta.env.VITE_REACT_APP_IS_PRODUCTION === 'Y' &&
                  e.preventDefault()
              }}
              onPaste={(e) => {
                import.meta.env.VITE_REACT_APP_IS_PRODUCTION === 'Y' &&
                  e.preventDefault()
              }}
            />
          )}
          rules={{
            required: handleRequired(),
          }}
          shouldUnregister={true}
        />

        {errors?.[props?.field] && (
          <FormFeedback aria-errormessage={`error_${props.field}_required`}>
            <span>{errors[props.field]?.message as string}</span>
          </FormFeedback>
        )}
      </div>
    </Fragment>
  )
}

export default MyCaptcha
