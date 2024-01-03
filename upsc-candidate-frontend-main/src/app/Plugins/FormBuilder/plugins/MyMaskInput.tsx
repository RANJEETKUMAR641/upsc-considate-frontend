import { FormFeedback } from 'reactstrap'
import { memo, useCallback } from 'react'
import { PATTERN } from 'app/Plugins/utils/pluginConstants'
import { IMaskInput } from 'react-imask'
import { Controller } from 'react-hook-form'
import { isEqual } from 'lodash'
import { getPattern } from 'app/Plugins/utils/pluginHelper'

const MyMaskInput = memo((props: any) => {
  const { formState, register } = props?.fmethods

  const { errors } = formState

  const regexPattern = () => {
    switch (props?.type) {
      case 'mobile':
        return PATTERN.MOBILE
      case 'tel':
        return PATTERN.TEL
      case 'registration':
        return PATTERN.REGISTRATION
      default:
        return new RegExp(props?.addattrs?.mask)
    }
  }

  const { ref, ...registerField } = register(props.field, {
    ...props?.addattrs,
  })

  const handleRequired = useCallback(() => {
    if (isEqual(props.required, 1)) {
      return 'Required'
    }
    return false
  }, [])

  return (
    <>
      <div>
        <Controller
          name={props.field}
          control={props.control}
          render={({ field }) => (
            <IMaskInput
              mask={regexPattern()}
              blocks={props?.addattrs?.blocks}
              type={props?.type}
              id={props?.title}
              autoComplete="off"
              placeholder={props?.placeholder}
              readOnly={props?.readonly}
              invalid={Boolean(errors?.[props?.field])}
              valid={props?.values?.[props?.field]}
              className={`input-sm form-control my-input-${props?.field} ${
                Boolean(errors?.[props?.field]) ? 'is-invalid-mail' : ''
              } `}
              {...registerField}
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
            pattern: getPattern(props),
          }}
          shouldUnregister={false}
        />

        <FormFeedback
          aria-errormessage={`error_${props.field}_required`}
          style={{ height: 10 }}
        >
          <span>{errors[props.field]?.message as string}</span>
        </FormFeedback>
      </div>
    </>
  )
})

export default MyMaskInput
