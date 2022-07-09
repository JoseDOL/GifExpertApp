import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
   const [images, setImages] = useState([]);
const [isLoading, setisLoading] = useState(true)
  const getImages = async () =>{
    const newImage = await getGifs(category);
    setImages(newImage);
    setisLoading(false);
  }
useEffect(() =>{
  getImages();
}, [ ]);
  return {
    images,
    isLoading
  }
}

/// esto es un cumstom hook para el manejo de imagenes 
