import { Routes, Route} from "react-router-dom";

import { New } from "../New";
import { Home } from "../Home";
import { Details } from "../Details";
import { Profile } from "../Profile";

export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  )
}