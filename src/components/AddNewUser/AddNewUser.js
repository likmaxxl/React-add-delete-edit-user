import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import {UserContext} from '../../Contexts/userContext'


const AddNewUser = (props) => {
  const value=useContext(UserContext)
  return (
    <>
{
  value[4].errorInput&&<div class="alert alert-danger" role="alert">
  * {value[4].errorInput}
</div>
}
{
  value[13].errorSuccess&&<div class="alert alert-success" role="alert">
  {value[13].errorSuccess}
</div>
}
<form action="" class="addUser">
  {/* <input
    type="text"
    placeholder="Id"
    name="id"
    onChange={value[1].onChangeAddUser}
    value={value[2].addUserValue.id}
  /> */}

  <input
    type="text"
    placeholder="Name"
    name="name"
    onChange={value[1].onChangeAddUser}
    value={value[2].addUserValue.name}
    autoComplete="off"
  />
  <input
    type="text"
    placeholder="Last Name"
    name="lastName"
    onChange={value[1].onChangeAddUser}
    value={value[2].addUserValue.lastName}
    autoComplete="off"
  />
  <input
    type="text"
    placeholder="Citty"
    name="citty"
    onChange={value[1].onChangeAddUser}
    value={value[2].addUserValue.citty}
    autoComplete="off"
  />
  <input

    type="number"
    placeholder="Passport Number"
    name="passportNumber"
    onChange={value[1].onChangeAddUser}
    value={value[2].addUserValue.passportNumber}
    autoComplete="off"
  />

</form>
<div className="addButton">
<button onClick={value[3].addUserClick} class="btn btn-success">Add New User</button>
</div>
</>
  )
}

export default AddNewUser
