import React, { memo, useRef } from 'react'
import ScribeAdmitCard from './SCRIBE/scribe_admit_card'

class PrintableCardForm extends React.Component {
  render() {
    return (
      <div>
        <ScribeAdmitCard />
      </div>
    )
  }
}

const Scribe = memo(() => {
  const componentRef = useRef<PrintableCardForm | null>(null)

  return (
    <>
      <div style={{ justifyContent: 'right' }}>
        <PrintableCardForm ref={componentRef} />
      </div>
    </>
  )
})

export default Scribe
