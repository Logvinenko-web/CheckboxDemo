import React, { useState } from 'react';
 import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
    import { Dialog, DialogTitle,DialogContent } from '@material-ui/core';
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  import axios from 'axios'
   import Typography from '@material-ui/core/Typography';
  import { makeStyles } from '@material-ui/core/styles';
   import {useForm} from 'react-hook-form'
 
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },

    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
 const offline = {
  "go_offline_date": "2020-10-08T06:35:47.845Z",
  "fiscal_code": "4uOJr0NQPF8"
}
const offlineReceipt = {
  "departament": "string",
  "cashier_name": "string",
  "header": "string",
  "footer": "string"
}
const receipt = {
  "cashier_name": "ДЖома ДЖома ДЖомоа",
  "departament": "ПрАТ 'Літак'",
  "goods": [
    {
      "good": {
        "code": "5",
        "name": "A+ Весы кухон.  с чашей",
        "barcode": "string",
        "header": "string",
        "footer": "string",
        "price": 16500,
        "tax": [
          4
        ],
        "uktzed": "3934"
      },
       "quantity": 3000,
      "is_return": false
      
    },
  {
    "good": {
      "code": "6",
      "name": "Шапка",
      "barcode": "string",
      "header": "string",
      "footer": "string",
      "price": 500,
      "tax": [
        4
      ],
     },
     "quantity": 10000,
    "is_return": false
    
  }
  ],
     
      
  
  "delivery": {
    "email": "user@example.com"
  },
  "discounts": [
    
  ],
  "payments": [
    {
      "type": "CASH",
      "value": 4950000,
      "label": "string"
    }
  ]
  ,
  "footer": "Служебна яинфо",
  "barcode": "4820099999"
}
// const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiQVBJIiwianRpIjoiZGE3NWJiYzAtMjIyOC00MmIwLTk1ZTAtM2FkOTRjOTQ5MTBmIiwic3ViIjoiNjhkYzZhN2EtMmVlZi00MjYzLWE2NGItMTc2YWI3ZGIwNzE5IiwibmJmIjoxNjAyMTM4NzQ5LCJpYXQiOjE2MDIxMzg3NDl9.TiGsb0ho6Uui3TmaXlnm65BBEn5bYVHnfsPoffOOQkA"
export default function ButtonAppBar() {
      const classes = useStyles();
    const {register, handleSubmit} = useForm()
 const [open, setOpen] = useState(false)
 const [token, setToken] = useState(``)
 const [receiptId, setreceiptId] = useState(``)

  const beerToken = {headers: {
  Authorization: 'Bearer ' + token,
  
}} 
  

 const handleClickOpen=()=>{
  setOpen(true);

 }
const handleClose = ({login,password}) => {
  axios.post(`https://dev-api.checkbox.in.ua/api/v1/cashier/signin`, {login,password})
  .then(res=>{
    setToken(res.data.access_token)
    console.log(res.data.access_token)
  })
  .catch(err=>{
      console.log(err)
  })  
  
  setOpen(false);
}
 
function createShifts() {
  axios.defaults.baseURL = 'https://dev-api.checkbox.in.ua​'
  axios({
    method: 'post',
    url: ("api/v1/shifts"),
    headers: {
      Authorization: 'Bearer ' + token,
  'X-License-Key': '6f937d8f7af7444aabb41b92',
  // 'X-License-Key': '93fdade18924af30cf10cd23'
    }
  })
  .then(function(response) {
   console.log(response.data)
  });
}
function getShift() {
  return axios.get(`https://dev-api.checkbox.in.ua/api/v1/cashier/shift`,beerToken).then(res=>{console.log(res.data)})
}
   function closeShifts() {
      axios.defaults.baseURL = 'https://dev-api.checkbox.in.ua​'
      axios({
        method: 'post',
        url: (`/api/v1/shifts/close`) ,
        headers: {
          Authorization: 'Bearer ' + token,
         }
      })
      .then(function(response) {
       console.log(response.data.status)
      })
      .catch(err=>{
        console.log(err)
    })
  }
  // function getOfflineCodes() {
  //   return axios.get(`https://dev-api.checkbox.in.ua/api/v1/cash-registers/get-offline-codes`,beerToken).then(res=>{console.log(res.data)})
  // }
  function getOfflineCodes() {
    axios.defaults.baseURL = 'https://dev-api.checkbox.in.ua​'
    axios({
      method: 'get',
      url: ("api/v1/cash-registers/get-offline-codes"),
      headers: {
        Authorization: 'Bearer ' + token,
    'X-License-Key': '6f937d8f7af7444aabb41b92',
      }
    })
    .then(function(response) {
     console.log(response.data)
    });
  }
  
  function postGoOffline() {
    axios.defaults.baseURL = 'https://dev-api.checkbox.in.ua​'
    axios({
      method: 'post',
      url: "/api/v1/cash-registers/go-offline",
      headers: {
        Authorization: 'Bearer ' + token,
       },
       data:offline 
    })
    .then(function(response) {
     console.log(response.data)
    });
  }
  function postGoOnline() {
    axios.defaults.baseURL = 'https://dev-api.checkbox.in.ua​'
    axios({
      method: 'post',
      url: "/api/v1/cash-registers/go-online",
      headers: {
        Authorization: 'Bearer ' + token,
       },
     })
    .then(function(response) {
     console.log(response.data)
    });
  }
  function createReceipt() {
    axios.defaults.baseURL = 'https://dev-api.checkbox.in.ua​'
    axios({
      method: 'post',
      url: encodeURI(`/api​/v1​/receipts/sell`).replace(/%E2%80%8B/g, ''),
      headers: {
        Authorization: 'Bearer ' + token,
       },
       data:receipt
    })
   
    .then(function(response) {
      setreceiptId(response.data.id)
     console.log(response.data)
    });
  }
  function receiptTxt() {
    return axios.get(`https://dev-api.checkbox.in.ua/api/v1/receipts/${receiptId}/text`,beerToken).then(res=>{console.log(res.data)})
  }
  
  // const getOfflineCodes = () => {
  //   axios.post(`https://dev-api.checkbox.in.ua/api/v1/cashier/get-offline-codes`)
  //   .then(res=>{
  //     console.log(res.data)
  //   })
  //   .catch(err=>{
  //       console.log(err)
  //   })  
    
  //  }


  // offline
  function createReceiptOffline() {
    axios.defaults.baseURL = 'https://localhost:3002/api'
    axios({
      method: 'post',
      url:"/v1/receipt",
      headers: 
        'Access-Control-Allow-Origin: *'
       ,
       data:offlineReceipt
    })
   
    .then(function(response) {
      setreceiptId(response.data.id)
     console.log(response.data)
    });
  }

  return (
    <div>
      <AppBar position="static" className="Login">
        <Toolbar>
          
          <Typography variant="h6">
            Checkbox
          </Typography>
          <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          <Dialog open={open} onClose={handleClose} arial-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>
            Authorization
            </DialogTitle>
            <DialogContent>
            <form className={classes.form} noValidate onSubmit={handleSubmit(handleClose)}>
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              id="login"
              label="Login Cashier"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              inputRef={register}
              required
              fullWidth
              name="password"
              label="Password"
              type="text"
              id="password"
              autoComplete="current-password"
            />
             
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            
          </form>

            </DialogContent>
            
          </Dialog>
        </Toolbar>
      </AppBar>
      <Button   color="primary" onClick={createShifts}>create Shifts</Button> 	
      <Button   onClick={getShift}>Get shift</Button>
      <Button   onClick={getOfflineCodes}>Get Codes</Button>
      <Button   onClick={postGoOffline}>Go Offline</Button>
      <Button   onClick={postGoOnline}>Go Online</Button>
      <Button   onClick={createReceiptOffline}>Offline Recipt RRO</Button>

      <Button   color="primary" onClick={createReceipt}>create receipt</Button> 
      <Button   color="primary" onClick={receiptTxt}> receipt txt</Button> 	


      <Button color="secondary" onClick={closeShifts}> Closes shift</Button>

    </div>
  );
}
