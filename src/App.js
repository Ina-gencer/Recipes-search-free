import './App.css';
import { useState, useEffect } from "react";
import video from './11.mp4';
import avocado from './avocado.png';
import MyRecipesComponent from "./MyRecipesComponent";


function App() {
  const API_ID = "e02d8760";
  const API_KEY = "3361f8cf7dee9b5c0af0feb7189cc74d";
   const [mySearch, setMySearch] = useState('')
  
   const [myRecipes, setMyRecipes] = useState([])
   const [wordSubmitted, setWordSubmitted] = useState('cheese')

useEffect( ()=> {
  const fetchData = async ()=> {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    console.log(data.hits)
    setMyRecipes(data.hits) 
   }
   fetchData();
}, [wordSubmitted])


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
          <button className='btn-search'>
            <img src={avocado} alt="avocado" className='icons' /> 
          </button>
        </form>
      </div>
      <div className='example'>
      <p>Enter any food name (for example: tomato, potato, onion..)</p>
      </div>
     <div >
   
      {myRecipes.map((element, index)=> (  
        <MyRecipesComponent key={index}  label={element.recipe.label}
        cuisineType={element.recipe.cuisineType[0]}
        totalTime={element.recipe.totalTime}
        dishType={element.recipe.dishType[0]}
        mealType={element.recipe.mealType[0]}
        serves={element.recipe.yield}
        source={element.recipe.source}
          image={element.recipe.image}
          calories={element.recipe.calories}
          nutrientsLabelCa={element.recipe.totalNutrients.CA.label}
          nutrientsQuantityCa={element.recipe.totalNutrients.CA.quantity}
          nutrientsUnitCa={element.recipe.totalNutrients.CA.unit}
          nutrientsLabelFat={element.recipe.totalNutrients.FAT.label}
          nutrientsQuantityFat={element.recipe.totalNutrients.FAT.quantity}
          nutrientsUnitFat={element.recipe.totalNutrients.FAT.unit}
          nutrientsLabelSugar={element.recipe.totalNutrients.SUGAR.label}
          nutrientsQuantitySugar={element.recipe.totalNutrients.SUGAR.quantity}
          nutrientsUnitSugar={element.recipe.totalNutrients.SUGAR.unit}
          nutrientsLabelCHOCDF={element.recipe.totalNutrients.CHOCDF.label}
          nutrientsQuantityCHOCDF={element.recipe.totalNutrients.CHOCDF.quantity}
          nutrientsUnitCHOCDF={element.recipe.totalNutrients.CHOCDF.unit}
          nutrientsLabelCHOLE={element.recipe.totalNutrients.CHOLE.label}
          nutrientsQuantityCHOLE={element.recipe.totalNutrients.CHOLE.quantity}
          nutrientsUnitCHOLE={element.recipe.totalNutrients.CHOLE.unit}
          nutrientsLabelFAMS={element.recipe.totalNutrients.FAMS.label}
          nutrientsQuantityFAMS={element.recipe.totalNutrients.FAMS.quantity}
          nutrientsUnitFAMS={element.recipe.totalNutrients.FAMS.unit}
          nutrientsLabelFAPU={element.recipe.totalNutrients.FAPU.label}
          nutrientsQuantityFAPU={element.recipe.totalNutrients.FAPU.quantity}
          nutrientsUnitFAPU={element.recipe.totalNutrients.FAPU.unit}
          nutrientsLabelFASAT={element.recipe.totalNutrients.FASAT.label}
          nutrientsQuantityFASAT={element.recipe.totalNutrients.FASAT.quantity}
          nutrientsUnitFASAT={element.recipe.totalNutrients.FASAT.unit}
          nutrientsLabelFATRN={element.recipe.totalNutrients.FATRN.label}
          nutrientsQuantityFATRN={element.recipe.totalNutrients.FATRN.quantity}
          nutrientsUnitFATRN={element.recipe.totalNutrients.FATRN.unit}
          nutrientsLabelFE={element.recipe.totalNutrients.FE.label}
          nutrientsQuantityFE={element.recipe.totalNutrients.FE.quantity}
          nutrientsUnitFE={element.recipe.totalNutrients.FE.unit}
          nutrientsLabelFIBTG={element.recipe.totalNutrients.FIBTG.label}
          nutrientsQuantityFIBTG={element.recipe.totalNutrients.FIBTG.quantity}
          nutrientsUnitFIBTG={element.recipe.totalNutrients.FIBTG.unit}
          nutrientsLabelFOLAC={element.recipe.totalNutrients.FOLAC.label}
          nutrientsQuantityFOLAC={element.recipe.totalNutrients.FOLAC.quantity}
          nutrientsUnitFOLAC={element.recipe.totalNutrients.FOLAC.unit}
          nutrientsLabelK={element.recipe.totalNutrients.K.label}
          nutrientsQuantityK={element.recipe.totalNutrients.K.quantity}
          nutrientsUnitK={element.recipe.totalNutrients.K.unit}
          nutrientsLabelMG={element.recipe.totalNutrients.MG.label}
          nutrientsQuantityMG={element.recipe.totalNutrients.MG.quantity}
          nutrientsUnitMG={element.recipe.totalNutrients.MG.unit}
          nutrientsLabelNA={element.recipe.totalNutrients.NA.label}
          nutrientsQuantityNA={element.recipe.totalNutrients.NA.quantity}
          nutrientsUnitNA={element.recipe.totalNutrients.NA.unit}
          nutrientsLabelNIA={element.recipe.totalNutrients.NIA.label}
          nutrientsQuantityNIA={element.recipe.totalNutrients.NIA.quantity}
          nutrientsUnitNIA={element.recipe.totalNutrients.NIA.unit}
          nutrientsLabelP={element.recipe.totalNutrients.P.label}
          nutrientsQuantityP={element.recipe.totalNutrients.P.quantity}
          nutrientsUnitP={element.recipe.totalNutrients.P.unit}
          nutrientsLabelPROCNT={element.recipe.totalNutrients.PROCNT.label}
          nutrientsQuantityPROCNT={element.recipe.totalNutrients.PROCNT.quantity}
          nutrientsUnitPROCNT={element.recipe.totalNutrients.PROCNT.unit}
          nutrientsLabelRIBF={element.recipe.totalNutrients.RIBF.label}
          nutrientsQuantityRIBF={element.recipe.totalNutrients.RIBF.quantity}
          nutrientsUnitRIBF={element.recipe.totalNutrients.RIBF.unit}
          nutrientsLabelTHIA={element.recipe.totalNutrients.THIA.label}
          nutrientsQuantityTHIA={element.recipe.totalNutrients.THIA.quantity}
          nutrientsUnitTHIA={element.recipe.totalNutrients.THIA.unit}
          nutrientsLabelTOCPHA={element.recipe.totalNutrients.TOCPHA.label}
          nutrientsQuantityTOCPHA={element.recipe.totalNutrients.TOCPHA.quantity}
          nutrientsUnitTOCPHA={element.recipe.totalNutrients.TOCPHA.unit}
          nutrientsLabelVITA_RAE={element.recipe.totalNutrients.VITA_RAE.label}
          nutrientsQuantityVITA_RAE={element.recipe.totalNutrients.VITA_RAE.quantity}
          nutrientsUnitVITA_RAE={element.recipe.totalNutrients.VITA_RAE.unit}
          nutrientsLabelVITB6A={element.recipe.totalNutrients.VITB6A.label}
          nutrientsQuantityVITB6A={element.recipe.totalNutrients.VITB6A.quantity}
          nutrientsUnitVITB6A={element.recipe.totalNutrients.VITB6A.unit}
          nutrientsLabelVITB12={element.recipe.totalNutrients.VITB12.label}
          nutrientsQuantityVITB12={element.recipe.totalNutrients.VITB12.quantity}
          nutrientsUnitVITB12={element.recipe.totalNutrients.VITB12.unit}
          nutrientsLabelVITC={element.recipe.totalNutrients.VITC.label}
          nutrientsQuantityVITC={element.recipe.totalNutrients.VITC.quantity}
          nutrientsUnitVITC={element.recipe.totalNutrients.VITC.unit}
          nutrientsLabelVITD={element.recipe.totalNutrients.VITD.label}
          nutrientsQuantityVITD={element.recipe.totalNutrients.VITD.quantity}
          nutrientsUnitVITD={element.recipe.totalNutrients.VITD.unit}
          nutrientsLabelVITK1={element.recipe.totalNutrients.VITK1.label}
          nutrientsQuantityVITK1={element.recipe.totalNutrients.VITK1.quantity}
          nutrientsUnitVITK1={element.recipe.totalNutrients.VITK1.unit}
          nutrientsLabelZN={element.recipe.totalNutrients.ZN.label}
          nutrientsQuantityZN={element.recipe.totalNutrients.ZN.quantity}
          nutrientsUnitZN={element.recipe.totalNutrients.ZN.unit}
          url={element.recipe.url}
          ingredients={element.recipe.ingredientLines} />
      ))}
</div>
<hr />
<div>
  <h6>by Ina Gencer, 2022</h6>
</div>
    </div>
  );
}
export default App;


