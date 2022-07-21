import { useState, useEffect, createContext } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Header from './components/Header';

import NewImage from './components/NewImage';
import DeleteImage from './components/DeleteImage';
import Gallery from './components/Gallery';



function App() {
  
  
  

  const [ images, setImages ] = useState(Array<Object>);
  const [ isLoading, setIsLoading ] = useState(Array<Object>)
  const [ isOpen, setIsOpen ] = useState(false)
  
  const url = 'https://my-unsplash-ts.herokuapp.com/api/v1/images';

  // const imageContext = createContext(images);
  useEffect(()=>{
    getImages()
  },[])

  async function getImages(){
    try {

      const res = await axios.get(url)
      const imgArr = await res.data.imagesData
      
      setImages(imgArr.reverse().slice(0, 140));

    } catch (error) {
      console.log(error)
    }
  }

  // function searchFunc (wordToMatch: string, array: any[]): Array<any>{
  //   return array.filter((img: any)=>{
  //     const regex = new RegExp( wordToMatch, 'gi');
  //     return img.label.match(regex)
  //   })
  // }


  
  return (
    <>
      

      <Header openModal={()=> setIsOpen(true)} />
      <Gallery images={images} />
      <NewImage open={isOpen} onClose={()=> setIsOpen(false)} />

      
      
    </>
  )
}
;
export default App
