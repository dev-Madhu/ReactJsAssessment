import {useMemo, useState} from 'react'
import {useTable} from 'react-table'
import COLUMNS from './Columns'
import Pagination from '../Pagination'
import './table.css'

const PageSize = 6
const ReactTable = props => {
  const {resourceData} = props
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return resourceData.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, resourceData])

  const columns = useMemo(() => COLUMNS, [])

  const data = useMemo(() => currentTableData, [currentTableData])
  const table = useTable({
    columns,
    data,
  })

  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="border-bottom"
            >
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="border-bottom">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={resourceData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  )
}

export default ReactTable
