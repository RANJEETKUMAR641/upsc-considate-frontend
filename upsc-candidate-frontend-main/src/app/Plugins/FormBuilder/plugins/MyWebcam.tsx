import { useRef, useCallback, useState } from 'react'
import Webcam from 'react-webcam'
import { Button } from 'reactstrap'
import { MyWebCamStyle } from './pluginStyles/Mywebcam.style'
import { setItem } from 'utils/storage'
const videoConstraints = {
  width: 140,
  height: 140,
  facingMode: 'user',
}

export const MyWebcam = () => {
  const webcamRef = useRef<Webcam | null>(null)
  const [webPhoto, setWebPhoto] = useState<string>('')
  const [click, setClick] = useState<boolean>(false)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()
    setWebPhoto(imageSrc || '')
    setItem('photo', imageSrc)
    setClick(true)
  }, [webcamRef])

  const recapture = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setClick(false)
  }, [])

  return (
    <MyWebCamStyle>
      {click ? (
        <>
          <img src={webPhoto} alt="" />
          <Button className="capturebtn btn btn-info" onClick={recapture}>
            <i className="fa fa-camera" /> Re-Capture
          </Button>
        </>
      ) : (
        <>
          <Webcam
            className="img-fluid"
            width={250}
            height={250}
            audio={false}
            screenshotFormat="image/jpeg"
            ref={webcamRef}
            videoConstraints={videoConstraints}
          />
          <button className="capturebtn btn btn-info" onClick={capture}>
            <i className="fa fa-camera" /> Capture
          </button>
        </>
      )}
    </MyWebCamStyle>
  )
}
