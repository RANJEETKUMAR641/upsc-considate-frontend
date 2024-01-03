/* eslint-disable */

import { Suspense } from 'react'
import { OverlayLoader } from 'app/components/OverlayLoader'
import { LoginNewStyle } from './pageStyles/LoginNew'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import { NavLink } from 'react-router-dom'
import ArticleIcon from '@mui/icons-material/Article'
import { NewStyle } from './pageStyles/News.Style'

function News() {
  return (
    <Suspense fallback={<OverlayLoader open className="" />}>
      <NewStyle>
        <Card variant="outlined">
          <CardContent className="p-0">
            <Typography
              component="h2"
              className="pt-3 pb-3 ps-3 mb-0 text-white"
              style={{
                background: 'var(--darkbg)',
                fontWeight: '700',
              }}
            >
              <ArticleIcon className="me-2 text-warning" />
              Important Links
            </Typography>
            <div className="p-3 newsbox">
              <ul className="mb-0 ">
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Pre-Litigation Committee
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Appointment Letter regarding LDC 2018 (01 Candidate)
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      New Icon15/12/2023 Result Preamble and Cut off marks (Main
                      List) for Sr. Teacher (Sec. Edu.) Comp. Exam - 2022
                      (Hindi)
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Ex-Servicemen and PH candidates for
                      various advertisements.
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Last Date of Application Submission for Ground Water Dept.
                      Recruitment 2022 is 02.03.2022
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Pre-Litigation Committee
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Appointment Letter regarding LDC 2018 (01 Candidate)
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      New Icon15/12/2023 Result Preamble and Cut off marks (Main
                      List) for Sr. Teacher (Sec. Edu.) Comp. Exam - 2022
                      (Hindi)
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Ex-Servicemen and PH candidates for
                      various advertisements.
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Last Date of Application Submission for Ground Water Dept.
                      Recruitment 2022 is 02.03.2022
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Pre-Litigation Committee
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Appointment Letter regarding LDC 2018 (01 Candidate)
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      New Icon15/12/2023 Result Preamble and Cut off marks (Main
                      List) for Sr. Teacher (Sec. Edu.) Comp. Exam - 2022
                      (Hindi)
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Ex-Servicemen and PH candidates for
                      various advertisements.
                    </a>
                  </p>
                </li>
                <li>
                  <div className="datebox">
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Last Date of Application Submission for Ground Water Dept.
                      Recruitment 2022 is 02.03.2022
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </NewStyle>
    </Suspense>
  )
}

export default News
