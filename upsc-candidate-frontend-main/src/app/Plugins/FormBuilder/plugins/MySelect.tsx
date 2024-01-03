/* eslint-disable */

import React, { memo, useCallback, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Controller, get } from 'react-hook-form'
import { isEqual, filter, isEmpty, toString, map } from 'lodash'
import { Options } from 'app/components/SelectComponents/Options'
import {
  DropDownIndication,
  Close,
} from 'app/components/SelectComponents/DropDownIndication'
import { selectForms } from 'app/Plugins/FormBuilder/selectors'
import { MySelectStyle } from './pluginStyles/MySelect.style'

import { FormFeedback } from 'reactstrap'
import {
  showByDiv,
  showByClassName,
  hideByDiv,
  hideByClassName,
} from 'utils/handleClass'
import { useFormBuilderSlice } from 'app/Plugins/FormBuilder/slice'

const MySelect: React.FC = memo((props: any) => {
  const {
    clearErrors,
    formState: { errors, touchedFields },
  } = props?.fmethods

  const getForms = useSelector(selectForms)

  const dispatch = useDispatch()
  const { actions } = useFormBuilderSlice()

  const selectStyle = {
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      borderBottom: '1px solid #f7f7f7',
      height: '100%',
      fontSize: 'var(--fontsize)',
      ':active': {
        ...styles[':active'],
        backgroundColor: '#FFF',
      },
      padding: '0.2rem 0.5rem',
      backgroundColor: isSelected
        ? '#D3D3D3'
        : isFocused
        ? '#D3D3D3'
        : undefined,
      color: '#000',
      ':hover': {
        ...styles[':hover'],
        background: '#D3D3D3',
      },
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: 'none',
    }),
    group: (styles) => ({
      ...styles,
      paddingTop: '0px',
      paddingBottom: '0px',
    }),
  }

  const isHavingFilter = props?.formid?.includes('filter')

  const options = filter(
    props.selectorOptions,
    (select) => select.field === props.field && props.field.length > 0,
  )

  const invalid =
    Boolean(touchedFields?.[props?.field]) && errors?.[props?.field]

  const extendedField = useMemo(
    () => get(props, 'options.extended_field'),
    [props],
  )
  const extendedClass = useMemo(
    () => get(props, 'options.extended_class'),
    [props],
  )

  const memoValue = useMemo(
    () =>
      toString(
        get(
          props?.values?.[props?.field],
          'value',
          props?.values?.[props?.field],
        ),
      ),
    [props],
  )

  const memoExtendedValue = useMemo(
    () => toString(get(props, 'options.extended_value')),
    [props],
  )

  const handleGetFormData = (
    forms: any,
    formId: string,
    colName: string,
    req: number,
  ) => {
    const payload = {
      ...forms,
      [formId]: {
        ...forms[formId],
        sections: map(forms[formId]?.sections, (sec) => {
          return {
            ...sec,
            columns: map(sec.columns, (col: any) => {
              let colM = col

              if (isEqual(col.field, colName)) {
                const data = { ...colM, required: req }

                return data
              }

              return colM
            }),
          }
        }),
      },
    }

    dispatch(actions.setFormData(payload))
  }

  useEffect(() => {
    if (extendedField || extendedClass) {
      if (isEqual(memoValue, memoExtendedValue)) {
        if (extendedField) {
          showByDiv(`my-colId-${extendedField}`)

          handleGetFormData(getForms, props?.formid, extendedField, 1)
        } else {
          showByClassName(extendedClass)

          handleGetFormData(getForms, props?.formid, extendedClass, 1)
        }
      } else {
        if (extendedField) {
          hideByDiv(`my-colId-${extendedField}`)

          handleGetFormData(getForms, props?.formid, extendedField, 0)
        } else {
          hideByClassName(extendedClass)

          handleGetFormData(getForms, props?.formid, extendedClass, 0)
        }
      }
    }
  }, [extendedField, extendedClass, memoValue, memoExtendedValue])

  const hasError: any = errors?.[props.field]

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
            <MySelectStyle
              id={props?.field}
              isDisabled={isHavingFilter ? false : props?.readonly}
              isLoading={false}
              isClearable={true}
              isSearchable={false}
              closeMenuOnSelect={true}
              hasError={hasError}
              options={
                !isEmpty(get(props, 'asyncOptions.options'))
                  ? get(
                      props,
                      'asyncOptions.options.data',
                      get(props, 'asyncOptions.options', []),
                    )
                  : options
              }
              isOptionDisabled={(option: any) => option?.disabled}
              className={`react-select-container my-input-${props?.field}`}
              isMulti={props?.type === 'multiple' || false}
              invalid={Boolean(invalid)}
              isValid={!invalid}
              styles={selectStyle}
              aria-labelledby="aria-label"
              classNamePrefix="react-select"
              {...field}
              {...props?.addattrs}
              onChange={(e) => {
                props?.onSelectChange(e)
              }}
              value={props?.defaultInitialValues?.[props?.field]}
              placeholder={props?.placeholder}
              components={{
                Option: Options,
                DropdownIndicator: DropDownIndication,
                ClearIndicator: Close,
              }}
            />
          )}
          rules={{
            required: handleRequired() && 'Required',
          }}
          shouldUnregister={true}
        />

        {errors?.[props?.field] && (
          <FormFeedback aria-errormessage={`error_${props.field}_required`}>
            <span>{errors[props.field]?.message as string}</span>
          </FormFeedback>
        )}
      </div>
    </>
  )
})

export default MySelect
