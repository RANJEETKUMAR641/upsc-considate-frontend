import React, { memo, useRef } from 'react'
import AdmitCard from './AC_SPECIALLY_ABLED/card'

class PrintableCardForm extends React.Component {
  render() {
    return (
      <div>
        <AdmitCard />
      </div>
    )
  }
}

const ACAdmitCard = memo(() => {
  const componentRef = useRef<PrintableCardForm | null>(null)

  return (
    <>
      <div style={{ justifyContent: 'right' }}>
        <PrintableCardForm ref={componentRef} />
      </div>
    </>
  )
})

export default ACAdmitCard
