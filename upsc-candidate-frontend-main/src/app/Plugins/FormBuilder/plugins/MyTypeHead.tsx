/* eslint-disable */

import React, { useEffect, useState, useCallback } from 'react'

import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

import {
  showByDiv,
  showByClassName,
  hideByDiv,
  hideByClassName,
} from 'utils/handleClass'

import {
  map,
  size,
  get,
  filter,
  difference,
  includes,
  isEqual,
  toString,
  isEmpty,
} from 'lodash'
import { Controller, useFormContext } from 'react-hook-form'

import { FormFeedback } from 'reactstrap'

// Adapter for react-window

export const MyTypeHead = (props: any) => {
  const [value, _setValue] = React.useState<any>([])

  const {
    formState: { errors },
    setValue,
  } = useFormContext()

  const [selected, setSelected] = useState<any>([])
  const [isReset, setIsReset] = useState<boolean>(false)

  const optionsValue = map(get(props, 'options.data', []), (item) => item.value)
  const allowNewValue = difference(props?.values?.[props?.field], optionsValue)

  const handleOptions = () => {
    return get(props, 'options.data', [])
  }

  const handleRequired = useCallback(() => {
    if (isEqual(props.required, 1)) {
      return 'Required'
    }

    return false
  }, [])

  useEffect(() => {
    const extendedField = get(props, 'options.extended_field')
    const extendedClass = get(props, 'options.extended_class')

    if (extendedField || extendedClass) {
      if (
        isEqual(
          toString(get(props?.values?.[props?.field], 'value')),
          toString(get(props, 'options.extended_value')),
        )
      ) {
        if (extendedField) {
          showByDiv(`my-colId-${extendedField}`)
        } else {
          showByClassName(extendedClass)
        }
      } else {
        if (extendedField) {
          hideByDiv(`my-colId-${extendedField}`)
        } else {
          hideByClassName(extendedClass)
        }
      }
    }
  }, [props.values])

  const defaultOptions = filter(get(props, 'options.data', []), (option) =>
    includes(props?.values?.[props?.field], option?.value),
  ).concat(
    map(allowNewValue, (item) => {
      return {
        label: item,
        value: item,
      }
    }),
  )

  useEffect(() => {
    if (!isEmpty(defaultOptions) && isEmpty(selected)) {
      setSelected(defaultOptions)
    }
  }, [defaultOptions])

  useEffect(() => {
    if (isEqual(size(props?.values?.[props.field]), 0)) {
      setIsReset(true)
      _setValue([])
      setSelected([])
    }
  }, [props?.values])

  useEffect(() => {
    if (!isEmpty(value)) {
      const mappedValues = map(value, (item) => {
        return {
          label: item?.title || item,
          value: item?.value || item?.title || item,
        }
      })

      setValue(props.field, mappedValues)
    }
  }, [value])

  useEffect(() => {
    if (isEmpty(value)) {
      const defaultField = map(props.values?.[props.field], (item) => {
        const data = {
          title: item,
        }
        return data
      })

      !isEmpty(defaultField) && _setValue(defaultField)
    }
  }, [props.values?.[props.field]])

  const StyledAutocomplete = styled(Autocomplete)({
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: 'translate(34px, 20px) scale(1);',
    },
    '& .MuiChip-deleteIcon': {
      fontSize: 15,
    },
    '& .MuiAutocomplete-tag': {
      height: 'auto',
      borderRadius: 0,
      marginLeft: 2,
      display: 'inline-block',
    },
    '&.Mui-focused .MuiInputLabel-outlined': {},
    '& .MuiAutocomplete-inputRoot': {
      borderColor: 'rgb(206, 212, 218)',
      borderRadius: 0,
      padding: 0,
      display: 'inline-block',
      // This matches the specificity of the default styles at https://github.com/Ci-ml-up-l-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
      '&[class*="Ci-ml-up-lOutlinedInput-root"] .MuiAutocomplete-input:first-of-type':
        {
          // Default left padding is 6px
          paddingLeft: 3,
        },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(206, 212, 218)',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(206, 212, 218)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(206, 212, 218)',
      },
    },
  })

  return (
    <>
      <Controller
        name={props?.field}
        control={props.control}
        render={({ field }) => (
          <StyledAutocomplete
            multiple
            filterSelectedOptions
            id="free-solo-with-text-demo"
            options={get(props, 'options.data', [])}
            getOptionLabel={(option: any) => {
              // Value selected with enter, right from the input
              if (typeof option === 'string') {
                return option
              }
              // Add "xxx" option created dynamically
              if (option.inputValue) {
                return option.inputValue
              }
              // Regular option
              return option.label
            }}
            renderOption={(props, option: any) => {
              return (
                <li {...props} key={option.label}>
                  {option.label}
                </li>
              )
            }}
            freeSolo={get(props, 'addattrs.allowNew', false)}
            renderInput={(params) => <TextField {...params} label="" />}
            {...field}
            value={value}
            onChange={(event, newValue: any) => {
              if (
                Array.isArray(newValue) &&
                newValue.length > props?.addattrs?.limitTags
              ) {
                return
              }
              if (typeof newValue === 'string') {
                _setValue({
                  title: newValue,
                })
              } else if (newValue && newValue.inputValue) {
                // Create a new value from the user input
                _setValue({
                  title: newValue.inputValue,
                })
              } else {
                _setValue(newValue)
              }
            }}
          />
        )}
        rules={{ required: handleRequired() }}
        shouldUnregister={false}
      />
      {errors?.[props?.field] && (
        <FormFeedback aria-errormessage={`error_${props.field}_required`}>
          <span>{errors[props.field]?.message as string}</span>
        </FormFeedback>
      )}
    </>
  )
}
