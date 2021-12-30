import React from 'react'
import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

const AllUsersJSX = ({citty,passportNumber,id,lastName,name,editUser,linkToEditPage,deleteUser}) => {

  return (
<tr data-index={id}>
  <td>{name}</td>
  <td>{lastName}</td>
  <td>{citty}</td>
  <td>{passportNumber}</td>
<td><Link class="btn btn-warning" to={linkToEditPage} onClick={editUser} data-index={id}>Edit</Link></td>

  <td><button class="btn btn-danger" onClick={deleteUser} data-index={id}>Delete</button></td>
</tr>
  )
}

export default AllUsersJSX
