import React,{createContext,useState} from 'react'
import {allUsers} from '../components/AllUsers'

export const UserContext=createContext()

export const UserContextProvider = (props) =>{
/****All Data****/
const [allUsersData,setAllUsersData]=useState(allUsers)


/****Add User PAGE****/
const [addUserValue, setAddUserValue] = useState({
  id:"",
  name: "",
  lastName: "",
  citty: "",
  passportNumber:"",
});

const onChangeAddUser = (e) => {
  const name = e.target.name;
  const value = e.target.value.trim();
  const typeOfInput= e.target.type


if(e.target.type=="number"){//number field must contains 6 numbers
  if(e.target.value.length <= 6){

  setAddUserValue({ ...addUserValue, [name]:value});
}
}else{
  setAddUserValue({ ...addUserValue, [name]: value });
}


};

const [errorInput,setErrorInput]=useState("")//set error message
const [errorSuccess, setErrorSuccess] = useState("");
const addUserClick = (e) => {//add user on click button
  e.preventDefault();
  const allUSerConst = {
    id: allUsersData.length + 1,
    name: addUserValue.name,
    lastName: addUserValue.lastName,
    citty: addUserValue.citty,
    passportNumber:addUserValue.passportNumber,
  };
  const passportNumberFilter = allUsersData.filter(//check if passport number exist in table
    (passportNumber) =>
      passportNumber.passportNumber == allUSerConst.passportNumber
  );

  if (
    allUSerConst.name &&
    allUSerConst.lastName &&
    allUSerConst.citty &&
    allUSerConst.passportNumber &&
    passportNumberFilter.length <= 0&&
    allUSerConst.passportNumber.length === 6
  ) {
    setErrorSuccess("Sucsessfuly Added!");
    setErrorInput("");
    setTimeout(() => {
  setErrorSuccess("");
}, 3000);
    setAllUsersData([...allUsersData, allUSerConst]);
    addUserValue.name = "";
    addUserValue.lastName = "";
    addUserValue.citty = "";
    addUserValue.passportNumber = "";
  }
  else if(allUSerConst.name &&
    allUSerConst.lastName &&
    allUSerConst.citty &&
    allUSerConst.passportNumber.length < 6
  ){
    setErrorInput("Passport number must contain 6 numbers");
  }
  else if(allUSerConst.name &&
    allUSerConst.lastName &&
    allUSerConst.citty &&
    allUSerConst.passportNumber &&
    allUSerConst.passportNumber.length === 6 &&
    passportNumberFilter.length >= 0){
    setErrorInput("Passport number alredy exist");
  }
  else{
      setErrorInput("All fields must be field");
  }
}




const [editUserRow,setEditUserRow]=useState('')
const [linkToEditPage,setLinkToEditPage]=useState("/editPage")
const [editValues,setEditedValues]=useState('')

const editUser = (e) => {//button edit
  // e.preventDefault();
  const currentElement = e.target.getAttribute("data-index");
  const currentElFilter = allUsersData.filter(
    (passportNumber) =>
      passportNumber.id === parseInt(currentElement)
  );
    setErrorInput("");
setEditedValues(currentElFilter[0])

}


const deleteUser = (e) => {  //Button delete
  e.preventDefault();
  const currentEl = e.target.getAttribute("data-index");
  const allUsersFilter = allUsersData.filter((all) => all.id != currentEl);
  setAllUsersData(allUsersFilter);
};



/*********EDIT PAGE***********/

const [editError, setEditError] = useState("");
const [backToMainPage, setBackToMainPage] = useState("/");
const submitEdited = (e) => {
  // e.preventDefault()
  const current = {
    id: editValues.id,
    name: editValues.name,
    lastName: editValues.lastName,
    citty: editValues.citty,
    passportNumber: editValues.passportNumber,
  };

  const replacedItem = allUsersData.map((allData) => {    //REPLACE ALL DATA WITH CURRENT DATA FROM INPUT FIELD

    {
      return allData.id == current.id ? current : allData;
    }
  });

  const samePassportNumber = allUsersData.filter(
    (all) =>
      all.passportNumber == parseInt(current.passportNumber) && all.id != current.id
  );


  if (samePassportNumber.length > 0) {
    setEditError("Passport number alredy exists");

    e.preventDefault();
  } else if (
    !current.id ||
    !current.name ||
    !current.lastName ||
    !current.citty
  ) {
    setEditError("Fields can't be empty");

    e.preventDefault();
  } else if (
    current.id &&
    current.name &&
    current.lastName &&
    current.citty &&
    current.passportNumber.length < 6
  ) {
    setEditError("Passport number should contains minimum 6 numbers");

    e.preventDefault();
  } else {
      setEditError("");

    setAllUsersData(replacedItem);
    editValues.id = "";
    editValues.name = "";
    editValues.lastName = "";
    editValues.citty = "";
    editValues.passportNumber = "";
  }
};

const backBtnEditPage=()=>{
  setEditError("");
}

const onChangeEditUser=(e)=>{
  const name=e.target.name
  const value=e.target.value.trim()
  if(e.target.type=="number"){
    if(e.target.value.length <= 6){
      setEditedValues({ ...editValues, [name]: value.trim() });
    }
  }else{
    setEditedValues({ ...editValues, [name]: value });
  }
}


return(
<UserContext.Provider
  value={[
    { allUsersData: allUsersData },
    { onChangeAddUser: onChangeAddUser },
    { addUserValue: addUserValue },
    { addUserClick: addUserClick },
    { errorInput: errorInput },
    { editUser: editUser },
    { submitEdited: submitEdited },
    { editValues: editValues },
    { onChangeEditUser: onChangeEditUser },
    { editError: editError },
    { linkToEditPage: linkToEditPage },
    { backToMainPage: backToMainPage },
    { deleteUser: deleteUser },
    { errorSuccess: errorSuccess },
    {backBtnEditPage:backBtnEditPage}
  ]}
>
  {props.children}
</UserContext.Provider>

)
}
