import { Box, styled } from '@mui/material'
import { useState } from 'react'
import print1 from '../Details/print1.jpg'
import { Details } from '../Details/test'
import { Col, Row } from 'reactstrap'
import './style.css'

import VerticalBarcode, { BarcodeScanner } from './barcode'

export default function CardForm() {
  // const print = () => window.print();

  const MainWrapper = styled(Box)(() => ({
    backgroundImage: `url(${print1})`,
    height: '1680px',
    width: '1200px',
    position: 'relative',
  }))

  const itemsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(Details[0].candidateList.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentData = Details[0].candidateList.slice(startIndex, endIndex)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const appendZeroIfLessThanThree = (number) => {
    let numberStr = number.toString()

    if (numberStr.length < 3) {
      while (numberStr.length < 3) {
        numberStr = `0${numberStr}`
      }
    }

    return numberStr
  }

  const currentPageNo = endIndex / itemsPerPage

  return (
    <>
      {currentPage === totalPages ? (
        <MainWrapper>
          <div>
            <Row className="topSectionPadding ">
              <Col sm={3}>
                <div className="center bold">{Details[0].centre}</div>
                <div className="subcenter bold">{Details[0].sub_centre}</div>
                <div className="pageid">{Details[0].page_id}</div>
              </Col>
              <Col sm={3}>
                <div className="nameofExamination">
                  {Details[0].name_of_examination}
                </div>
                <div className="barid">
                  <BarcodeScanner />
                </div>
              </Col>
              {/* <Col sm={1}></Col> */}
              <Col sm={3} className="paddingLeft">
                <div className="pageNo bold">
                  {appendZeroIfLessThanThree(currentPageNo)}/
                  {appendZeroIfLessThanThree(totalPages)}
                </div>
                <div className="date bold">{Details[0].date}</div>
                <div className="time bold">{Details[0].time}</div>
                <div className="subject bold">{Details[0].subject}</div>
              </Col>
              <Col sm={2}>
                <div className="barvarid">
                  <VerticalBarcode />
                </div>
              </Col>
            </Row>

            <div className="lastPage">
              <Row>
                <div>Number of Candidates Admitted : 1</div>

                <div>Number of Candidates Present : </div>

                <div>Number of Candidates Absent : </div>

                <div>Number of Answer Sheets Sent : </div>
              </Row>
            </div>
          </div>
        </MainWrapper>
      ) : (
        <MainWrapper>
          <div>
            <Row className="topSectionPadding ">
              <Col sm={3}>
                <div className="center bold">{Details[0].centre}</div>
                <div className="subcenter bold">{Details[0].sub_centre}</div>
                <div className="pageid">{Details[0].page_id}</div>
              </Col>
              <Col sm={3}>
                <div className="nameofExamination">
                  {Details[0].name_of_examination}
                </div>
                <div className="barid">
                  <BarcodeScanner />
                </div>
              </Col>
              {/* <Col sm={1}></Col> */}
              <Col sm={3} className="paddingLeft">
                <div className="pageNo bold">
                  {appendZeroIfLessThanThree(currentPageNo)}/
                  {appendZeroIfLessThanThree(totalPages)}
                </div>
                <div className="date bold">{Details[0].date}</div>
                <div className="time bold">{Details[0].time}</div>
                <div className="subject bold">{Details[0].subject}</div>
              </Col>
              <Col sm={2}>
                <div className="barvarid">
                  <VerticalBarcode />
                </div>
              </Col>
            </Row>

            <div className="studentsDetails">
              <Row>
                {currentData.map((candidate) => (
                  <Col key={candidate.roll} sm={6}>
                    <div className="candidateBox">
                      <div className="candidateName">{candidate.name}</div>
                      <Row>
                        <Col sm={4} className="paddingTop">
                          <img
                            className="candidatePhoto"
                            src={candidate.photo}
                            alt="img"
                            height={120}
                            width={120}
                          />
                        </Col>

                        <Col sm={3}>
                          <div className="candidateRoll">{candidate.roll}</div>
                        </Col>
                      </Row>
                      <div className="candidateStatus">{candidate.status}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <strong className="specialTime">
              # This candidate is allocated special time
            </strong>
          </div>
        </MainWrapper>
      )}

      <Row>
        <Col sm={6}>
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </Col>
      </Row>
    </>
  )
}
