import "./styles.css";
import{InputStyle} from "./styles";

function Input({ name, type, id, label, placeholder }) {
  return (
    <InputStyle>
      <label htmlFor={id}>{label}</label>
      <input name={name} type={type} id={id} placeholder={placeholder} />
  </InputStyle>
  );
}

export default Input;