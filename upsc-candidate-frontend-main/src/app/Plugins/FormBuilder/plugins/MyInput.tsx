import { FormFeedback, Input as InputRS } from 'reactstrap'
import { useCallback, memo } from 'react'
import { Controller } from 'react-hook-form'
import { isEqual } from 'lodash'
import { getPattern, handleOnKeyDown } from 'app/Plugins/utils/pluginHelper'

const Input = memo((props: any) => {
  const { formState } = props?.fmethods

  const { errors } = formState

  const handleRequired = useCallback(() => {
    return isEqual(props.required, 1) ? 'Required' : false
  }, [])

  return (
    <>
      <div>
        <Controller
          name={props?.field}
          control={props.control}
          render={({ field }) => (
            <InputRS
              type={props?.type}
              id={props?.title}
              autoComplete="off"
              placeholder={props?.placeholder}
              readOnly={props?.readonly}
              invalid={Boolean(errors?.[props?.field])}
              valid={props?.values?.[props?.field]}
              className={`input-sm my-input-${props?.field}`}
              {...field}
              {...props?.addattrs}
              maxLength={props?.addattrs?.maxlength}
              onKeyDown={(e) => handleOnKeyDown(e, props)}
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
            pattern: getPattern(props),
          }}
          shouldUnregister={true}
        />

        {errors?.[props?.field] && (
          <FormFeedback
            aria-errormessage={`error_${props.field}_required`}
            style={{ height: 10 }}
          >
            <span>
              {(errors[props.field]?.message as string) || 'Required'}
            </span>
          </FormFeedback>
        )}
      </div>
    </>
  )
})

export default Input
