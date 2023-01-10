import React from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, TextField, DialogActions,CircularProgress } from '@mui/material/'
import { useEffect, useState } from 'react'
import LoadingMask from './LoadingMask'

function Subscription() {
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [fetchSend, setFetchSend] = useState(false)
    const [showInput, setShowInput] = useState(true)

    const handleClick=()=>{
        setShowInput(false)
        setFetchSend(true)
        fetch("https://demoapi.com/api/series/newsletter",{
        method: "POST",
        body: JSON.stringify({ email: email}),
        headers: {"Content-Type":"application/json"},
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setFetchSend(false)
        })
    }
        
        useEffect(()=>{
            setTimeout(() => {
                setOpen(true)
            }, 2000);
        },[])
  return (
<Dialog open={open}>
      <DialogTitle>Subscribe</DialogTitle>
      {showInput && (
        <>
      <DialogContent>
        <DialogContentText>Subscribe to our newsletter!</DialogContentText>
        <TextField onChange={(e)=>{setEmail(e.target.value)}}>
        </TextField>
      </DialogContent>
      <DialogActions>
         <Button 
         onClick={handleClick}
         variant={email.includes('@') && email.includes('.')? "enabled" : "disabled"}>Subscribe</Button>
      </DialogActions>
        </>
      )}
      {fetchSend && <LoadingMask/>}
    </Dialog>
  )
}

export default Subscription
