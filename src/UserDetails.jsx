/* eslint-disable react/prop-types */
const UserDetails = ({ userDetails, setUserDetails }) => {
  const { name, username, address } = userDetails;

  return (
    <section>
      <h2>{name}</h2>
      <p>{username}</p>

      <h3>City: {address.city}</h3>

      <button onClick={() => { setUserDetails({}) }}>Back</button>
    </section> 
  )
}

export default UserDetails;