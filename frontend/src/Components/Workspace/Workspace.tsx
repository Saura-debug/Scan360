import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Admin from '../../pages/Admin';
import Reports from '../../pages/Reports';
import ScanAxilDDR1 from '../../pages/ScanAxilDDR1';
import ScanAxilDDR2 from '../../pages/ScanAxilDDR2';
import Superadmin from '../../pages/Superadmin';
export default function Workspace() {
  return (
    <div>
        <Routes>
            <Route path='/dashboard'element = {<Dashboard/>} />
            <Route path='/admin'element = {<Admin/>} />
            <Route path='/reports'element = {<Reports/>} />
            <Route path='/scanaxil1'element = {<ScanAxilDDR1/>} />
            <Route path='/scanaxil2'element = {<ScanAxilDDR2/>} />
            <Route path='/superadmin'element = {<Superadmin/>} />
        </Routes>

    </div>
  )
}
