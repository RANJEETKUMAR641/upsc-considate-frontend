import React, { memo, useRef } from 'react'
import AdmitCard1 from './AdmitCard/card'

class PrintableCardForm extends React.Component {
  render() {
    return (
      <div>
        <AdmitCard1 />
      </div>
    )
  }
}

const AdmitCard = memo(() => {
  const componentRef = useRef<PrintableCardForm | null>(null)

  return (
    <>
      <div style={{ justifyContent: 'right' }}>
        <PrintableCardForm ref={componentRef} />
      </div>
    </>
  )
})

export default AdmitCard
