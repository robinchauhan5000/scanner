import React, { useEffect } from 'react'
import scannerModule, { Scanner } from 'witsscanner'


const App = () => {
  useEffect(() => {
    console.log('scannerModule', scannerModule)
  })

  return <Scanner />
}

export default App
