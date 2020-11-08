import React, { useState } from 'react';
import { useTable } from 'react-table'
import styled from 'styled-components'
import { Input } from 'reactstrap';
import ButtonRegister from './ButtonRegister'

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
    // border-bottom: 1px solid grey;
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


export default function SaleTable(props) {
  const { data, setData } = props
  // const dataSale = [...data]
  
  const [inputData, setInputData] = useState({ text1: '', numberIndex: '', numberPrice: "", button: '', amount: 1 })
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputData(state => ({ ...state, [name]: value }))
    console.log(inputData)
  }
  const handleSubmit = (e) => {
    console.log(e, 'eeeee')
    console.log(inputData.text1, 'text1')
    console.log(inputData.numberIndex, 'numberIndex')


    if(inputData.text1.length > 0 && inputData.numberIndex.length > 0 && inputData.numberPrice.length > 0){
    e.preventDefault()
    setData([...data, inputData])
    setInputData({ text1: '', numberIndex: '', numberPrice: "", button: '', amount: 1 })
   }else {
    alert('Заповніть будь ласка всі поля')
  }
  }
  const handleSubmit2 = (e) => {
     


     e.preventDefault()
       
  }
  const columns = React.useMemo(
    () => [
      {
        Header: 'Найменування',
        accessor: 'text1',
      },
      {
        Header: 'Код',
        accessor: 'numberIndex',
      },
      {
        Header: 'Ціна',
        accessor: 'numberPrice',
      },
      {
        Header: '',
        accessor: 'button',
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
      <table className='tableCretedReceipt' {...getTableProps()} style={{ border: 'none', width: '100%', textAlign: 'start', }}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index}{...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column,index) => (
                <th key={index}
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

            <td> <Input type="text"
              className='inputGoods'
              name="text1"
              id="exampleEmail"
              value={inputData.text1}

              placeholder="Ввести вручну"
              onChange={handleChange}
            /></td>
            <td> <Input
              className='inputGoods'
              type="number"
              name="numberIndex"
              id="exampleNumber"
              placeholder="xxxxxxx"
              value={inputData.numberIndex}
              onChange={handleChange}

            /></td>
            <td> <Input
              className='inputGoods'
              type="number"
              name="numberPrice"
              id="exampleNumber"
              placeholder="0.00₴"
              value={inputData.numberPrice}
              onChange={handleChange}
            /></td>
            <td>
              <ButtonRegister classButton="btn-add" onClickBtn={handleSubmit} classSpan='arrowSpan' text="→"></ButtonRegister>
            </td>

          </tr>
        </tbody>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row)
            return (
              <>

                <tr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    return (

                      <td

                        {...cell.getCellProps()}
                        style={{
                          border: 'none',
                          color: 'black',
                        }}
                      >
                        {i === 3 && <ButtonRegister classButton="btn-add" onClickBtn={handleSubmit2} classSpan='arrowSpan' text="→"></ButtonRegister>}
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
