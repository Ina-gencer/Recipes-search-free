function MyRecipesComponent({label, image, calories, ingredients, nutrientsLabelCa, nutrientsQuantityCa,
     nutrientsUnitCa,  cuisineType, source, totalTime, dishType, mealType, serves, url,
     nutrientsLabelFat, nutrientsQuantityFat, nutrientsUnitFat, nutrientsLabelSugar, nutrientsQuantitySugar, nutrientsUnitSugar,
     nutrientsLabelCHOCDF, nutrientsQuantityCHOCDF, nutrientsUnitCHOCDF,
     nutrientsLabelCHOLE, nutrientsQuantityCHOLE, nutrientsUnitCHOLE,
     nutrientsLabelFAMS, nutrientsQuantityFAMS,  nutrientsUnitFAMS,
     nutrientsLabelFAPU, nutrientsQuantityFAPU, nutrientsUnitFAPU,
     nutrientsLabelFASAT, nutrientsQuantityFASAT, nutrientsUnitFASAT,
     nutrientsLabelFATRN, nutrientsQuantityFATRN, nutrientsUnitFATRN,
     nutrientsLabelFE, nutrientsQuantityFE, nutrientsUnitFE,
     nutrientsLabelFIBTG, nutrientsQuantityFIBTG, nutrientsUnitFIBTG,
     nutrientsLabelFOLAC, nutrientsQuantityFOLAC, nutrientsUnitFOLAC,
     nutrientsLabelK, nutrientsQuantityK, nutrientsUnitK,
     nutrientsLabelMG, nutrientsQuantityMG, nutrientsUnitMG,
     nutrientsLabelNA, nutrientsQuantityNA, nutrientsUnitNA,
     nutrientsLabelNIA, nutrientsQuantityNIA, nutrientsUnitNIA,
     nutrientsLabelP, nutrientsQuantityP, nutrientsUnitP,
     nutrientsLabelPROCNT, nutrientsQuantityPROCNT, nutrientsUnitPROCNT,
     nutrientsLabelRIBF, nutrientsQuantityRIBF, nutrientsUnitRIBF,
     nutrientsLabelTHIA, nutrientsQuantityTHIA, nutrientsUnitTHIA,
     nutrientsLabelTOCPHA, nutrientsQuantityTOCPHA, nutrientsUnitTOCPHA,
     nutrientsLabelVITA_RAE, nutrientsQuantityVITA_RAE, nutrientsUnitVITA_RAE,
     nutrientsLabelVITB6A, nutrientsQuantityVITB6A, nutrientsUnitVITB6A,
     nutrientsLabelVITB12, nutrientsQuantityVITB12, nutrientsUnitVITB12,
     nutrientsLabelVITC, nutrientsQuantityVITC, nutrientsUnitVITC,
     nutrientsLabelVITD, nutrientsQuantityVITD, nutrientsUnitVITD,
     nutrientsLabelVITK1, nutrientsQuantityVITK1, nutrientsUnitVITK1,
     nutrientsLabelZN, nutrientsQuantityZN, nutrientsUnitZN,
     }){
    return(<div >

    <div className="box_recipe">

        <div className="card"> 
            <div className="label">
                <h2>{label}</h2>
            </div>

            <div className="big_container">
                <div >
                    <p>cuisine: <span> {cuisineType} </span> </p> 
                    <p>meal type: <span>  {mealType}, {dishType}</span> </p>
                    <img className="tasty" src={image} alt="recipe" /> 
                    <p className="par"> {calories.toFixed()} calories</p>
                    <p>Prep:<span> {totalTime} mins</span></p>
                    <p>Serves: <span>{serves}</span> </p>
                    <p>source: <span>"{source}"</span> </p>
                    <a href={url} ><button className="btn-click">Preparation</button></a>
                </div>
       
                <div>
                    <ul className="list"  >  Ingredients:
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient} </li>
                    ))}
                    </ul>
                </div>

                <div className="t-none">
                    <ul className="nutrition">Total nutrition: 
                        <li >{nutrientsLabelCa}: {nutrientsQuantityCa.toFixed()}  {nutrientsUnitCa}</li>
                        <li>{nutrientsLabelFat}:  {nutrientsQuantityFat.toFixed()}  {nutrientsUnitFat} </li>
                        <li>{nutrientsLabelCHOCDF}: {nutrientsQuantityCHOCDF.toFixed()}  {nutrientsUnitCHOCDF} </li>
                        <li>{nutrientsLabelCHOLE}: {nutrientsQuantityCHOLE.toFixed()}  {nutrientsUnitCHOLE} </li>
                        <li>{nutrientsLabelFAMS}: {nutrientsQuantityFAMS.toFixed()}  {nutrientsUnitFAMS} </li>
                        <li>{nutrientsLabelFAPU}: {nutrientsQuantityFAPU.toFixed()}  {nutrientsUnitFAPU} </li>
                        <li>{nutrientsLabelFASAT}: {nutrientsQuantityFASAT.toFixed()}  {nutrientsUnitFASAT} </li> 
                        <li>{nutrientsLabelFATRN}: {nutrientsQuantityFATRN.toFixed()}  {nutrientsUnitFATRN} </li> 
                        <li>{nutrientsLabelFE}: {nutrientsQuantityFE.toFixed()}  {nutrientsUnitFE} </li> 
                        <li>{nutrientsLabelFIBTG}: {nutrientsQuantityFIBTG.toFixed()}  {nutrientsUnitFIBTG} </li>  
                        <li>{nutrientsLabelFOLAC}: {nutrientsQuantityFOLAC.toFixed()}  {nutrientsUnitFOLAC} </li>  
                        <li>{nutrientsLabelK}: {nutrientsQuantityK.toFixed()}  {nutrientsUnitK} </li> 
                        <li>{nutrientsLabelMG}: {nutrientsQuantityMG.toFixed()}  {nutrientsUnitMG} </li> 
                        <li>{nutrientsLabelNA}: {nutrientsQuantityNA.toFixed()}  {nutrientsUnitNA} </li> 
                        <li>{nutrientsLabelNIA}: {nutrientsQuantityNIA.toFixed()}  {nutrientsUnitNIA} </li>  
                        <li>{nutrientsLabelP}: {nutrientsQuantityP.toFixed()}  {nutrientsUnitP} </li>  
                        <li>{nutrientsLabelPROCNT}: {nutrientsQuantityPROCNT.toFixed()}  {nutrientsUnitPROCNT} </li>
                        <li>{nutrientsLabelRIBF}: {nutrientsQuantityRIBF.toFixed()}  {nutrientsUnitRIBF} </li> 
                        <li>{nutrientsLabelSugar}: {nutrientsQuantitySugar.toFixed()}  {nutrientsUnitSugar} </li>
                        <li>{nutrientsLabelTHIA}: {nutrientsQuantityTHIA.toFixed()}  {nutrientsUnitTHIA} </li> 
                        <li>{nutrientsLabelTOCPHA}: {nutrientsQuantityTOCPHA.toFixed()}  {nutrientsUnitTOCPHA} </li>
                        <li>{nutrientsLabelVITA_RAE}: {nutrientsQuantityVITA_RAE.toFixed()}  {nutrientsUnitVITA_RAE} </li> 
                        <li>{nutrientsLabelVITB6A}: {nutrientsQuantityVITB6A.toFixed()}  {nutrientsUnitVITB6A} </li>
                        <li>{nutrientsLabelVITB12}: {nutrientsQuantityVITB12.toFixed()}  {nutrientsUnitVITB12} </li>  
                        <li>{nutrientsLabelVITC}: {nutrientsQuantityVITC.toFixed()}  {nutrientsUnitVITC} </li> 
                        <li>{nutrientsLabelVITD}: {nutrientsQuantityVITD.toFixed()}  {nutrientsUnitVITD} </li> 
                        <li>{nutrientsLabelVITK1}: {nutrientsQuantityVITK1.toFixed()}  {nutrientsUnitVITK1} </li>
                        <li>{nutrientsLabelZN}: {nutrientsQuantityZN.toFixed()}  {nutrientsUnitZN} </li>  
                    </ul>
                </div>
        </div>
        </div>
        </div>
    </div>)

    
}
export default MyRecipesComponent;
