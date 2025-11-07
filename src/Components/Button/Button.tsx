import "./styles.css";
import type { ButtonProps } from "./types";
// interface ButtonProps{
//   type:"button"|"submit"|"reset"
//   name:string
//   onClick:()=>void // tak mi tipisiruem funkciyu esli est est parametri mi dolzhni ukazivat ih
//   disabled:boolean // false govorit chto ona aktivna



function Button({ type = "button", onClick, name, disabled=false }:ButtonProps) {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
