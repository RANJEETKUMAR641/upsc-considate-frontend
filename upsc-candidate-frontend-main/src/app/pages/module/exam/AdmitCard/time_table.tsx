import './table.css'

const BootstrapTable = ({ timetableData }) => {
  return (
    <div className="table-responsive time-table-font ">
      <div className="text-center border border-dark border-bottom-0 font-sixteen">
        Time Table
      </div>
      <table className="table table-bordered custom-time-table">
        <thead>
          <tr className="align-top">
            <th style={{ width: '9%' }}>
              <div className="mt-0">तारीख Date </div>
            </th>
            <th style={{ width: '19%' }}>
              <div>Forenoon Session</div>
              <div>9:00 AM to 12:00 NOON</div>
              <div> विषय (विषय कोड)</div>
              <div>Subject ( Subject Code)</div>
            </th>
            <th style={{ width: '19%' }}>
              <div>Afternoon Session</div>
              <div>2:00 PM to 05:00 PM</div>
              <div> विषय (विषय कोड)</div>
              <div>Subject ( Subject Code)</div>
            </th>
            <th>
              <div>परीक्षा का स्थान</div>
              <div>(Sub Centre Code) Venue of Examination </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.forenoonSubjectCode}</td>
              <td>{item.afternoonSubjectCode}</td>
              <td>{item.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BootstrapTable
