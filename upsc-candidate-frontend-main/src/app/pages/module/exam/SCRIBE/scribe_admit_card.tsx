import React from 'react'
import { Row, Col } from 'reactstrap'
import { styled, Box } from '@mui/material'
import './main.css'
import CandidateData from './candidate'
import ScribeData from './scribe'
// import TimeTable from "./time_table";
import gandhiImage from './gandhi_image.png'
// import "bootstrap/dist/css/bootstrap.css";
// import QRCode from 'qrcode'
import { useEffect, useState } from 'react'
import data from './data.json'
const MainWrapper = styled(Box)(() => ({
  height: '1680px',
  width: '1200px',
  fontWeight: '500',
  padding: '70px',
  // border : "2px solid red"
}))

const Card = () => {
  const [qrCodeURL, setQRCodeURL] = useState('')
  const { message, dateOfExamination } = data[0]
  const generateQRCode = async () => {
    try {
      const qrDataURL = ''
      // const qrDataURL = await QRCode.toDataURL('https://example.com') // Replace with your desired QR code data
      setQRCodeURL(qrDataURL)
    } catch (error) {
      // console.error('Error generating QR code:', error)
    }
  }

  useEffect(() => {
    generateQRCode()
  }, [])
  return (
    <MainWrapper>
      <Row className="mb-2 ">
        <Col sm={2}>
          <img src={`${gandhiImage}`} height={200} width={200} alt="img" />
        </Col>
        <Col sm={10}>
          {' '}
          <Row className="fw-bold text-center pe-5">
            <div style={{ fontSize: '24px' }}>
              संघ लोक सेवा आयोग धौलपुर हाउस, शाहजहां रोड, नई दिल्ली - 110069
            </div>
            <div style={{ fontSize: '27px' }}>
              UNION PUBLIC SERVICE COMMISSION{' '}
            </div>
            <div className="font-twenty">
              Dholpur House, Shahjahan Road,New Delhi - 110069
            </div>
            <div className="font-twenty">
              स्क्राइब हेतु ई-प्रवेश पत्र e-Admit Card FOR THE SCRIBE
            </div>
            <div className="font-seventeen"> {message[0]}</div>

            <div className="font-seventeen"> {message[1]}</div>
            <div className="font-seventeen">
              परीक्षा की तारीख :- {dateOfExamination[0]}{' '}
            </div>
            <div className="font-seventeen">
              {' '}
              Date of Examination :- {dateOfExamination[1]}
            </div>
          </Row>
        </Col>
      </Row>

      <Row className="ps-3 pt-2 font-seventeen fw-bold">
        सिविल सेवा (प्रधान)परीक्षा, 2023 हेतु उम्मीदवार को एतद्वारा आयोग अपने
        लेखन सहायक (स्क्राइब) जिसका विवरण निम्ननुसार है, की सहायता लेने की
        अनुमति प्रदान की जाती है :-
      </Row>
      <Row className="ps-3  pt-2 font-seventeen">
        For Civil Services (Main) Examination, 2023 the following candidate is
        hereby allowed by the Commission to avail the assistance of his/her own
        scribe, as per the following :
      </Row>

      <div className="border border-dark text-center mb-1">
        <span className="font-sixteen fw-bold">उम्मीदवार का विवरण</span>/
        DETAILS OF THE CANDIDATE
      </div>
      <div className="border border-dark  border-start-0 ">
        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '70%' }}>
            <CandidateData />
          </div>
          <div
            style={{
              width: '30%',
            }}
          >
            <div className="text-center mt-3">Photo of the Candidate</div>
            <div
              className="border border-dark  "
              style={{
                height: '70%',
                width: '60%',
                margin: 'auto',
              }}
            />
          </div>
        </div>
      </div>
      <div className="border border-dark text-center mb-1 mt-1">
        <span className="font-sixteen fw-bold">स्क्राइब का विवरण </span> /
        DETAILS OF THE SCRIBE
      </div>
      <div className="border border-dark  border-start-0">
        <div className="box">
          <div style={{ width: '70%' }}>
            <ScribeData />
          </div>
          <div
            style={{
              width: '30%',
            }}
          >
            <div className="text-center mt-3">Photo of the Scribe</div>
            <div
              className="border border-dark  "
              style={{
                height: '70%',
                width: '60%',
                margin: 'auto',
              }}
            />
          </div>
        </div>
      </div>
      <div className="border border-dark mt-1 p-1 box">
        <div className="border border-dark border-top-0 border-start-0 border-bottom-0 p-2 ">
          {' '}
          परीक्षा पत्र जिसके लिए स्क्राइब का उपयोग किया जाना है Paper(s) for
          which scribe to be utilizedI
        </div>
        <div className="p-2"> {data[0].scribe.exams}</div>
      </div>
      <Row className="bottom-section ms-1 mt-2">
        <Row>
          <Row className="font-fifteen">
            उम्मीदवार सभी अनुदेशकों को ध्यानपूर्वक अध्ययन करें | कृपया यह नोट कर
            ले के किसी भी अनुदेश के उल्लंघन की स्थिति में उम्मीदवार के
            उम्मीदवारी रद्द की जा सकती है और साथ ही आयोग द्वारा
            उम्मीदवार/स्क्राइब के विरुद्ध अन्य प्रकार के कार्रवाई भी की जा सकती
            है| उम्मीदवार/स्क्राइब दोनों पर ही परीक्षा के नियमावली लागू होगी और
            उनका उल्लंघन किए जाने की स्थिति में उनके विरुद्ध परीक्षा नियमावली के
            अनुसार कार्यवाही की जाएगी |
          </Row>
          <Row className="font-twelve">
            THE CANDIDATES MUST STUDY ALL INSTRUCTIONS CAREFULLY. THEY MAY
            PLEASE NOTE THAT VIOLATION OF ANY OF THE INSTRUCTIONS SHALL RESULT
            IN CANCELLATION OF THE CANDIDATURE OF THE CANDIDATE, IN ADDITION TO
            ANY OTHER ACTION THAT MAY BE TAKEN BY THE COMMISSION AGAINST THE
            CANDIDATURE. BOTH THE CANDIDATE AND DESCRIBE SHALL BE SUBJECT TO THE
            RULES OF EXAMINATION, AND ACTION WILL BE TAKEN AGAINST THEM FOR
            VIOLATION OF THE SAME AS PER RULES OF THE EXAMINATION.
          </Row>
        </Row>
      </Row>

      <Row className="border-bottom  border-3 border-end-dark font-sixteen">
        <Col sm={3} className="qr-code">
          <div className="text-start">
            <img src={qrCodeURL} height={120} width={120} alt="QR Code" />
          </div>
        </Col>
        <Col sm={2} />
        <Col sm={6} className="text-end">
          <Row style={{ height: '100px' }} />
          परीक्षा नियंत्रक Controller of Examination
        </Col>
      </Row>
    </MainWrapper>
  )
}

export default Card
