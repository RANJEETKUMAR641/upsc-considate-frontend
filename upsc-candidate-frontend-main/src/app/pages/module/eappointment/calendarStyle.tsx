//import styled from "styled-components";
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

export const Wrapper = styled(Box)`
  border: 1px solid grey;
  height: auto;
  //height : 1100px;
`

// export const StyledEvent = styled.div`
//   // background: ${({ bgColor :any}) => bgColor};
//   // background:blue;
//   color: white;
//   text-align: left !important;
//   padding: 2px 10px;
//   margin: 0 2px;
//   border-radius: 10px;
//   font-size: 13px;
//   cursor: move;
//   text-transform: capitalize;
// `;
export const StyledBox = styled(Box)`
  //height: fit-content;
  height: 10px;

  background: #139ecd;
  color: white;
  text-align: left !important;
  padding: 6px 10px;
  margin: 0 2px;

  margin-bottom: 4px;
  border-radius: 5px;
  font-size: 11px;
  cursor: move;
  text-transform: capitalize;
  // white-space: nowrap;
  overflow: hidden;
  //text-overflow: ellipsis;
`

export const SevenColGrid2 = styled(Box)`
  display: grid;
  height: fit-content;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid black;
  background: #f9f9fc;
`
export const SevenColGrid = styled(Box)`
  display: grid;
  height: 78vh;
  grid-template-columns: repeat(7, 1fr);
`

export const HeadDays = styled(Box)`
  text-align: center;
  font-family: Nunito;
  display: grid;
  font-weight: 700;
  // border: 1px solid white;
  height: 30px;
  padding: 5px;
  align-items: center;
  // background:#F9F9FC;
  // color :#4d4646;

  background: #4b76a4;
  color: white;
`

export const DateControls = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  align-items: center;

  ion-icon {
    font-size: 1.6rem;
    cursor: pointer;
  }
`

export const SeeMore = styled(Typography)`
  font-size: 12px;
  padding: 0 5px;
  margin-bottom: 0;
  cursor: pointer;
`

export const PortalWrapper = styled(Box)`
  background: white;
  position: absolute;
  width: 30%;
  height: fit-content;
  top: 50%;
  left: 50%;
  /* border: 1px solid; */
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  // padding: 40px;
`
