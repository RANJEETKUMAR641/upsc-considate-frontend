import React, { Fragment } from 'react'
import { map, toString } from 'lodash'

import { useEffect } from 'react'
import TabCollaps from 'app/components/TabCollaps'

import { DataGrid } from '@mui/x-data-grid'
import { Link, NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { PostStyle } from './pageStyles/Posts.style'
import { PdfIcon } from './pageStyles/pdfIcon'
import Box from '@mui/material/Box'
import { useAxios } from 'utils/useAxios'
import { OverlayLoader } from 'app/components/OverlayLoader'
import moment from 'moment'
const columns = [
  {
    field: 'vacancy_no',
    headerName: 'रिक्ति संख्या / Vacancy No.',
    width: 300,
    cellClassName: 'posts_id',
    renderCell: (params: any) => (
      <strong>{toString(params?.row?.post_id)}</strong>
    ),
  },
  {
    field: 'post_name',
    headerName: 'पद नाम / Post Name (For more details, click on post name)	',
    flex: 1,
    renderCell: (params) => (
      <Link to={`/post-details/${params?.row?.post_id}`}>
        {toString(params?.value)}
      </Link>
    ),
    cellClassName: 'postsName',
  },
  {
    field: 'apply_link',
    headerName: 'आवेदन लिंक / Apply Link',
    width: 300,
    renderCell: (params) => (
      <Link to={`/terms-and-conditions?post_id=${params?.row?.post_id}`}>
        आवेदन करें / Apply Now
      </Link>
    ),
    cellClassName: 'applybtn',
  },
]

const columnsMobile = [
  {
    field: 'vacancy_no',
    headerName: 'रिक्ति संख्या / Vacancy No.',
    width: 300,
    cellClassName: 'postsNo',
    renderCell: (params) => <strong>{toString(params?.row?.post_id)}</strong>,
  },
  {
    field: 'post_name',
    headerName: 'पद नाम / Post Name (For more details, click on post name)	',
    flex: 1,
    renderCell: (params) => (
      <Link to={`/post-details/${params?.row?.post_id}`}>
        {toString(params?.value)}
      </Link>
    ),
    cellClassName: 'postsName',
  },
  {
    field: 'apply_link',
    headerName: 'आवेदन लिंक / Apply Link',
    width: 300,
    renderCell: () => (
      <Link to="/terms-and-conditions">आवेदन करें / Apply Now</Link>
    ),
    cellClassName: 'applybtn',
  },
]

function Posts() {
  const { mutate, res, isLoading } = useAxios({
    action: 'POST',
    url: '/api/service',
  })
  useEffect(() => {
    mutate({
      path: 'public',
      section: 'notices',
      action: 'posts',
      notice_type: 'o',
    } as any)
  }, [])

  if (isLoading) return <OverlayLoader open className="posts" />

  return (
    <>
      <PostStyle>
        <Fragment>
          <Container fluid className="p-sm-0 pe-sm-2">
            <Row className="g-0">
              <Col sm={4}>
                <a
                  href="https://upsconline.nic.in/ora/oraauth/candidate/Instructionscandidates.pdf"
                  target="_blank"
                  className="postTopBtn b-rightBtn d-block bg-focus text-light text-center"
                >
                  {' '}
                  आवेदन भरने के लिए निर्देश <br /> Instructions for filling
                  Application
                </a>
              </Col>
              <Col sm={4}>
                <a
                  href="https://upsconline.nic.in/ora/oraauth/candidate/ORA-Recruitment_Performa.pdf"
                  target="_blank"
                  className="postTopBtn b-rightBtn d-block bg-focus  text-light  text-center"
                >
                  सामान्य तकनीकी समस्याएं <br />
                  General Technical Issues
                </a>
              </Col>
              <Col sm={4}>
                <NavLink
                  to="candidate/faq"
                  className="postTopBtn  d-block bg-focus  text-light  text-center"
                >
                  सामान्य प्रश्न <br />
                  Frequently Asked Questions(FAQ)
                </NavLink>
              </Col>
            </Row>

            {map(res, ({ notice_id, posts, advt_no, close_dt }) => (
              <React.Fragment key={notice_id}>
                <Row className="mt-4">
                  <Col>
                    <TabCollaps
                      title={`संघ लोक सेवा आयोग निम्नलिखित पदों हेतु आवेदन आमंत्रित करता
          है / Union Public Service Commission invites Applications
          for the following Posts:`}
                      opentab={true}
                      tabhandle={false}
                      padding={false}
                      data={
                        <div className="headingBox p-3 text-center">
                          <p>
                            विज्ञापन संख्या / Advertisement No. : {advt_no}
                            <a
                              href="https://upsconline.nic.in/ora/oraauth/candidate/download_ad.php?id=MzU3XNUJPC7IDLCIKAN1DXYOKAAIAQIXHAKAS63XSVQCC52GF9ZCML"
                              target="_blank"
                              className="pdfIcon"
                            >
                              <PdfIcon />
                            </a>
                          </p>
                          <p>
                            निर्धारित अंतिम तिथि / Prescribed Last Date :
                            {moment(close_dt).format('DD-MM-YYYY')}
                          </p>
                        </div>
                      }
                    />
                    {/* <div className="postsHeading p-3">
                  <p className="m-0"></p>
                </div> */}
                  </Col>
                </Row>
                <div>
                  <div>
                    <div>
                      <Box
                        sx={{
                          display: { xl: 'none', md: 'none', xs: 'block' },
                        }}
                      >
                        <DataGrid
                          autoHeight
                          rows={posts}
                          columns={columnsMobile}
                          hideFooterPagination
                          hideFooter
                          getRowId={(item) => `${item?.post_id}`}
                          rowHeight={30}
                          columnHeaderHeight={34}
                          rowSpacingType="border"
                          showCellVerticalBorder={true}
                          showColumnVerticalBorder={true}
                          columnVisibilityModel={{
                            // Hide columns status and traderName, the other columns will remain visible
                            post_name: false,
                            apply_link: false,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: { xl: 'block', md: 'block', xs: 'none' },
                        }}
                      >
                        <DataGrid
                          autoHeight
                          rows={posts}
                          columns={columns}
                          getRowId={(item) => `${item?.post_id}`}
                          hideFooterPagination
                          hideFooter
                          sx={{ width: '100%' }}
                          rowHeight={30}
                          columnHeaderHeight={34}
                          rowSpacingType="border"
                          showCellVerticalBorder={true}
                          showColumnVerticalBorder={true}
                        />
                      </Box>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </Container>
        </Fragment>
      </PostStyle>
    </>
  )
}

export default Posts
