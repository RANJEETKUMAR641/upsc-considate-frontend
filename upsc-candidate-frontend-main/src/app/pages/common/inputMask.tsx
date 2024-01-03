/**
 *
 * candidate_daf
 *
 */

import { memo, useState } from 'react'
import ReactInputMask from 'react-input-mask'

const InputMask = memo(() => {
  //   let ref: HTMLInputElement | null = null

  //   const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i
  //   const letter = /(?!.*[DFIOQU])[A-Z]/i
  //   const digit = /[0-9]/
  //   const mask = [firstLetter, digit, letter, ' ', digit, letter, digit]
  const [value, setValue] = useState('')
  const handleInputChange = (event) => {
    const inputValue = event.target.value
    const enteredYear = inputValue.split('/')[0]
    const enteredMonth = inputValue.split('/')[1]
    const restrictedYear = Math.min(parseInt(enteredYear, 10), 50)
    const restrictedMonth = Math.min(parseInt(enteredMonth, 10), 11)

    setValue(restrictedYear.toString() + '/' + restrictedMonth.toString()) //eslint-disable-line
  }
  return (
    <div>
      <ReactInputMask
        mask="99/99"
        placeholder="YY/MM"
        value={value}
        onChange={handleInputChange}
      />
      <ReactInputMask mask="9999-9999999" placeholder="0000-0000000" />
      {/* <ReactInputMask mask="+7 (999) 999-99-99" />
      <ReactInputMask
        mask="99-99-9999"
        defaultValue="11-01-2017"
        maskPlaceholder="mm/dd/yyyy"
      />
      <ReactInputMask mask="99/99/9999" placeholder="Enter birthdate" />
      <ReactInputMask mask="+7 (999) 999-99-99" />
      <ReactInputMask mask={mask} /> */}
      {/* <ReactInputMask
        mask="+7 (999) 999-99-99"
        inputRef={(node) => (ref = node)}
      /> */}
    </div>
  )
})

export default InputMask
