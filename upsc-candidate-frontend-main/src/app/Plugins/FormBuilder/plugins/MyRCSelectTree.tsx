import { useState } from 'react'
import { filter, get, map } from 'lodash'

import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Checkbox from '@mui/material/Checkbox'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { makeStyles } from '@mui/styles'

import { useFormContext } from 'react-hook-form'
import { FormFeedback } from 'reactstrap'
import { MyRCSelectTreeStyle } from './pluginStyles/MyRCSelectTree.style'
interface CountryType {
  value: string
  label: string
  group: string
}

const useStyles = makeStyles({
  autocomplete: {
    width: '300px',
    height: 12,
  },

  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  group: {
    fontSize: 15,
    fontWeight: 'bold',
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
})

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />

const checkedIcon = <CheckBoxIcon fontSize="small" />

const MyRCSelectTree = (props: any) => {
  const {
    formState: { errors },
  } = useFormContext()

  const filterOptions = filter(
    get(props, 'selectorOptions', []),
    ({ field }) => field === props?.field,
  )?.[0]?.options

  const classes = useStyles()

  const [selectedCountries, setSelectedCountries] = useState<CountryType[]>([])
  const [searchInput, setSearchInput] = useState<string>('')

  const checkOption = (option: CountryType) => {
    const check = selectedCountries.some((c) => c.value === option.value)

    return check
  }

  const renderOptions = (options) => {
    const mappedOptions = map(options, (item) => {
      if (item.children) {
        return item.children.map((item1) => {
          return { ...item1, group: item.label, groupId: item.value }
        })
      }
      return item
    }).flat(Infinity)

    return mappedOptions
  }

  return (
    <div className="myDatePicker">
      <MyRCSelectTreeStyle>
        <Autocomplete
          multiple
          className={classes.autocomplete}
          id="country-select-demo"
          classes={{
            option: classes.option,
            groupLabel: classes.group,
          }}
          options={(renderOptions(filterOptions) as any[]) || []}
          disableCloseOnSelect
          onChange={(_, option) => setSelectedCountries([...(option as any[])])}
          value={selectedCountries}
          inputValue={searchInput}
          onInputChange={(_, newInputValue) => {
            setSearchInput(newInputValue) // Update the search input value
          }}
          autoHighlight
          //   getOptionSelected={(option, vale) => option.value === vale.value}

          getOptionLabel={(option) => option?.label}
          groupBy={(option) => option.group}
          renderOption={(props, option) => (
            <li {...props}>
              <Checkbox
                key={option.value}
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={checkOption(option)}
              />
              {option.label}
            </li>
          )}
          renderGroup={(params) => (
            <>
              <span style={{ marginLeft: 10, fontWeight: 'bold' }}>
                {params.group}
              </span>

              {params.children}
            </>
          )}
          style={{ width: '100%' }}
          size="small"
          renderInput={(params) => (
            <TextField {...params} label="Checkboxes" placeholder="Favorites" />
          )}
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: '#ced4da',
            },
            borderRadius: 2,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ced4da',
            },
            '&:hover': {
              '&& fieldset': {
                border: '1px solid #ced4da',
              },
            },
          }}
        />
      </MyRCSelectTreeStyle>
      {errors?.[props?.field] && <FormFeedback>Required</FormFeedback>}
    </div>
  )
}

export default MyRCSelectTree
