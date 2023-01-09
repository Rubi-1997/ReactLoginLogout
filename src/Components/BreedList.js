import React  from 'react'
import "./BreedList.css"
import Tablelist from './Tablelist'
import { useNavigate } from 'react-router-dom';


const BreedList = ({ data, setBreedData}) => {
    const Navigate=useNavigate()
   

    const handleTableList = (index) => {
        fetch(`https://dog.ceo/api/breed/${data[index]}/images/random`)
            .then((response) => response.json())
            .then((user) => {
                setBreedData(user.message)

                Navigate("/detail")

            })

    }


    return (
        <>
            <Tablelist data={data} handleTableList={handleTableList} />


        </>
    )
}

export default BreedList
