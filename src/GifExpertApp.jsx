import { useState } from "react";
import {GifForm, GifCategoryGrid} from './components'

export function GifExpertApp() {

  const [categories, setCategories] = useState(['Dragon Ball Z']);

  const addCategory = ( newCategory ) => {
    setCategories( [newCategory, ...categories] );
  }

  return (
    <>
    
      <h1>Gif Expert App</h1>

      <GifForm onNewCategory={ addCategory } />
      
      { categories.map( (category) => {
        return (
          <GifCategoryGrid key={category} category={category} />
        )
        }) }
      
    </>
  );
}