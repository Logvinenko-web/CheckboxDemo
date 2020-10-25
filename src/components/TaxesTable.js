import React, { useMemo, useState } from 'react';
import { useTable, columns, data } from 'react-table'
import styled from 'styled-components'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import ButtonRegister from './ButtonRegister'

const Styles = styled.div`
  /* This is required to make the table full-width */
  display: block;
  max-width: 100%;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid grey;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    tr:nth-child(2n) {
        background: linear-gradient(0deg,#f0f1f2,#f0f1f2),#f0f1f2;;
      }
         
        
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #f0f1f2;
 
      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`


export default function TaxesTablet({data}) {
  
 
   const columns = React.useMemo(
    () => [
      {
        Header: 'Літера',
        accessor: 'letter',
      },
      {
        Header: 'Податкова ставка',
        accessor: 'tax',
      },
      {
        Header: 'Назва податку',
        accessor: 'name',
      },
      {
        Header: 'Додатковий збір',
        accessor: 'meet',
      },
      {
        Header: 'Код податку',
        accessor: 'code',
      },
      
      {
        Header: 'Дії',
        accessor: 'justDo',
      },

    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <Styles>
      <table className='tableKashier' {...getTableProps()} style={{ border: 'none', width: '100%', textAlign: 'start' ,}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    color: 'black'
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <>

                <tr {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (

                      <td

                        {...cell.getCellProps()}
                        style={{
                          border: 'none',
                          color: 'black',
                        }}
                      >
                        {data.length > 1 ? i ===5 && <span>...</span>:null}
 
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </Styles>
  )
}
