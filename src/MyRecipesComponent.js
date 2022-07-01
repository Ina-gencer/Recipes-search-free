function MyRecipesComponent({label, image, calories, ingredients}){
    return(<div >
    <div className="box_recipe">
    <h2>{label}</h2>
        <div className="card">
        
        <div >
            <img className="tasty" src={image} alt="recipe" /> 
            <p className="par">{calories.toFixed()} calories</p>
        </div>
       
       <ul className="list" >  Ingredients:
            {ingredients.map((ingredient,index) => (
                <li key={index}>{ingredient} </li>
            ))}
       </ul>

        </div>

        </div>
    </div>)

    
}
export default MyRecipesComponent;
