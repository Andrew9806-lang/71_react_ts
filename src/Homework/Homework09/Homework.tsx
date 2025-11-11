import Button from "../../Components/Button/Button";
import { useState, type ChangeEvent } from "react";
import { HomeworkWrapper, Result} from "./style";
import Input from "../../Components/Input/Input";
import { InputsWrapper } from "../../Lesson/Lesson09/style";

function Homework09() {
  const [nameLastname, setNameLastname] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameLastname(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event?.target.value);
  };

  const showResult = () => {
    setResult(`name:${nameLastname}  email:${userEmail}`);
  };

  return (
    <HomeworkWrapper>
      <InputsWrapper>
        <Input
          name="Name and Lastname"
          label="Name und Lastname"
          placeholder="please input your name und lastname"
          id="Name_lsatname_id"
          value={nameLastname}
          onChange={onChange}
        />
        <Input
          name="User Email"
          label="User Email"
          placeholder="please input your email"
          id="User_email_id"
          value={userEmail}
          onChange={onChangeEmail}
        />

        <Button name="Get" onClick={showResult} />
      </InputsWrapper>
      {result && <Result>{result}</Result>}
    </HomeworkWrapper>
  );
}

export default Homework09;
