import { PassStyle } from './style/pass.style'
import { getItem } from 'utils/storage'
import QRCode from 'react-qr-code'
import { Col, Row } from 'reactstrap'
interface Props {
  data: any
}

function Monthly({ data }) {
  const {
    pass_number,
    name,
    gender,
    mobile_no,
    purpose_of_visiting,
    current_date,
    time,
    // uniqeid_type,
    // unique_id,
    // vehical_material,
    // message_conveyed,
    // host_officer,
    designation,
    associate_with,
    // authority,
    start_date,
    end_date,
  } = data
  return (
    <PassStyle id="printJS-form">
      <div className="smallPass">
        <Row className="g-2">
          <Col style={{ width: '100px' }}>
            <div style={{ border: '1px solid #000' }} className="p-1">
              <QRCode
                size={256}
                style={{
                  height: 'auto',
                  maxWidth: '100%',
                  width: '100%',
                }}
                value={`Pass No. ${pass_number} , Name . ${name} , Mobile No. ${mobile_no} , Purpose: ${purpose_of_visiting}`}
                viewBox={'0 0 256 256'}
              />
            </div>
          </Col>
          <Col style={{ flex: '0 0 auto', width: '79px' }}>
            <p className=" topHeading">पास संख्या/ Pass No.:</p>
            <p className="m-0 smalltopvalue">
              <strong>{pass_number}</strong>
            </p>
          </Col>
          <Col>
            <p className="text-center topHeading">Valid From:</p>
            <p className="text-center smalltopvalue">
              <strong>{start_date}</strong>
            </p>
          </Col>
          <Col>
            <p className="text-center topHeading">Valid Upto:</p>
            <p className="text-center smalltopvalue">
              <strong>{end_date}</strong>
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={8}>
            <Row>
              <Col>
                <p>नाम/ Name:</p>
              </Col>
              <Col>
                <p>
                  <strong>{name}</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>लिंग/ Gender:</p>
              </Col>
              <Col>
                <p>{gender}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>मोबाइल/ Mobile:</p>
              </Col>
              <Col>
                <p>{mobile_no}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>पद/ Designation:</p>
              </Col>
              <Col>
                <p>
                  <strong>{designation}</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>उद्देश्य/ Purpose:</p>
              </Col>
              <Col>
                <p>{purpose_of_visiting}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  संबंधित/
                  <br />
                  Associated With:
                </p>
              </Col>
              <Col>
                <p>{associate_with}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <div className="p-1" style={{ border: '1px solid #000' }}>
              <img src={getItem('photo')} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={5}>
            <p className="">
              <br />
              <br />
              Signature of Holder
            </p>
          </Col>
          <Col>
            <p className="text-end">
              {' '}
              Signature <br />
              (Issuing Authority / Officer)
              <br />
              Reg. Date: {current_date} {time}
            </p>
          </Col>
        </Row>
      </div>
    </PassStyle>
  )
}
export default Monthly
