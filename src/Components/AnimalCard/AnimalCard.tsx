import "./styles.css";
import type { AnimalCardProps } from "./type";

// props kotoriy nazivaetsya children - mozhet dobavlyat komponent celie chasti kontenta (jsx)


function AnimalCard({animalName,animalSpecies,animalImg,children}:AnimalCardProps){
    // zdes skobki obyazatelno figurnie dlya distrurizirushego objecta zamesto props
    
    return(
        <div className="animal-card-wrapper">
            <h3>{animalName}</h3>
            <div>{animalSpecies}</div>
            <img src={animalImg}/>
            {children} 
            {/* tam gde props children tam i dobavlyaetsya  */}
        </div>
    )
}
export default AnimalCard;