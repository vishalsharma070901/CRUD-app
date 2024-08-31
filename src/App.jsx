import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Box, Table, TableBody, TableCell, TableHead, TableRow, Typography} from '@mui/material'
import Users from './Components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Users/>
    </>
  )
}

export default App
