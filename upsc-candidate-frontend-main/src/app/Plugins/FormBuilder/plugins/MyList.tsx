/* eslint-disable */

import { useEffect, useState } from 'react'
import { get, isUndefined, map, isEqual } from 'lodash'

import { Controller, useFormContext } from 'react-hook-form'

import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import { MyListStyle } from './pluginStyles/MyList.style'
import { FormFeedback } from 'reactstrap'

export const MyInputList = (props: any) => {
  const {
    formState: { errors, touchedFields },
  } = useFormContext()
  const updatedData = get(props, 'options.data') || props?.data

  const [checked, setChecked] = useState<any>([])

  useEffect(() => {
    if (
      !isUndefined(props?.values?.[props?.field]) &&
      props?.values?.[props?.field].length !== 0
    ) {
      setChecked(props?.values?.[props?.field])
    }
  }, [props?.values?.[props?.field]])

  return (
    <div className={`mb-1 my-input-${props?.field}`} key={props.title}>
      <Controller
        name={props.field}
        control={props.control}
        render={({ field }) => {
          return (
            <MyListStyle
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
              }}
            >
              {map(updatedData, ({ value, label }) => {
                const labelId = `checkbox-list-label-${value}`

                const handleToggle = (value: number) => {
                  setChecked((prevChecked) => {
                    const currentIndex = prevChecked.indexOf(value)
                    const newChecked = [...prevChecked]

                    if (currentIndex === -1) {
                      newChecked.push(value)
                    } else {
                      newChecked.splice(currentIndex, 1)
                    }
                    field.onChange(newChecked)
                    return newChecked
                  })
                }

                return (
                  <ListItem key={value} disablePadding>
                    <ListItemButton
                      role={undefined}
                      onClick={() => {
                        handleToggle(value)
                      }}
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={
                            isUndefined(checked)
                              ? false
                              : checked?.indexOf(value) !== -1
                          }
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={label} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </MyListStyle>
          )
        }}
        rules={{ required: isEqual(props.required, 1) }}
        shouldUnregister={false}
      />

      {errors?.[props?.field] && <FormFeedback>Required</FormFeedback>}
    </div>
  )
}
