import { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header>
        <nav>
          {
            isLoggedIn ? 
              <>
                <button onClick={() => { setIsLoggedIn(false) }}>Log Out</button>
                <button>My Account</button>
              </> :
              <button onClick={() => { setIsLoggedIn(true) }}>Log In</button>
          }
        </nav>
      </header>
      
      
      <h1>Users</h1>

      {
        userDetails.name ? 
          <UserDetails userDetails={userDetails} setUserDetails={setUserDetails} /> : 
          <UserList isLoggedIn={isLoggedIn} setUserDetails={setUserDetails} />
      }
    </>
  )
}

export default App
