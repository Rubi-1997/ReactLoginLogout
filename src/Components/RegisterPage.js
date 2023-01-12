import React, { useState } from 'react'
import './RegisterPage.css'
import { Link, useNavigate } from 'react-router-dom';






let obj = {
    name: "",
    email: "",
    password: "",
    rePassword: ""
}

const RegisterPage = () => {
    const Navigate = useNavigate();

    // values state is use for changing the state user's data object
    const [values, setValues] = useState(obj);

    // error state is use for for changind the state of errors of empty field in boolean
    const [error,setError]=useState(false);
    

    // handleInputChange function is use for set the state of input value of register
    const handleInputChange = (e) => {
        // using destructuring as e.target.name=name, e.target.value=value
        const { name, value } = e.target

        // storing the new Data with old Data using spread operator
        setValues({
            ...values, [name]: value,
        })
    }

    // this handleStore function is use for handle the register process and submiting the data in localstorage

    const handleStore = (e) => {
        e.preventDefault()
        let new_data = values;

        console.log(new_data)

       
        // check field value exist or not
         
        if (!new_data.name || !new_data.email|| ! new_data.password  || !new_data.rePassword) {
            setError(true)
            
        }
        //   if value exist in field
        else {
            

            // if localStorage is null then taken blank Array and push first entered value
            if (localStorage.getItem('data') === null) {
                let Array = []
                Array.push(new_data)
                console.log(Array)
                let variable = JSON.stringify(Array)
                localStorage.setItem('data', variable);
                alert("register successfully")
                Navigate("/login")

        //  use React toastify for notification
               
            }
           
            
        //   if localstorage is not empty
            else {


                let old_data = JSON.parse(localStorage.getItem('data'));
                console.log(old_data)
                console.log(new_data)
                
                    old_data.forEach(element => {

            // conditions for ipnut fields validation
                        if(element.name===new_data.name && element.email===new_data.email && element.password===new_data.password&&element.rePassword===new_data.rePassword){
                           alert("already registered")
                        }
                        
                        else{

                            // check for password confirm or not
                               if(new_data.password!==new_data.rePassword){
                                alert("password not confirmed")
                               }
                            else{
                                old_data.push(new_data);
                                localStorage.setItem('data', JSON.stringify(old_data));
                                alert("register successfully")
                                Navigate("/login")
                                
                            }
                        }
                    });
                
               
            }


        }


    }
   




    return (
      <div className='box'>
        <div className='container1'>
            <form className='registerForm'>
                <h1>Register</h1>
                <p> Please Fill this form to create an Account</p>
                <hr />
                <div className='RegisterContainer'>
                    <div>
                    <label htmlFor="username" className='label' ><b>User Name</b></label><br /> 

                    <input className='Inpt'  type="text" name='name' placeholder='Enter full name' value={values.name} onChange={handleInputChange} required ></input>
                    </div>
                    {error && !values.name &&<span>Enter valid name</span>}
                    <div>
                    <label htmlFor="email" className='label'><b>Email</b></label><br />
                    <input className='Inpt' type="text" name='email'     placeholder='Enter Email' value={values.email} onChange={handleInputChange} autoComplete="off" required></input></div>
                    {error && !values.email &&<span>Enter valid email</span>}
                    <div>
                        
                    <label htmlFor="password" className='label'><b>Password</b></label><br />
                    <input className='Inpt' type="password" name="password" placeholder='Enter Password' minLength={8} value={values.password} onChange={handleInputChange} required></input></div>
                    {error && !values.password &&<span>Enter valid password</span>}
                    <div>
                    <label htmlFor="repeatpassword" className='label'><b>Repeat Password</b></label><br />
                    <input className='Inpt' type="password" name='rePassword' placeholder='Repeat Password' value={values.rePassword} onChange={handleInputChange} required ></input></div>
                    {error && !values.rePassword &&<span>Enter valid confirm password</span>}
                    <hr />
                </div>
                <div>Already have an account?<Link to="/login">Login</Link></div>
                <button type='submit' className='registerbutton' onClick={handleStore}>Register</button>
                
                
            </form>
        </div>
        </div>

    )
}

export default RegisterPage
