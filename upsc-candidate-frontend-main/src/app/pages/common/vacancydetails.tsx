import { Table } from 'react-bootstrap'
import { get, map, reduce } from 'lodash'
import { PostStyle } from './pageStyles/Posts.style'
import { Container, Row, Col } from 'reactstrap'
import TabCollaps from 'app/components/TabCollaps'
import { useAxios } from 'utils/useAxios'
import { useCallback, useEffect } from 'react'
import { OverlayLoader } from 'app/components/OverlayLoader'
import ScrollBar from 'react-perfect-scrollbar'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

const VacancyDetails = ({ match }: any) => {
  const { mutate, res, isLoading } = useAxios({
    action: 'POST',
    url: '/api/service',
  }) as any

  useEffect(() => {
    mutate({
      data: {
        path: 'public',
        section: 'notices',
        action: 'post',
        post_id: get(match, 'params.id'),
      },
    } as any)
  }, [match])

  const vacancy = res?.post?.[0]

  const vacancyCount = res?.vacancy

  const totalCount = useCallback(() => {
    return reduce(
      vacancyCount,
      function (sum, n) {
        const total_gen = n.vacancy_f + n.vacancy_m + n.vacancy_o
        return sum + total_gen
      },
      0,
    )
  }, [vacancyCount])

  if (isLoading) return <OverlayLoader open className="post_notice" />

  return (
    <>
      <PostStyle>
        <Container fluid className="p-sm-0 pe-sm-2">
          <div className="vacancySection">
            <Card variant="outlined" className="" sx={{ border: 'none' }}>
              <CardContent className="p-0">
                <Typography
                  component="h2"
                  className="pt-3 pb-3 ps-3 mb-0 text-white"
                  style={{
                    background: 'var(--darkbg)',
                    fontWeight: '700',
                  }}
                >
                  {/* <NotificationsActiveIcon className="me-2 text-warning" /> */}
                  Vacancy Details
                </Typography>
                <div className="p-3">
                  <div className="vacancyData vacancydetail">
                    <Table className="table-bordered myTable">
                      <tbody>
                        <tr>
                          <td className="vacancyHeading">
                            <strong>Vacancy Number</strong>
                          </td>
                          <td>{vacancy?.post_id}</td>
                        </tr>
                        <tr>
                          <td className="vacancyHeading">
                            <strong>Post</strong>
                          </td>
                          <td>{vacancy?.post_name}</td>
                        </tr>
                        <tr>
                          <td className="vacancyHeading">
                            <strong>Classification</strong>
                          </td>
                          <td />
                        </tr>
                        <tr>
                          <td className="vacancyHeading">
                            <strong>Ministry/Administration</strong>
                          </td>
                          <td>{vacancy?.ministry}</td>
                        </tr>
                        <tr>
                          <td className="vacancyHeading">
                            <strong>Department/Office</strong>
                          </td>
                          <td>{vacancy?.department}</td>
                        </tr>
                        <tr>
                          <td className="vacancyHeading">
                            <strong>Organisation</strong>
                          </td>
                          <td>{vacancy?.organisation}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="vacancySection">
            <Card variant="outlined" className="" sx={{ border: 'none' }}>
              <CardContent className="p-0">
                <Typography
                  component="h2"
                  className="pt-3 pb-3 ps-3 mb-0 text-white"
                  style={{
                    background: 'var(--darkbg)',
                    fontWeight: '700',
                  }}
                >
                  {/* <NotificationsActiveIcon className="me-2 text-warning" /> */}
                  Number of Posts and Reservation
                </Typography>
                <div className="p-3">
                  <div className="vacancyData gategoryType vacancyTable">
                    <ScrollBar>
                      <Table className="table-bordered myTable">
                        <thead>
                          <tr>
                            <th />
                            {map(vacancyCount, (item) => (
                              <>
                                <th className="text-start text-uppercase">
                                  {item.community_code}
                                </th>
                              </>
                            ))}
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">Vacancy</td>
                            {map(vacancyCount, (item) => (
                              <td className="text-start" key={item}>
                                {item.vacancy}
                              </td>
                            ))}
                            <td>
                              {reduce(
                                vacancyCount,
                                function (sum, n) {
                                  return sum + n.vacancy
                                },
                                0,
                              )}
                            </td>
                          </tr>
                          {totalCount() > 0 && (
                            <tr>
                              <td className="text-start">Gander</td>
                              {map(vacancyCount, (item) => (
                                <td className="text-start" key={item}>
                                  {item.vacancy_f > 0 &&
                                    `Female (${item.vacancy_f})`}
                                  {item.vacancy_m > 0 &&
                                    (item.vacancy_f > 0
                                      ? `, Male (${item.vacancy_m})`
                                      : `Male (${item.vacancy_m})`)}
                                  {item.vacancy_o > 0 &&
                                    (item.vacancy_f > 0 || item.vacancy_m > 0
                                      ? `, Other (${item.vacancy_o})`
                                      : `Other (${item.vacancy_o})`)}
                                </td>
                              ))}
                              <td />
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </ScrollBar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="vacancySection">
            <Card variant="outlined" className="" sx={{ border: 'none' }}>
              <CardContent className="p-0">
                <Typography
                  component="h2"
                  className="pt-3 pb-3 ps-3 mb-0 text-white"
                  style={{
                    background: 'var(--darkbg)',
                    fontWeight: '700',
                  }}
                >
                  {/* <NotificationsActiveIcon className="me-2 text-warning" /> */}
                  PwBD Reservation Details
                </Typography>
                <div className="p-3">
                  <div className="vacancyData">
                    <Table className="table-bordered myTable">
                      <thead>
                        <tr>
                          <th>PwBD Type</th>
                          <th>PwBD Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Locomotor Disability including: Cerebral Palsy,
                            Leprosy Cured, Dwarfism, Acid Attack Victims
                            Muscular Dystrophy
                          </td>
                          <td>BL-Both legs affected but not arms</td>
                        </tr>
                        <tr>
                          <td>
                            Locomotor Disability including: Cerebral Palsy,
                            Leprosy Cured, Dwarfism, Acid Attack Victims
                            Muscular Dystrophy
                          </td>
                          <td>OL-One leg affected (R or L)</td>
                        </tr>
                        <tr>
                          <td>
                            Locomotor Disability including: Cerebral Palsy,
                            Leprosy Cured, Dwarfism, Acid Attack Victims
                            Muscular Dystrophy
                          </td>
                          <td>LC-Leprosy Cured</td>
                        </tr>
                        <tr>
                          <td>
                            Locomotor Disability including: Cerebral Palsy,
                            Leprosy Cured, Dwarfism, Acid Attack Victims
                            Muscular Dystrophy
                          </td>
                          <td>DW-Dwarfism</td>
                        </tr>
                        <tr>
                          <td>
                            Locomotor Disability including: Cerebral Palsy,
                            Leprosy Cured, Dwarfism, Acid Attack Victims
                            Muscular Dystrophy
                          </td>
                          <td>AAV-Acid Attack Victims</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="vacancySection">
            <Card variant="outlined" className="" sx={{ border: 'none' }}>
              <CardContent className="p-0">
                <Typography
                  component="h2"
                  className="pt-3 pb-3 ps-3 mb-0 text-white"
                  style={{
                    background: 'var(--darkbg)',
                    fontWeight: '700',
                  }}
                >
                  {/* <NotificationsActiveIcon className="me-2 text-warning" /> */}
                  Post Description
                </Typography>
                <div className="p-3">
                  <div className="vacancyData pos_des ps-4 pe-4">
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Pay Scale</strong>
                      </Col>
                      <Col className="colBorder">
                        <p>{vacancy?.pay_scale}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Age</strong>
                      </Col>
                      <Col className="colBorder">
                        <p>{vacancy?.age}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Essential Qualification (s)</strong>
                      </Col>
                      <Col className="colBorder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: vacancy?.essential_qualification,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Desirable Qualification (s)</strong>
                      </Col>
                      <Col className="colBorder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: vacancy?.desirable_qualification,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Duty(ies)</strong>
                      </Col>
                      <Col className="colBorder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: vacancy?.duty,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Probation</strong>
                      </Col>
                      <Col className="colBorder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: vacancy?.probation,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Headquarters</strong>
                      </Col>
                      <Col className="colBorder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: vacancy?.hq,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Other Details</strong>
                      </Col>
                      <Col className="colBorder">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: vacancy?.other_details,
                          }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3} md={2} className="colBorder">
                        <strong>Any Other Conditions</strong>
                      </Col>
                      <Col className="colBorder">
                        <p>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: vacancy?.any_other_condition,
                            }}
                          />
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </PostStyle>
    </>
  )
}

export default VacancyDetails
