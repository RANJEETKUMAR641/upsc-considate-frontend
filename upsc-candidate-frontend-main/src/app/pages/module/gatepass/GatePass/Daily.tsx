import { PassStyle } from './style/pass.style'
import { getItem } from 'utils/storage'
import QRCode from 'react-qr-code'

interface Props {
  data: object
}

function Daily({ data }) {
  const {
    pass_number,
    name,
    gender,
    mobile_no,
    building_room_number,
    purpose_of_visiting,
    current_date,
    time,
    uniqeid_type,
    unique_id,
    vehical_material,
    message_conveyed,
    host_officer,
  } = data
  return (
    <>
      <PassStyle id="printJS-form">
        <table width="100%" style={{ marginTop: '40px' }}>
          <tr>
            <td align="right" className="pe-5">
              Valid for the entry on: {current_date}
            </td>
          </tr>
          <tr>
            <td>
              <table width="600" align="center">
                <tr>
                  <td width="400">
                    <table width="100%">
                      <tr>
                        <td>
                          <strong style={{ fontSize: '14px' }}>
                            दैनिक आगंतुक पास/ Daily Visitor Pass
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table width="100%">
                            <tr>
                              <td width="140">
                                <strong>पास संख्या/ Pass No.:</strong>
                              </td>
                              <td>{pass_number}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="10" aria-label="height" />
                      </tr>
                      <tr>
                        <td style={{ borderBottom: '2px dashed #000000' }}>
                          <p className="HeadingSize">
                            <strong>आगंतुक विवरण/ Visitor Details</strong>
                          </p>
                        </td>
                      </tr>
                      <td height="4" aria-label="height" />
                      <tr>
                        <td>
                          <table width="100%">
                            <tr>
                              <td width="33%" valign="top">
                                <h4>नाम/ Name:</h4>
                                <p className="valueSize">
                                  <strong>{name}</strong>
                                </p>
                              </td>
                              <td width="33%" valign="top">
                                <h4>लिंग/ Gender:</h4>
                                <p className="valueSize">
                                  <strong>{gender}</strong>
                                </p>
                              </td>
                              <td width="33%" valign="top">
                                <h4>मोबाइल/ Mobile:</h4>
                                <p className="valueSize">
                                  <strong>{mobile_no}</strong>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td width="33%" valign="top">
                                <h4>आईडी विवरण/ ID Details:</h4>
                                <p>
                                  <strong>{uniqeid_type}</strong>
                                </p>
                              </td>
                              <td width="33%" valign="top">
                                <h4>आईडी नं/ ID No.:</h4>
                                <p className="valueSize">
                                  <strong>{unique_id}</strong>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td height="10" aria-label="height" />
                      </tr>
                      <tr>
                        <td style={{ borderBottom: '2px dashed #000000' }}>
                          <p className="HeadingSize">
                            <strong>मिलने के लिए/ To Meet</strong>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td height="4" aria-label="height" />
                      </tr>
                      <tr>
                        <td>
                          <table width="100%">
                            <tr>
                              <td width="33%" valign="top">
                                <h4>
                                  अनुरोध करने वाले अधिकारी का नाम
                                  <br />
                                  Host Officer Name:
                                </h4>
                                <p className="valueSize">
                                  <strong>{host_officer}</strong>
                                </p>
                              </td>
                              <td width="33%" valign="top">
                                <h4>
                                  कमरा नं./भवन
                                  <br />
                                  Room No./ Building:
                                </h4>
                                <p className="valueSize">
                                  <strong>{building_room_number}</strong>
                                </p>
                              </td>
                              <td width="33%" valign="top">
                                <h4>
                                  उ्देश्य/
                                  <br />
                                  Purpose:
                                </h4>
                                <p className="valueSize">
                                  <strong>{purpose_of_visiting}</strong>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td width="33%" valign="top">
                                <h4>Message Conveyed By:</h4>
                                <p className="valueSize">
                                  <strong>{message_conveyed}</strong>
                                </p>
                              </td>
                              <td>
                                <h4>Vehicle No. / Material:</h4>
                                <p className="valueSize">
                                  <strong>{vehical_material}</strong>
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table width="100%">
                            <tr>
                              <td width="33%">
                                <p>Exit Time:__________</p>
                              </td>
                              <td>
                                <p style={{ fontSize: '0.6rem' }}>
                                  जारीकर्ता प्राधिकारी/अधिकारी के हस्ताक्षर और
                                  मुहर <br />
                                  Signature Seal of Issuing Authority / Officer{' '}
                                  <br />
                                  Reg. Date: {current_date} {time}
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="10" aria-label="height" />
                  <td valign="top" width="190">
                    <table width="100%">
                      <tr>
                        <td>
                          <strong style={{ fontSize: '14px' }}>
                            Daily Visitor Pass
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td height="20" aria-label="height" />
                      </tr>
                      <tr>
                        <td>
                          <table
                            width="100%"
                            style={{ border: '1px solid #000000' }}
                            cellPadding={5}
                          >
                            <tr>
                              <td align="center" height="150">
                                <img
                                  src={getItem('photo')}
                                  alt=""
                                  className="img-fluid"
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            width="100%"
                            // style={{ border: '1px solid #000000' }}
                          >
                            <tr>
                              <td align="center" height="150">
                                <QRCode
                                  size={256}
                                  style={{
                                    height: 'auto',
                                    maxWidth: '60%',
                                    width: '60%',
                                  }}
                                  value={`Pass No. ${pass_number} , Name . ${name} , Mobile No. ${mobile_no} , Purpose ${purpose_of_visiting} , Host Officer ${host_officer}`}
                                  viewBox={'0 0 256 256'}
                                />
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </PassStyle>
    </>
  )
}

export default Daily
