import React from 'react'
import './candidate.css'
import data from './data.json'
import './scribe.css'

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

// const CandidateTable: React.FC<{candidate: Candidate}> = ({ candidate }) => {
const CandidateTable = () => {
  const { name, address } = data[0].scribe
  return (
    <>
      <div>
        <table className="table custom-table  ">
          <tbody>
            <tr>
              <td className="column-1">स्क्राइब का नाम Name of the Scribe</td>
              <td className="column-2">{name}</td>
            </tr>

            <tr>
              <td className="column-1 address-height">
                {' '}
                स्क्राइब का अनुक्रमांक Address of the Scribe
              </td>
              <td className="column-2">{address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CandidateTable
