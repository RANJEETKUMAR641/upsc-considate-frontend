import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import InfoIcon from '@mui/icons-material/Info'

import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'

import QuizIcon from '@mui/icons-material/Quiz'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import PersonIcon from '@mui/icons-material/Person'
import GroupsIcon from '@mui/icons-material/Groups'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import { NavLink } from 'react-router-dom'
import { map } from 'lodash'
import { LeftMenusStyle } from '../pageStyles/LeftMenus.style'

// import NewsTicker from 'react-advanced-news-ticker'

const Links = [
  {
    id: 1,
    name: 'Login',
    link: '/candidate/login',
    Icon: PersonIcon,
  },
  {
    id: 2,
    name: 'One Time Registration',
    link: '/candidate/otr',
    Icon: HowToRegIcon,
  },
  {
    id: 3,
    name: 'Instructions for OTR',
    link: '/candidate/instr_otr',
    Icon: IntegrationInstructionsIcon,
  },
  {
    id: 4,
    name: 'FAQs',
    link: '/candidate/faq',
    Icon: QuizIcon,
  },
]

export default function ImprtantLink() {
  return (
    <LeftMenusStyle>
      <Card
        variant="outlined"
        sx={{ border: 'none' }}
        className="d-none d-sm-block mb-3"
      >
        <CardContent className="p-0">
          <Typography
            component="h2"
            className="pt-3 pb-3 ps-3 mb-0 text-white"
            style={{
              background: 'var(--darkbg)',
              fontWeight: '700',
            }}
          >
            <InfoIcon className="me-2 text-warning" />
            Important Links
          </Typography>
          <div className="p-3">
            <ul className="mb-0 leftMenus">
              {map(Links, ({ id, name, link, Icon, pathname }: any) => {
                if (pathname) {
                  return (
                    <NavLink
                      to={{ pathname: pathname }}
                      activeClassName="active"
                      target="_blank"
                    >
                      <span className="menuIcons">
                        <Icon />
                      </span>{' '}
                      <span className="menulink">{name}</span>
                    </NavLink>
                  )
                }
                return (
                  <li key={id}>
                    <NavLink to={link || '/'} activeClassName="active">
                      <span className="menuIcons">
                        <Icon />
                      </span>{' '}
                      <span className="menulink">{name}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </CardContent>
      </Card>
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
            <NotificationsActiveIcon className="me-2 text-warning" />
            Notification
          </Typography>
          <div className="p-3">
            <ul className="mb-0 leftMenus">
              <li>
                <NavLink to="/posts" activeClassName="active">
                  <span className="menuIcons">
                    <GroupsIcon />
                  </span>{' '}
                  <span className="menulink">Recruitment</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/examination" activeClassName="active">
                  <span className="menuIcons">
                    <ContentPasteIcon />
                  </span>{' '}
                  <span className="menulink">Examination</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      {/* <Card variant="outlined" className="mt-3">
        <CardContent className="p-0">
          <Typography
            component="h2"
            className="pt-3 pb-3 ps-3 mb-0 text-white"
            style={{
              background: 'var(--darkbg)',
              fontWeight: '700',
            }}
          >
            <InfoIcon className="me-2 text-warning" />
            News and Events{' '}
            <span className="viewMore">
              <NavLink to="/news-and-events">
                <OpenInNewIcon fontSize="small" />
              </NavLink>
            </span>
          </Typography>
          <div className="p-3  pe-5">
            <div className="newsbox">
              <div className="newsArrows">
                <span className="upicon">
                  <i
                    className="fa fa-caret-up"
                    id="nt-example1-prev"
                    onClick={() => {
                      ref.current.movePrev()
                      ref.current.resetInterval()
                    }}
                  />
                </span>
                <span className="downicon">
                  <i
                    className="fa fa-caret-down"
                    fontSize="small"
                    id="nt-example1-next"
                    onClick={() => {
                      ref.current.moveNext()
                      ref.current.resetInterval()
                    }}
                  />
                </span>
              </div>

              <NewsTicker
                ref={ref}
                rowHeight={90}
                maxRows={2}
                duration={2000}
                id="nt-example1"
              >
                <div>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">09/01/2020</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Pre-Litigation Committee
                    </a>
                  </p>
                </div>
                <div>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">12/05/2023</span>
                  </div>
                  <p>
                    <a href="#">
                      Appointment Letter regarding LDC 2018 (01 Candidate)
                    </a>
                  </p>
                </div>
                <div>
                  <div className="datebox">
                    <span className="new">New</span>
                    <span className="date">01/05/2023</span>
                  </div>
                  <p>
                    <a href="#">
                      New Icon15/12/2023 Result Preamble and Cut off marks (Main
                      List) for Sr. Teacher (Sec. Edu.) Comp. Exam - 2022
                      (Hindi)
                    </a>
                  </p>
                </div>
                <div>
                  <div className="datebox">
                    <span className="date">01/05/2023</span>
                  </div>
                  <p>
                    <a href="#">
                      Press Note Regarding Ex-Servicemen and PH candidates for
                      various advertisements.
                    </a>
                  </p>
                </div>
                <div>
                  <div className="datebox">
                    <span className="date">01/05/2023</span>
                  </div>
                  <p>
                    <a href="#">
                      10/02/2022 Last Date of Application Submission for Ground
                      Water Dept. Recruitment 2022 is 02.03.2022
                    </a>
                  </p>
                </div>
              </NewsTicker>
              {/* <PerfectScrollbar>
                <ul>
                  <li>
                    <div className="datebox">
                      <span className="new">New</span>
                      <span className="date">09/01/2020</span>
                    </div>
                    <p>Press Note Regarding Pre-Litigation Committee</p>
                  </li>
                  <li>
                    <div className="datebox">
                      <span className="new">New</span>
                      <span className="date">12/05/2023</span>
                    </div>
                    <p>Appointment Letter regarding LDC 2018 (01 Candidate)</p>
                  </li>
                  <li>
                    <div className="datebox">
                      <span className="new">New</span>
                      <span className="date">01/05/2023</span>
                    </div>
                    <p>
                      New Icon15/12/2023 Result Preamble and Cut off marks (Main
                      List) for Sr. Teacher (Sec. Edu.) Comp. Exam - 2022
                      (Hindi)
                    </p>
                  </li>
                  <li>
                    <div className="datebox">
                      <span className="date">01/05/2023</span>
                    </div>
                    <p>
                      Press Note Regarding Ex-Servicemen and PH candidates for
                      various advertisements.
                    </p>
                  </li>
                  <li>
                    <div className="datebox">
                      <span className="date">01/05/2023</span>
                    </div>
                    <p>
                      10/02/2022 Last Date of Application Submission for Ground
                      Water Dept. Recruitment 2022 is 02.03.2022
                    </p>
                  </li>
                </ul>
              </PerfectScrollbar>
            </div>

          </div>
        </CardContent>
      </Card> */}
    </LeftMenusStyle>
  )
}
