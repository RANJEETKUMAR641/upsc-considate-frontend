import { useRef } from 'react'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import Daily from './Daily'
import Monthly from './monthly'
interface Props {
  data: object
}
function GatePassPrint({ data }) {
  const tableRef = useRef(null)
  const generatePDF = () => {
    const table = tableRef.current
    if (!table) {
      return
    }
    html2canvas(table).then((canvas) => {
      const Pdf = new jsPDF('p', 'mm', 'a4')
      const maxWidth = 210
      const aspectRatio = canvas.width / canvas.height
      const maxHeight = maxWidth / aspectRatio
      Pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        maxWidth,
        maxHeight,
      )
      Pdf.autoPrint()
      window.open(Pdf.output('bloburl'))
    })
  }
  return (
    <>
      <table ref={tableRef}>
        <tr>
          <td>
            {data.start_date ? <Monthly data={data} /> : <Daily data={data} />}

            {/* {data[0].type === 'M' ? (
              // <Monthly data={data} />
              <></>
            ) : (
              <Daily data={data} />
            )} */}
          </td>
        </tr>
      </table>
      <div style={{ textAlign: 'center' }}>
        <button className="btn btn-info right" onClick={() => generatePDF()}>
          Convert and Print
        </button>
      </div>
    </>
  )
}

export default GatePassPrint
