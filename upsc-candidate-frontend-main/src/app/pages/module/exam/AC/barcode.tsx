import React, { useRef, useEffect, memo } from 'react'
import bwipjs from 'bwip-js'

export const BarcodeScanner = memo(() => {
  const barcodeRef = useRef(null)

  const Bwipjs = bwipjs as any

  useEffect(() => {
    if (barcodeRef.current) {
      const canvas = barcodeRef.current

      Bwipjs.toCanvas(canvas, {
        bcid: 'code128',
        text: '12345ASKJDKFD64356789',
        scaleX: 2,
        scaleY: 1,
        height: 25,
        textxalign: 'center',
      })
    }
  }, [])

  return (
    <div className="text-center">
      <div className="fw-bold display-7 mb-2">CSM-2020-08-08-014-1</div>
      <canvas ref={barcodeRef} />
    </div>
  )
})

export const VerticalBarcode = memo(() => {
  const barcodeRef = useRef(null)

  const Bwipjs = bwipjs as any

  useEffect(() => {
    if (barcodeRef.current) {
      const canvas = barcodeRef.current
      Bwipjs.toCanvas(canvas, {
        bcid: 'code128',
        text: 'CSM-2020-08-08-014-1-123456789',
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
})
