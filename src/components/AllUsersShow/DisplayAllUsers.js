import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import AllUsersJSX from './AllUsersJSX'
import AddNewUser from '../AddNewUser/AddNewUser'
import {UserContext} from '../../Contexts/userContext'


const DisplayAllUsers = (props) => {
const value=useContext(UserContext)

  return (
  <>
  <div id="allUsersDisplay">
  <div className="description">
<p>* Input fields must not be blank.</p>
<p>* Passport number must contain 6 numbers.</p>
  </div>
  <AddNewUser/>
  <div id="tableUsers">
<table class="table table-hover table-dark">
  <thead>
    <tr>
      <th>name</th>
      <th>last name</th>
      <th>citty</th>
    <th>Passport Number</th>
  <th></th>
<th></th>
    </tr>
  </thead>
  <tbody>
    {value[0].allUsersData.map((allUsers) => {
      return <AllUsersJSX {...allUsers}
        key={allUsers.id}
         editUser={value[5].editUser}
         linkToEditPage={value[10].linkToEditPage}
         deleteUser={value[12].deleteUser} />;
    })}
  </tbody>
</table>
</div>
</div>


  </>
  )
}

export default DisplayAllUsers
