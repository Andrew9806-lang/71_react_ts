import "./styles.css";

// sozdaetsya s pomoshyu slovo function 
// ! obyazatelno s pomoshyu bolshoi bukvi 
// komponent dolzhen obyazaterlno dolzhen vozvrashat jsx incache on prosto ne budet komponentom

//u funkcionalnih komponentov est parametr nazivaestya props
// etot parametr pozvolyaet v moment vizova peredat v komponent znacheniya 
// to est mi zadaem object i pishem tuda znachenie kotorie hotim 
function Button({type = "button",onClick,name}){
    return <button className="button" type={type} onClick={onClick}>{name}</button>;
}
//export komponenta po umolchaniyu komponenta button s pomoshyu eksporta
// mi mozhem poluchat komponent v drugih komponentah i tam ego ispolzovat 
// inache komponent budet nedostupen v drugih failah projejta 

export default Button;


// const props eto object = {
// name:
// type:

//}