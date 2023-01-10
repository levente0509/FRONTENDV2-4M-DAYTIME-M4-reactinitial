import React from 'react'
import { useState } from 'react'
import {Box, Typography, Button} from '@mui/material'

function Character({character}) {

const [showDetails, setShowDetails] = useState(false)

  return (
    <Box className='Character'>
      <Typography>{character.name}</Typography>
      {showDetails && (<Typography>{character.details}</Typography>)}
      <Button variant="contained" onClick={()=>setShowDetails((oldValue) => !oldValue)}> 
      
      {/* a változtatás a state előző állapotától függ, ezért van így. gyak. nincs különbség, de elv. elegánsabb
      onClick={()=>setShowDetails(!showDetails)}  --> ugyanaz mint felette, csak így a setter-t változtatjuk (ha true volt, legyen false, v fordítva) */}

        {showDetails? "Show less" : "Show more"}
      </Button>
    </Box>
  )
}

export default Character
