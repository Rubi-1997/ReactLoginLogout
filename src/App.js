import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

import BreedList from './Components/BreedList';
import React, { useEffect, useState } from 'react'
import DogImage from './Components/DogImage';
import Loginpage from './Components/Loginpage';
import RegisterPage from './Components/RegisterPage';


function App() {
  let [data, setData] = useState([]);
  const [BreedData, setBreedData] = useState("");




  useEffect(() => {

    fetch("https://dog.ceo/api/breeds/list")
      .then((response) => response.json())
      .then((user) => {
        setData(user.message)


      }, [])

  })




  return (
    <div className="App">


      <BrowserRouter>
        <Routes>

          <Route path='/' element={<RegisterPage />}></Route>
          <Route path="/login" element={<Loginpage />}></Route>
          <Route path="/breedslist" element={<BreedList data={data} setBreedData={setBreedData} />}></Route>
          <Route path="/detail" element={<DogImage BreedData={BreedData} />}></Route>
        </Routes>
        <ToastContainer position='top-center' />
      </BrowserRouter>




    </div>
  );
}

export default App;
