import React, { useState } from "react";

const ShowUserInfo = () => {

  //-----Change First Name-----
  const [FirstName, setFirstName] = useState<string>("Jessica");

  function handleChangeFirstName() {
    const newFirstName = prompt("Enter your First Name to update, please!");
    if (!newFirstName) {
      setFirstName(FirstName);
    } else {
      setFirstName(newFirstName);
    }
  }

  //-----Change Last Name-----
  const [LastName, setLastName] = useState<string>("Simpson");

  function handleChangeLastName() {
    const newLastName = prompt("Enter your Last Name to update, please!");
    if (!newLastName) {
      setLastName(LastName);
    } else {
      setLastName(newLastName);
    }
  }

  //-----Change Year of birth and calculate age-----
  const [Age, setAge] = useState<number>(30);

  function handleAge() {
    try {
      const newAge = prompt("Enter your Year Of Birth to update, please!");
      setAge(new Date().getFullYear() - Number(newAge));

      if (!(Number(newAge))) {
        alert("Please enter numric value of Year Of Birth.");
        setAge(Age);
        return;
      }
      if (!newAge) {
        setAge(Age);
      } else {
        setAge(new Date().getFullYear() - Number(newAge));
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1 style={{color: "#6c6cbd"}}>---------   User information   -----------</h1>
      <p>First Name : {FirstName} </p>
      <button onClick={handleChangeFirstName}>Click to change First Name</button>     
       <p>Last Name: {LastName}</p>
      <button onClick={handleChangeLastName}>Click to change Last Name</button>    
       <p>Age: {Age}</p>
      <button onClick={handleAge}>Click to change Age</button> 
     </div>
  );
};

export default ShowUserInfo;
