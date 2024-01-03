/**
 *
 * Options
 *
 */
import { memo } from 'react'
import { components, OptionProps } from 'react-select'

interface Props extends OptionProps {}

export const Options = memo((props: Props) => {
  return <components.Option {...props}>{props.children}</components.Option>
})
