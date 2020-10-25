import React, { useMemo, useState } from 'react';
import { useTable, columns, data } from 'react-table'
import styled from 'styled-components'
 

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


export default function GoodsTablet() {
  const data = [
    {
        type: 'Службова видача',
        data: '02.10.2020 14:56:56',
        number: 'E5tdZGYTHus',
        price:'19.44',               
        justDo:'...'
    },
    {
        type: 'Службова видача',
        data: '02.10.2020 14:56:56',
        number: 'E5tdZGYTHus',
        price:'19.44',               
        justDo:'...'
    },
    {
        type: 'Продаж',
        data: '02.10.2020 12:56:56',
        number: 'Lgouq9qLsVA',
        price:'190.00',               
        justDo:'...'
    },
    {
        type: 'Службове внесення',
        data: '02.10.2020 10:50:56',
        number: 'SvcaOTb4mQY',
        price:'100.47',               
        justDo:'...'
    },
   
]
 
   const columns = React.useMemo(
    () => [
      {
        Header: 'Тип',
        accessor: 'type',
      },
      {
        Header: 'Дата/час',
        accessor: 'data',
      },
      {
        Header: 'Фіскальний номер ',
        accessor: 'number',
      },
      {
        Header: 'Сума',
        accessor: 'price',
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
