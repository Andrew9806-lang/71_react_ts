import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

import { Homework10Wrapper, InputWrapper, Result, Spinner } from "./style";
import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";

// const[firstResult,setFirstResult]=useState<string>("")
// const[secondResult,setSecondResult]=useState<string>("")
// const[isShow,setIsShow]=useState<boolean>(false)

// const showResult=()=>{
//     setFirstResult(name)
//     setSecondResult(position)
//     setIsShow(!isShow)
// }

function Homework10() {
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [fact, setFact] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangePosition = (event: ChangeEvent<HTMLInputElement>) => {
    setPosition(event.target.value);
  };

  const fetchCatNinjaFact = async () => {
    setIsLoading(true);
    setFact("");
    setError(undefined);
    try {
      const result = await axios.get("https://catfact.ninja/fact");
      const data = result.data;
      setFact(data.fact);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCatNinjaFact();
  }, []);
  return (
    <Homework10Wrapper>
      <InputWrapper>
        <Input
          name="Name Ninja"
          label="Name Ninja"
          placeholder="pleace input a name ninja"
          id="Name_Ninja_id"
          value={name}
          onChange={onChangeName}
        />
        <Input
          name="position Ninja"
          label="Position Ninja"
          placeholder="pleace input a position ninja"
          id="Position_Ninja_id"
          value={position}
          onChange={onChangePosition}
        />
        <Button name="GET RESULT" onClick={fetchCatNinjaFact} />
      </InputWrapper>
      <Result>{isLoading ? <Spinner /> : error ? error : fact}</Result>
    </Homework10Wrapper>
  );
}
export default Homework10;
