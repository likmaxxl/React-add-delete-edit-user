import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const EditPageJSX = ({editUserChange,editValue,submitEdited,backToMain,backBtnEditPage}) => {
  return (
<>
<form action="">

  <input
    type="text"
    placeholder="Name"
    name="name"
    value={editValue.name}
    onChange={editUserChange}
    autoComplete="off"
  />
  <input
    type="text"
    placeholder="Last Name"
    name="lastName"
    value={editValue.lastName}
    onChange={editUserChange}
        autoComplete="off"
  />
  <input
    type="text"
    placeholder="Citty"
    name="citty"
    value={editValue.citty}
    onChange={editUserChange}
        autoComplete="off"
  />
  <input
    type="number"
    placeholder="Passport Number"
    name="passportNumber"
    value={editValue.passportNumber}
    onChange={editUserChange}
        autoComplete="off"
  />

</form>
<div className="editButtons">
  <Link to={backToMain} onClick={submitEdited} class="btn btn-success">
  Submit
  </Link>

  <Link onClick={backBtnEditPage} to="/" class="btn btn-secondary">
  Back
  </Link>
</div>

</>
  )
}

export default EditPageJSX
