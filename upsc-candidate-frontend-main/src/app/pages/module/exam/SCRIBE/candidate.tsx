import React from 'react'
import './candidate.css'
import data from './data.json'

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
  const {
    name,
    rollNo,
    centre,
    disabilityCategory,
    writingLimitation,
    scribeStatus,
  } = data[0].candidate
  return (
    <>
      <div>
        <table className="table custom-table  ">
          <tbody>
            <tr>
              <td className="column-1">नाम Name</td>
              <td className="column-2">{name}</td>
            </tr>

            <tr>
              <td className="column-1"> अनुक्रमांक Roll No.</td>
              <td className="column-2">{rollNo}</td>
            </tr>
            <tr>
              <td className="column-1">लेखन सीमा Disability Category</td>
              <td className="column-2">{disabilityCategory}</td>
            </tr>
            <tr>
              <td className="column-1">लेखन सीमा Writing Limitation</td>
              <td className="column-2">{writingLimitation}</td>
            </tr>
            <tr>
              <td className="column-1">लेखन सीमा Scribe Status</td>
              <td className="column-2">{scribeStatus}</td>
            </tr>
            <tr>
              <td className="column-1"> केंद्र Centre</td>
              <td className="column-2">{centre}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CandidateTable
