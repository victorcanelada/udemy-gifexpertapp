import { useEffect, useState } from 'react'

// import { getGifs } from '../helpers/getGifs.js';
import { useFetchGifs } from '../hooks/useFetchGifs.js';
import { GifItem } from './GifItem';

export const GifCategoryGrid = ( {category} ) => {
  
  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
      <h3>{category}</h3>
      <pre>{ isLoading && "Cargando..." }</pre>
      <div className='grid grid-cols-6 gap-2'>
        {
          images.map( image => {
            return (
              <GifItem key={image.id} {...image } />
            );
          } )
        }
      </div>
    </>
  )
}
