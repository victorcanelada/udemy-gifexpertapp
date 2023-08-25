import { useState } from "react";

export function GifForm( { onNewCategory } ) {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const onFormSubmit = ( e ) => {
    e.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategory( inputValue );
    setInputValue('');
  }

  return (
    <form action="" onSubmit={onFormSubmit}>
      <input type="text" placeholder="Search gifs" value={inputValue} onChange={onInputChange} />
      <button type="submit">Add +</button>
    </form>
  );

}