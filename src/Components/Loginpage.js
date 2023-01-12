import React, { useState } from 'react'
import "./Loginpage.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RegisterPage from './RegisterPage';



//  blank object with email and password

let data = {
  email: "",
  password: ""
}

const Loginpage = () => {
  const Navigate = useNavigate();

  const [values, setValues] = useState(data);





  // this handleLoginInputChange function is use for set the state value of inputs

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values, [name]: value,
    })
  }




  // this handlelogin function is use for handle the login process when click on button and giving validation conditions
  const handlelogin = (e) => {

    // this is use for peventing by event onclick auto refresh
    e.preventDefault();


    //  check key exist in localStorage or not for when user directly login and no one registered  initially
    if ("data" in localStorage) {
      const information = JSON.parse(localStorage.getItem("data"))

      // check when data key contain obj blank email and password are not entered their field
      if (values.email === "" && values.password === "") {
        alert("enter email and password");
      }
      // local storage contain key with  value
      else {
        // using foreach for check every element exiat in information
        information.forEach(element => {

          // login values aur Register(localStorage contain) email password values  are matched 
          if (element.email === values.email && element.password === values.password) {
            Navigate("/breedslist")
          }
          // password not matched but email matched then showing wrong password
          else if (element.email === values.email && element.password !== values.password) {
            alert('Your password is wrong')
          }

          //  when email not matched then user not registered
          else if (element.email !== values.email && element.password === values.password) {
            alert('You are not registered ')
          }
          else {
            alert(" You are not registered")
          }
        });

      }

    }
    //  localStorage contain does not contain key so no one has registered
    else {
      alert("you are not resister")
    }




  }



  return (
    <div className='container'>

      <form className='login'>
        <div className='header'><h1>Login</h1><img src="./loginuser1.png"></img></div>


        <label htmlFor="emailname">Email</label><br /><br />
        <input type="text" className='textInput' name="email" placeholder='Enter email' onChange={handleLoginInputChange} autoComplete="off"></input><br /><br />
        <label htmlFor="password">Password</label><br /><br />
        <input type="password" className='textInput' name="password" placeholder='Enter password' onChange={handleLoginInputChange}></input><br /><br />
        <div className='bigDisply'>
          <div className='disply'>
            <input type="checkbox"></input><p>Remember me</p>
          </div>

        </div>
        <button type="submit" value="submit" className='submitinput' onClick={handlelogin}>Login</button>

        {/* link to register page when user are not already registered  */}

        <p>Create an account?<Link to="/">Register</Link></p>

      </form>
    </div>
  )
}

export default Loginpage
