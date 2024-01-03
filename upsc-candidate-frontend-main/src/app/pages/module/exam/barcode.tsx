import React, { useRef, useEffect } from 'react'
import bwipjs from 'bwip-js'

export const BarcodeScanner = () => {
  const barcodeRef = useRef(null)

  const Bwipjs = bwipjs as any

  useEffect(() => {
    if (barcodeRef.current) {
      const canvas = barcodeRef.current
      Bwipjs.toCanvas(canvas, {
        bcid: 'code128',
        text: '123456789',
        scaleX: 3,
        scaleY: 1,
        rotate: 'I',
        textxalign: 'center',
      })
    }
  }, [])

  return (
    <div>
      <canvas ref={barcodeRef} />
    </div>
  )
}

const VerticalBarcode = () => {
  const barcodeRef = useRef(null)

  const Bwipjs = bwipjs as any

  useEffect(() => {
    if (barcodeRef.current) {
      const canvas = barcodeRef.current
      Bwipjs.toCanvas(canvas, {
        bcid: 'code128',
        text: '123456789',
        scaleX: 1,
        scaleY: 3,
        height: 12,
        rotate: 'L',
        textxalign: 'center',
      })
    }
  }, [])

  return (
    <div>
      <canvas ref={barcodeRef} />
    </div>
  )
}

export default VerticalBarcode
