/**
 *
 * assistant-diary-entry
 *
 */

import React, { memo, useRef } from 'react'
import AttendanceCertificate from './AC/ac'

class PrintableCardForm extends React.Component {
  render() {
    return (
      <div>
        <AttendanceCertificate />
      </div>
    )
  }
}
const sal = memo(() => {
  const componentRef = useRef<PrintableCardForm | null>(null)

  return (
    <>
      <div style={{ justifyContent: 'right' }}>
        <PrintableCardForm ref={componentRef} />
      </div>
    </>
  )
})

export default sal
