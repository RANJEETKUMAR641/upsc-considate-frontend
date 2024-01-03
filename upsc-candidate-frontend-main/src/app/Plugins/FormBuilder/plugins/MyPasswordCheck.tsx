/* eslint-disable */

import { useCallback } from 'react'
import { isEqual } from 'lodash'
import PasswordChecklist from 'react-password-checklist'

import { useFormContext, Controller } from 'react-hook-form'

import { Label, FormFeedback, Input as InputRS } from 'reactstrap'

const MyPasswordCheck = (props: any) => {
  const { formState, getValues, setError, clearErrors } = useFormContext()

  const { errors } = formState

  const handleRequired = useCallback(() => {
    if (isEqual(props.required, 1)) {
      return 'Required'
    }

    return false
  }, [])

  const handleGetPattern = useCallback(() => {
    switch (props.type) {
      case 'password':
      case 'confirmPassword':
        return {
          value: /^[A-Za-z]{3}$/i,

          message: 'Please enter valid password',
        }
    }
  }, [props.field])

  return (
    <div className={`mb-1 my-input-${props?.field}`} key={props.title}>
      <div>
        <Controller
          name={props.field}
          control={props.control}
          render={({ field }) => {
            return (
              <InputRS
                type="password"
                id={props?.title}
                placeholder={props?.placeholder}
                invalid={Boolean(errors?.[props?.field])}
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
            )
          }}
          rules={{
            required: handleRequired(),
            pattern: handleGetPattern(),
            minLength: 8,
          }}
          shouldUnregister={true}
        />

        {errors?.[props?.field] && (
          <FormFeedback aria-errormessage={`error_${props.field}_required`}>
            <span>{errors[props.field]?.message as string}</span>
          </FormFeedback>
        )}
      </div>

      <Label for="Confirm password" className="my-label my-custom-password">
        Confirm password
      </Label>
      <span className="my-form-hint text-danger">*</span>

      <div>
        <Controller
          name="confirmPassword"
          control={props.control}
          render={({ field }) => {
            return (
              <InputRS
                type="password"
                placeholder={props?.placeholder}
                invalid={Boolean(errors?.['password'])}
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
            )
          }}
          rules={{
            pattern: handleGetPattern(),
            minLength: 8,
          }}
          shouldUnregister={true}
        />

        {errors?.['password'] && !props?.values?.password && (
          <FormFeedback aria-errormessage={'error_confirm_password_required'}>
            <span>Required</span>
          </FormFeedback>
        )}

        {props?.values?.password && (
          <PasswordChecklist
            rules={[
              'number',
              'capital',
              'minLength',
              'lowercase',
              'match',
              'specialChar',
            ]}
            minLength={8}
            value={props?.values?.password}
            valueAgain={props?.values?.confirmPassword}
            onChange={(isValid) =>
              !isValid
                ? setError('password', {
                    type: 'custom',
                    message: 'Password and confirm password miss match',
                  })
                : clearErrors('password')
            }
          />
        )}
      </div>

      {/* <FormFeedback>{props?.hint}</FormFeedback> */}
    </div>
  )
}

export default MyPasswordCheck
