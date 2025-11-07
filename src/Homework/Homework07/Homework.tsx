import { v4 } from "uuid";
import AnimalCard from "../../Components/AnimalCard/AnimalCard";
import "./style.css";
import "./type"
import { AnimalData } from "./type";

// import AnimalCard from "../../Components/AnimalCard/AnimalCard";
// import Button from "../../Components/Button/Button";
// import {lionData,zebraData,hippoData, AnimalData} from "./type"


function Homework07(){
    // map eto funkciya ee nado tipisirovat
    // 
    const animals:JSX.Element = AnimalData.map((animal:Animal):JSX.Element=>{
        return(
            <AnimalCard
            key={v4()}
            animalName={animal.animalName}
            animalSpecies={animal.animalSpecies} 
            image={animal.image}/>
            
        );
    })
return(<div className="homework07-wrapper">

</div>)

}
export default Homework07;



