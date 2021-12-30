import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import EditPageJSX from './EditPageJSX'
import {UserContext} from '../../Contexts/userContext'


const EditPage = (props) => {
  const value = useContext(UserContext);

  return (
    <>
    <div id="editPage">
    {value[9].editError&&  <div class="alert alert-danger" role="alert">
* {value[9].editError}
      </div>}


      <EditPageJSX
        backBtnEditPage={value[14].backBtnEditPage}
backToMain={value[11].backToMainPage}
        editValue={value[7].editValues}
        editUserChange={value[8].onChangeEditUser}
        submitEdited={value[6].submitEdited}
      />
      </div>
    </>
  );
};


export default EditPage
