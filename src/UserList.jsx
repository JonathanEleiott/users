/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const UserList = ({ isLoggedIn, setUserDetails }) => {

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const getUsers = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const users = await response.json();
      setAllUsers(users);
    }

    getUsers();
  }, []);

  const getUserDetails = async(userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    setUserDetails(user);
  }

  return (
    <ul>
      {
        allUsers.map((user) => {
          return (
            <section key={user.id} >
              <li onClick={() => { getUserDetails(user.id) }}>
                {user.name} 
              </li>
              {
                isLoggedIn ?
                  <button>Hire Now</button> :
                  null
              }
            </section>
          )
        })
      }
    </ul>
  )
}

export default UserList;