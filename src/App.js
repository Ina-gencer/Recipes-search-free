import './App.css';
import { useState, useEffect } from "react";
import video from './food.mp4';
import fry from './icons8-fry.png';
import MyRecipesComponent from "./MyRecipesComponent";


function App() {
  const API_ID = "e02d8760";
  const API_KEY = "3361f8cf7dee9b5c0af0feb7189cc74d";

   const [mySearch, setMySearch] = useState('')
   const [myRecipes, setMyRecipes] = useState([])
   const [wordSubmitted, setWordSubmitted] = useState('avocado')

 useEffect( ()=>{
   fetchData();
 }, [wordSubmitted])

 const fetchData = async ()=> {
   const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`) ;
   const data = await response.json();
 console.log(data.hits)
    setMyRecipes(data.hits)
 }

  const myRecipeSearch =(e)=> {
   // console.log(e.target.value)
    setMySearch(e.target.value)
  }
  const finalSearch =(e)=> {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }
  return (
    <div className="App">
      <div className="container">
            <video autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>  
        <h1>Find a Recipe</h1>
      </div>


     
      <div className='container' >
        <form onSubmit={finalSearch} className="container-search">
          <input type="text"
          className="search"
          placeholder="Search..."
          onChange={myRecipeSearch}
          value={mySearch} />
           
           <button>
           <img src={fry} alt="icon fry" className='icons' /> 
        </button>
          </form>
      </div>
     
  
     <div className='big_container'>
      {myRecipes.map(element=> (  
        <MyRecipesComponent  label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines} />
      ))}
</div>

    </div>
  );
}
export default App;


