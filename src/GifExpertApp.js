import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One']);
    //const handleAdd = (event) => {
    //    //setCategories([ ...categories, 'Hola' ]);
    //    setCategories((categories) =>  [ ...categories, 'Hola' ]);
   // }

  return (
    <div>
        <h2>GitExpertApp</h2>
        <hr></hr>
        <AddCategory setCategories={ setCategories }/>
        <ol>
            {
                categories.map( category => (
                    <GifGrid
                        category={ category }
                        key={ category }
                    />

                ))
            }
        </ol>
    </div>
  )
}

export default GifExpertApp
