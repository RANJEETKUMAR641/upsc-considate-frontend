import { useState } from 'react'

import { useMediaQuery } from '@mui/material'
import { Box } from '@mui/material'
import { StyledBox } from './calendarStyle'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import {
  SevenColGrid2,
  SevenColGrid,
  Wrapper,
  HeadDays,
  DateControls,
} from './calendarStyle'
import { DAYS, DAYS2, MOCKAPPS2 } from './utils/conts'
import {
  datesAreOnSameDay,
  getMonthYear,
  getSortedDays,
  nextMonth,
  prevMonth,
} from './utils/functions'

const Calender = () => {
  const px900 = useMediaQuery('(max-width:900px)')
  const weekdays = px900 ? DAYS2 : DAYS
  const [edit] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [events] = useState(MOCKAPPS2)
  const [, setShowPortal] = useState(false)
  const [setPortalData] = useState<any>()

  const [menuItem] = useState('Ministry of Home Affairs')
  const [, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

  // useEffect(() => {
  //   async function fetchMinistryData() {}

  //   async function fetchAllAppointments() {}
  //   fetchMinistryData()
  //   fetchAllAppointments()
  // }, [edit])

  const handleOnClickEvent = (event: any) => {
    setShowPortal(true)
    setPortalData(event)
    handleOpen()
  }

  return (
    <>
      {edit ? (
        <></>
      ) : (
        <>
          <Box sx={{ width: 'auto' }}>
            <Box
              sx={{
                width: '60%',
                margin: 'auto',

                marginTop: '20px',
              }}
            >
              <Wrapper sx={{ borderRadius: '5px', marginBottom: '10px' }}>
                <DateControls>
                  <ArrowLeftIcon
                    sx={{ background: '#dfdfdf', borderRadius: '12px' }}
                    onClick={() => prevMonth(currentDate, setCurrentDate)}
                    name="arrow-back-circle-outline"
                  />
                  {getMonthYear(currentDate)}

                  <ArrowRightIcon
                    sx={{ background: '#dfdfdf', borderRadius: '12px' }}
                    onClick={() => nextMonth(currentDate, setCurrentDate)}
                    name="arrow-forward-circle-outline"
                  />
                </DateControls>

                <SevenColGrid2>
                  {weekdays.map((day) => (
                    <HeadDays
                      sx={{
                        fontSize: '9px',
                      }}
                    >
                      {day}
                    </HeadDays>
                  ))}
                </SevenColGrid2>

                <SevenColGrid
                  sx={{ border: '1px solid grey', height: 'fit-content' }}
                >
                  {getSortedDays(currentDate).map((day) => (
                    <Box
                      id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
                      sx={{
                        // border: "0.2px solid #cdcdcd",
                        borderWidth: '1px',
                        borderColor: '#e7e7e7',
                        borderStyle: 'solid',
                        '&:hover': {
                          backgroundColor: '#d5f3fd',
                        },
                        height: '151px',
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: 'right',
                          paddingRight: '15px',
                        }}
                      >
                        {day}
                      </Box>

                      {events
                        .filter((ev: any) => {
                          return ev?.select_ministry === menuItem
                        })
                        .map((ev: any) => {
                          return (
                            datesAreOnSameDay(
                              new Date(ev.appointment_date),
                              new Date(
                                currentDate.getFullYear(),
                                currentDate.getMonth(),
                                day,
                              ),
                            ) && (
                              <StyledBox
                                onClick={() => handleOnClickEvent(ev)}
                                sx={{ cursor: 'pointer' }}
                              >
                                {
                                  // ev?.start.getHours() +
                                  //   ":" +
                                  //   ev?.start.getMinutes() +
                                  //   "-" +
                                  //   ev?.end.getHours() +
                                  //   ":" +
                                  //   ev?.end.getMinutes() +
                                  //   " " +
                                  // ev?.appointment_time +
                                  //   ' ' +
                                  //   ev?.select_ministry +
                                  //   ' ' +
                                  //   ev?.first_name +
                                  //   ' ' +
                                  //   ev?.last_name
                                }
                              </StyledBox>
                            )
                          )
                        })}
                    </Box>
                  ))}
                </SevenColGrid>
              </Wrapper>
            </Box>
          </Box>
        </>
      )}
    </>
  )
}

export default Calender
