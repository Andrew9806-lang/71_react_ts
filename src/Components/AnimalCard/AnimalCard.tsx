import "./styles.css";
import type { Animal } from "./type";

// props kotoriy nazivaetsya children - mozhet dobavlyat komponent celie chasti kontenta (jsx)


function AnimalCard({animalName,animalSpecies,image,children}:Animal){
    // zdes skobki obyazatelno figurnie dlya distrurizirushego objecta zamesto props
    
    return(
        <div className="animal-card-wrapper">
            <h3>{animalName}</h3>
            <div>{animalSpecies}</div>
            <img src={image}/>
            {children} 
            {/* tam gde props children tam i dobavlyaetsya  */}
        </div>
    )
}
export default AnimalCard;