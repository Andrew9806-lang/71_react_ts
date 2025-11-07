import "./styles.css";
import type { InputProps } from "./types";

function Input({ name, type = "text", id, label, placeholder }: InputProps) {
  return (
    <div className="input-container">
      {/* ternarniy operator ispolzuetsya chtob esli chtoto null chtom ono prosto ne otobrozhalos */}
      {/*  */}
      {label && <label htmlFor={id}>{label}</label>}
      <input name={name} type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default Input;
