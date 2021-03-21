import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid';



const GiftExpertApp = () => {
    
    
    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () =>{
    //     setCategories(['Once Piece',...categories]);
    //     // setCategories(cat => ['Once Piece',...categories]);
    // }


    return(
        <>
          <h2>GiftExpertApp</h2>
          <AddCategory setCategories={setCategories}/>
          <hr />


        <ol>
            {
                categories.map((category,i)=> (
                    <GiftGrid 
                        key={ category } 
                        category={ category }/>   
                ))
            }
        </ol>


        </>
    )
   
}

export default GiftExpertApp;


