import {Routes, Route} from 'react-router-dom'

import {Login} from '../SingIn'
import {Register} from '../SingUp'

export function AuthRoutes(){

  return(
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}