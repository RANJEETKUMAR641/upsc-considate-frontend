/* eslint-disable */

import { useEffect, useState } from 'react'
import { get, isUndefined, map } from 'lodash'

import { Controller, useFormContext } from 'react-hook-form'

import List from '@mui/material/List'

import SendIcon from '@mui/icons-material/Send'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { FormFeedback } from 'reactstrap'
import { Collapse } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'

export const MySelectTreeList = (props: any) => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext()

  const updatedData = get(props, `selectorOptions`)?.[props?.field]

  const [checked, setChecked] = useState<any>([])

  useEffect(() => {
    if (
      !isUndefined(props?.values?.[props?.field]) &&
      props?.values?.[props?.field].length !== 0
    ) {
      setChecked(props?.values?.[props?.field])
    }
  }, [props?.values?.[props?.field]])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  useEffect(() => {
    const items = checked.filter((item) => item.length > 4)
    setValue(props?.field, items.toString())
  }, [setValue, checked])

  return (
    <div className={`mb-1 my-input-${props?.field}`} key={props.title}>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        dense
        disablePadding
      >
        {map(updatedData, ({ value, label, children }) =>
          children ? (
            <Collapse in timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={handleToggle(value)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': label }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={label} /> <ExpandMore />
                </ListItemButton>

                {map(children, ({ value, label, children }) => (
                  <List
                    component="div"
                    disablePadding
                    key={label + value}
                    style={{ marginLeft: 10 }}
                  >
                    <ListItemButton
                      sx={{ pl: 4 }}
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': label }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={label} />
                      {children ? <ExpandMore /> : <div />}
                    </ListItemButton>
                    {map(children, ({ value, label, children }) => (
                      <List
                        component="div"
                        disablePadding
                        key={label + value}
                        style={{ marginLeft: 10 }}
                      >
                        <ListItemButton
                          sx={{ pl: 4 }}
                          onClick={handleToggle(value)}
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': label }}
                            />
                          </ListItemIcon>
                          <ListItemText primary={label} />
                          {children ? <ExpandMore /> : <div />}
                        </ListItemButton>
                      </List>
                    ))}
                  </List>
                ))}
              </List>
            </Collapse>
          ) : (
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          ),
        )}
      </List>
      {errors?.[props?.field] && <FormFeedback>Required</FormFeedback>}
    </div>
  )
}
