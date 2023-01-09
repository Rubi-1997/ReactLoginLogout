import "./DogImage.css"
import { useNavigate } from 'react-router-dom'

function DogImage({BreedData} ) {
  const Navigate=useNavigate()
   

       



const logout=()=>{
    Navigate('/login')
}


    return (

        <div>
            
           
                    <div className="big_container">
                        <div>
                            <img src={BreedData} className='dagimg' alt="dog image"/>
                        </div>
                     <button className='logout'  onClick={logout}>Log out</button>
                    </div>
           
                    





        </div>
    )
}

export default DogImage
