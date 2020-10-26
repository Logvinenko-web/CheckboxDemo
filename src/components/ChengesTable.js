import React from 'react';
import { useTable } from 'react-table'
import styled from 'styled-components'
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";


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

const GreenRadio = withStyles({
    root: {
        color: green[400],
        "&$checked": {
            color: green[600]
        }
    },
    checked: {}
})((props) => <Radio color="default" {...props} />);
export default function GoodsTablet() {
    const data = [
        {
            status: '',
            outlet: 'Смаколики',
            kashier: 'Бухгалтер Петрівна',
            number: '1',
            open: '14.09.2020 12:06:03',
            close: '-',
            price: '20',
            justDo: ''
        },


    ]
    const add = `
    Касира можна добаввити двома способавми: 1.Зчитати із ключа ЕЦП 2.Ввести дані вручну. Відмінність в тому що при зчитуванні з ключа ЕЦП не потрібно заповнювати поле "ідентифікатор ключа ЕЦП" - заповнюється автоматично. На тесту представлений спосіб - "Ввести дані вручну"    `
        
    const columns = React.useMemo(
        () => [
            {
                Header: 'Статус',
                accessor: 'status',
            },
            {
                Header: 'Торгова точка',
                accessor: 'outlet',
            },
            {
                Header: 'Касир ',
                accessor: 'kashier',
            },
            {
                Header: 'Номер зміни',
                accessor: 'number',
            },
            {
                Header: 'Відкриття',
                accessor: 'open',
            },
            {
                Header: 'Закриття',
                accessor: 'close',
            },
            {
                Header: 'Кількість чеків',
                accessor: 'price',
            },
            {
                Header: 'Дії',
                accessor: 'justDo',
            },

        ],
        []
    )
    const [selectedValue, setSelectedValue] = React.useState('a');

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <Styles>
            <table className='tableChenges' {...getTableProps()} style={{ border: 'none', width: '100%', textAlign: 'start', }}>
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

                                                {data.length > 0 && i === 0 ? <GreenRadio
                                                    disabled
                                                    checked={selectedValue === 'a'}
                                                    value="a"
                                                    name="radio-button-demo"
                                                />: null}
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
