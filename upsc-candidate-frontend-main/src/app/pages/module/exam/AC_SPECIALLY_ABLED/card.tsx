import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { styled, Box } from '@mui/material'
import './card.css'
import CandidateData from './candidateData'
import TimeTable from './time_table'
import gandhiImage from './gandhi_image.png'
// import QRCode from 'qrcode'
import data from './data.json'

// interface Candidate {
//   name: string;

//   rollNo: string;
//   photoidentityCard: string;
//   fatherName: string;
//   motherName: string;
//   centre: string;
//   disabilityCategory: string;
//   writingLimitation: string;
// }

// interface Data {
//   message: string[];
//   dateOfExamination: string[];
//   candidate: Candidate;
//   mediumOfExam: { [key: string]: string };
//   scribe: { [key: string]: string };
//   timetableData: any; // Define the type of timetableData
// }

const MainWrapper = styled(Box)(() => ({
  height: '1680px',
  width: '1200px',
  fontWeight: '500',
  padding: '70px',
  // border: "2px solid red"
}))

const Card = () => {
  const [qrCodeURL, setQRCodeURL] = useState()
  const { message, dateOfExamination, mediumOfExam, scribe, timetableData } =
    data[0]

  const generateQRCode = async () => {
    try {
      // const qrDataURL = await QRCode.toDataURL('https://example.com') // Replace with your desired QR code data
      const qrDataURL = '' as any
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
      <Container fluid>
        <Row className="mb-2 ">
          <Col sm={2}>
            <img src={gandhiImage} height={200} width={200} alt="Gandhi" />
          </Col>
          <Col sm={10}>
            <Row className="fw-bold text-center pe-5">
              <div style={{ fontSize: '24px' }}>
                संघ लोक सेवा आयोग धौलपुर हाउस, शाहजहां रोड, नई दिल्ली - 110069
              </div>
              <div style={{ fontSize: '27px' }}>
                UNION PUBLIC SERVICE COMMISSION
              </div>
              <div className="font-twenty">
                Dholpur House, Shahjahan Road,New Delhi - 110069
              </div>
              <div className="font-twenty">ई-प्रवेश पत्र e-Admit Card</div>
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

        <div className="border border-dark border-bottom-0 border-start-0">
          <div style={{ width: '70%' }}>
            <CandidateData />
          </div>
        </div>
        <Row>
          <Row className="ms-0">
            <Col className=" border border-dark p-2">
              <div className="font-sixteen">
                परीक्षा का माध्यम Medium of Exam P-I to P-V :
                {mediumOfExam['p1-5']}
              </div>
            </Col>
            <Col className="border border-dark p-2">
              {' '}
              <div className="font-sixteen">
                परीक्षा का माध्यम Medium of Exam P-VI to P-VII :{' '}
                {mediumOfExam['p6-7']}
              </div>{' '}
            </Col>
          </Row>
          <Row className="ms-0">
            <Col className=" border border-dark border-top-0 p-2 ">
              <div className="font-sixteen ">
                {' '}
                स्क्रइब की आवश्यकता Scribe Required : {scribe['scribeRequired']}
              </div>
            </Col>
            <Col className="border border-dark border-top-0   p-2  ">
              <div className="font-sixteen ">
                स्क्रइब स्थिति Scribe Status : {scribe['scribeStatus']}
              </div>
            </Col>
          </Row>
        </Row>

        <Row className="mt-2">
          <TimeTable timetableData={timetableData} />
        </Row>

        <Row className="bottom-section ">
          <Row>
            <Col sm={1} style={{ width: '3%' }}>
              1.
            </Col>
            <Col>
              <Row className="font-fifteen">
                परीक्षा स्थल पर प्रवेश करने के लिए इसकी प्रवेश पत्र ( प्रिंट आउट
                ) को फोटो पहचान पत्र (मूल) ,जिसका क्रमांक ऊपर अंकित है एवं ब्लैक
                बॉल पॉइंट पेन, सहित प्रत्येक सत्र में साथ लाएं | ई प्रवेश पत्र
                को उम्मीदवार सुरक्षित रखें |
              </Row>
              <Row className="font-twelve">
                BRING THIS E·ADMiT CARD (PRINT OUT), ALONG WITH THE (ORIGINAL)
                PHOTO IDENTITY CARD, AS MENTIONED ABOVE AND BLACK BALL POINT PEN
                IN EACH SESSION TO SECURE ADMISSION TO EXAMINATION HALL. E ADMIT
                CARD MUST BE PRESERVED BY THE CANDIDATE.
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={1} style={{ width: '3%' }}>
              2.
            </Col>
            <Col>
              <Row className="font-fifteen">
                कृपया नोट करें की परीक्षा के प्रारंभ होने के 10 मिनट पहले
                परीक्षा स्थल पर प्रवेश बंद कर दिया जाएगा अर्थात पूर्वाह्न सत्र
                में 08:50 बजे तथा अपराह्न सत्र में 1:50 बजे प्रवेश बंद होने के
                पश्चात परीक्षा स्थल पर किसी भी उम्मीदवार को अंदर जाने की अनुमति
                नहीं दी जाएगी ।
              </Row>
              <Row className="font-twelve">
                PLEASE NOTE THAT ENTRY INTO THE EXAMINATION VENUE SHALL BE
                CLOSED 10 MINUTES BEFORE THE SCHEDULED COMMENCEMENT OF THE
                EXAMINATION i.e. 08:50 AM FOR THE FORENOON SESSION AND 01:5O PM
                FOR THE AFERNOON SESSION. NO CANDIDATE SHALL BE ALLOWED THE
                ENTRY INTO THE EXAMINATION VENUE AFTER CLOSURE OF THE ENTRY.
              </Row>
            </Col>
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
      </Container>
    </MainWrapper>
  )
}

export default Card
