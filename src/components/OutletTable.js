import React from 'react';
import { useTable} from 'react-table'
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


export default function KassTablet({data}) {
  
 
   const columns = React.useMemo(
    () => [
      {
        Header: 'Тип',
        accessor: 'type',
      },
      {
        Header: 'Найменування',
        accessor: 'name',
      },
      {
        Header: 'Адреса',
        accessor: 'adress',
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
      <table className='tableKashier tableOutlet' {...getTableProps()} style={{ border: 'none', width: '100%', textAlign: 'start' ,}}>
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
          {rows.map((row,index) => {

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
                          {i===0 ? <span className={!data[index].sendDps?'spanDPS':'spanCheckbox'} >{!data[index].sendDps?'Відправлено в ДПС':'Торгова точка Checkbox'}</span>:null}
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
