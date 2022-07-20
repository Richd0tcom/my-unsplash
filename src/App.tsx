import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Header from './components/Header';

import NewImage from './components/NewImage';
import DeleteImage from './components/DeleteImage';
import Gallery from './components/Gallery';

function App() {
  

  

  const [ images, setImages ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(Array<Object>)
  const [ isOpen, setIsOpen ] = useState(false)
  
  const url = 'https://my-unsplash-ts.herokuapp.com/api/v1/images';


  useEffect(()=>{
    getImages()
  },[])

  async function getImages(){
    try {

      const res = await axios.get(url)
      const imgArr: [] = await res.data.imagesData
      
      setImages(imgArr);
      
      

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Header openModal={()=> setIsOpen(true)}/>
      <Gallery images={images}/>
      <NewImage open={isOpen} onClose={()=> setIsOpen(false)} />
    </>
  )
}

export default App
