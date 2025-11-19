import { useState, type ChangeEvent, createContext } from "react";
import Input from "../../../../Components/Input/Input";
import { FormConatiner, InputWrapper } from "./style";
import Card from "../CardMessage/CardMessage";
import Button from "../../../../Components/Button/Button";

export const CreateText2 = createContext<string>("");

function BlogManagament() {
  const [inputValue, setInputValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const sendMessage = () => {
    setMessage(inputValue);
  };

  return (
    <CreateText2.Provider value={message}>
      <FormConatiner>
        <InputWrapper>
          <Input
            name="message"
            type="text"
            label="message"
            id="message_id"
            placeholder="Введите имя и фамилию"
            value={inputValue}
            onChange={onChange}
          />
          <Card />
        </InputWrapper>
        <Button name="Post" type="button" onClick={sendMessage} />
      </FormConatiner>
    </CreateText2.Provider>
  );
}

export default BlogManagament;
