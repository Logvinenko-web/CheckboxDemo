import React from 'react';
import { useTable } from 'react-table'
import styled from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Checkbox from '@material-ui/core/Checkbox';


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
     
         
        
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom:  
       solid #f0f1f2;
 
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


export default function ReturnContainer() {
    const data = []
    const columns = React.useMemo(
        () => [
            {
                Header: 'Товари',
                accessor: 'text1',
            },
            {
                Header: 'Кількість',
                accessor: 'numberIndex',
            },
            {
                Header: 'Вартість',
                accessor: 'numberPrice',
            },

            {
                Header: '',
                accessor: 'checkbox',
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

        <div className="returnContainer">
            <div className='returnTitle'>Чек 6sydwCoGlas</div>
            <Styles>
                <table className='tableCretedReceipt' {...getTableProps()} style={{ border: 'none', width: '100%', textAlign: 'start', }}>
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
                    <tbody>
                        <tr>

                            <td>
                                Весы кухон. с чашей
                            </td>
                            <td>
                                <OutlinedInput
                                    id="outlined-adornment"
                                    value='1'
                                    aria-describedby="outlined-weight-helper-text"

                                    labelWidth={0}
                                />
                            </td>
                            <td>
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    value='495.00'
                                    endAdornment={<InputAdornment position="end">₴</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"

                                    labelWidth={0}
                                />
                            </td>

                            <td>
                                {/* <div  > */}
                                <Checkbox color="primary" />
                                {/* </div> */}
                            </td>




                        </tr>
                        <tr>

                            <td>
                                Шапка
</td>
                            <td>
                                <OutlinedInput
                                    id="outlined-adorn"
                                    value='10'
                                    aria-describedby="outlined-weight-helper-text"

                                    labelWidth={0}
                                />
                            </td>
                            <td>
                                <OutlinedInput
                                    id="outlined"
                                    value='5.00'
                                    endAdornment={<InputAdornment position="end">₴</InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"

                                    labelWidth={0}
                                />
                            </td>

                            <td>
                                {/* <div  > */}
                                <Checkbox color="primary" />
                                {/* </div> */}
                            </td>




                        </tr>
                    </tbody>
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
        </div>



    );
}
