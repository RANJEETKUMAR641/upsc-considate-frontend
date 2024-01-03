/**
 *
 * DropDownIndication
 *
 */
import React, { memo } from 'react'
import { components, OptionProps } from 'react-select'
import { MdKeyboardArrowDown } from '@react-icons/all-files/md/MdKeyboardArrowDown'
import { MdClose } from '@react-icons/all-files/md/MdClose'

interface Props extends OptionProps {}

export const DropDownIndication = memo((props: Props) => {
  return (
    <components.DropdownIndicator {...props}>
      <MdKeyboardArrowDown />
    </components.DropdownIndicator>
  )
})
export const Close = memo((props: Props) => {
  return (
    <components.ClearIndicator {...props}>
      {' '}
      <MdClose />
    </components.ClearIndicator>
  )
})
