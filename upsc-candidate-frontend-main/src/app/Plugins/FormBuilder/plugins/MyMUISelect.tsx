import { useRef } from 'react'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const MyMUISelect = (props: any) => {
  const ref = useRef(null)

  const handleOnChange = (_event, target) => {
    const customEvent = {
      target: { name: props?.field, value: target?.value },
      ref: ref,
    }

    props?.handleChange(customEvent)
  }

  // var date = new Date(props?.values?.[props?.field]);
  // const isDate = date instanceof Date && !isNaN(date.valueOf());

  return (
    <Autocomplete
      ref={ref}
      disablePortal
      id="combo-box-demo"
      options={props?.options?.data.filter((item) => item.value)}
      onChange={handleOnChange}
      sx={{
        width: 300,
        padding: 0,
        marginTop: 1,
        marginBottom: 1,
        borderRadius: 0,
      }}
      renderInput={(params) => (
        <TextField {...params} style={{ padding: 0, borderRadius: 0 }} />
      )}
    />
  )
}

export default MyMUISelect
