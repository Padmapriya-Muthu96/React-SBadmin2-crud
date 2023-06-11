import React from "react";
import { useState } from "react";
export const UsersContext = React.createContext()

function UserContextComponent({children}) {
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
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  </>
}

export default UserContextComponent