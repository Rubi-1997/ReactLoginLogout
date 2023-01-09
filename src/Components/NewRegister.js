import React from 'react'

const NewRegister = () => {
    return (
        <div>
            <div className='container'>

                <form className='login'>
                    <div className='header'><h1>Login</h1><img src="./loginuser1.png"></img></div>


                    <label for="fname">Email</label><br /><br />
                    <input type="text" className='textInput' id="fname" name="fname" placeholder='enter email'></input><br /><br />
                    <label for="lname">Password</label><br /><br />
                    <input type="password" className='textInput' id="lname" name="lname" placeholder='enter password'></input><br /><br />

                    <div className='bigDisply'>
                        <div className='disply'>
                            <input type="checkbox"></input><p>Remember me</p>
                        </div>
                        <p className='txt'>Forget</p>
                    </div>
                    <input type="submit" value="Submit" className='submitinput' ></input>


                </form>
            </div>

        </div>
    )
}

export default NewRegister
