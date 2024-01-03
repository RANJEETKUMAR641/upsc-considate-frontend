import { memo } from 'react'
import ac from './ac.jpg'
import { BarcodeScanner, VerticalBarcode } from './barcode'
import { styled, Box } from '@mui/material'
import data from './data.json'
import { Row, Col } from 'reactstrap'
import './style.css'

const index = memo(() => {
  const MainWrapper = styled(Box)(() => ({
    backgroundImage: `url(${ac})`,
    height: '1680px',
    width: '1200px',
    position: 'absolute',
    fontSize: '18px',
    // border : "1px solid red",
  }))

  const {
    name_of_examination,
    date_of_examination,
    subject,
    centre,
    sub_centre,
    no_of_registered_candidates,
    address,
  } = data[0]
  return (
    <MainWrapper>
      <div className="topSection fw-bold">
        <Row className="first-row">
          <div className="text-center">{name_of_examination}</div>
        </Row>
        <Row className="text-center">
          <Col>
            <div className="date-of-exam">{date_of_examination}</div>
          </Col>
          <Col>
            <div>{subject}</div>
          </Col>
        </Row>
      </div>
      <div className="bottomSection fw-bold">
        <Row className="thirdRow text-center">
          <Col>
            <div className="nameOfCentre">{centre}</div>
          </Col>
          <Col>
            <div>{no_of_registered_candidates}</div>
          </Col>
        </Row>
        <Row className="">
          <div className="subCentre">{sub_centre}</div>
        </Row>
        <Row className="">
          <Col sm={10}>
            <div className="address">{address}</div>
            <div className="barcode">
              <BarcodeScanner />
            </div>
          </Col>
          <Col sm={2}>
            <div className="vBarcode">
              <VerticalBarcode />
            </div>
          </Col>
        </Row>
      </div>
    </MainWrapper>
  )
})

export default index
