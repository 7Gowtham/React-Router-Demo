import React from 'react'
import FullStack from './FullStack'
import DataScience from './DataScience'
import CyberSecurity from './CyberSecurity'
import Carrer from './Carrer'

function All() {
  return <>
  <div className="container-all">
    <FullStack />
    <DataScience />
    <CyberSecurity />
    <Carrer />
  </div>
    
  </>
}

export default All