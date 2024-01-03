import React from 'react'
import './styles_ac.css'
import data from './data.json'

const CandidateTable = () => {
  const {
    name,
    changedName,
    rollNo,
    photoidentityCard,
    fatherName,
    motherName,
    centre,
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
              <td className="column-1">परिवर्तित नाम Changed Name</td>
              <td className="column-2">{changedName}</td>
            </tr>
            <tr>
              <td className="column-1"> अनुक्रमांक Roll No.</td>
              <td className="column-2">{rollNo}</td>
            </tr>
            <tr>
              <td className="column-1">पहचान पत्र Photo Identity Card</td>
              <td className="column-2">{photoidentityCard}</td>
            </tr>
            <tr>
              <td className="column-1">पिता का नाम Father's Name</td>
              <td className="column-2">{fatherName}</td>
            </tr>
            <tr>
              <td className="column-1"> माता का नाम Mother's Name</td>
              <td className="column-2">{motherName}</td>
            </tr>
            <tr>
              <td className="column-1"> केंद्र Centre</td>
              <td className="column-2">{centre}</td>
            </tr>
            {/* {fieldNames.map((fieldName, index) => (
              <tr key={index}>
              <td className="column-1">{fieldName}</td>
              <td className="column-2">
                {
                  data[0].candidate[
                    fieldName.toLowerCase().replace(/ /g, "_")
                  ]
                }
              </td>
            </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CandidateTable
