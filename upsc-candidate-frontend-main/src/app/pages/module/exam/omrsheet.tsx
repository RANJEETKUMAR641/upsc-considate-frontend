/**
 *
 * assistant-diary-entry
 *
 */

import React, { memo, useRef } from 'react'
import CardForm from './omr/sheet'

class PrintableCardForm extends React.Component {
  render() {
    return (
      <div>
        <CardForm />
      </div>
    )
  }
}

const OmrSheeet = memo(() => {
  const componentRef = useRef<PrintableCardForm | null>(null)

  return (
    <>
      <div style={{ justifyContent: 'right' }}>
        <PrintableCardForm ref={componentRef} />
      </div>
    </>
  )
})

export default OmrSheeet
