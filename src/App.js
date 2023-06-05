import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import AddUser from "./component/AddUser"
import Profile from './component/Profile'
import PendingRequest from './component/PendingRequest'
import Task from "./component/Task";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ProfileDetails from "./component/ProfileDetails";
import ResetPassword from "./component/ResetPassword";
import { useState } from "react";
function App() {
  let [users,setUsers] = useState([
    {
      name:"padma",
      email:"padma@gmail.com",
      mobile:"9874563210",
      dob:"13/09/1996"
    },
    {
      name:"siva",
      email:"siva@gmail.com",
      mobile:"1236547890",
      dob:"08/11/1992"
    },
    {
      name:"ram",
      email:"ram@gmail.com",
      mobile:"4569871230",
      dob:"09/09/2021"
    },
    {
      name:"  Ratchagi",
      email:"Ratchagi@gmail.com",
      mobile:"1478523690",
      dob:"05/09/1971"
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path="/profile" element={<Profile/>}>
              <Route path='details' element={<ProfileDetails/>}/>
              <Route path='reset-password' element={<ResetPassword/>}/>
          </Route>
          <Route path="/pending-request" element={<PendingRequest/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="*" element={<Navigate to='/dashboard'/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  </>
}

export default App;
