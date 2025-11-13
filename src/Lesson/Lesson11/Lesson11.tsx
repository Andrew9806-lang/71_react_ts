import { useEffect, useState, type ChangeEvent } from "react";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { ErrorMessage, FormWrapper, Lesson11Wrapper, Result, ResultWrapper, Spinner } from "./styled";
import axios from "axios";
import { v4 } from "uuid";

function Lesson11() {
  const [type, setType] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string[]>([]);
  const onChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };
  const getImagesPet = async () => {
    setError(undefined);
    setIsLoading(true);
    setType("")

    try {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImage((image)=>[...image,result.data.message]);
      console.log(result);
      
      
    } catch (error: any){
    setError(error.message) 
    } finally {
        setIsLoading(false)
    }
  };


  useEffect(()=>{console.log("input update");
  },[type])

  const DeleteInfo = ()=>{
    setType("")
    setError(undefined)
    setImage([])
  };

  return (
    <Lesson11Wrapper>
      <FormWrapper>
        <Input
          name="Search Pet"
          label="type"
          placeholder="input a type Pet"
          id="Type_Pet_id"
          value={type}
          onChange={onChangeType}
        />
        <Button name="get more Images" onClick={getImagesPet} />
        <Button  name="DELETE ALL DATA" onClick={DeleteInfo} primary />
      </FormWrapper>
      <ResultWrapper>
         <Result>
            {isLoading&& <Spinner /> }
         {/* < img src={image[0]} alt="Pet" /> 
          < img src={image[1]} alt="Pet" />  */}
          {image.map((image)=>{
           return  <img  key={v4()} src={image} alt="pet"/>
          })}
         {error && <ErrorMessage>{error}</ErrorMessage>}
        </Result>
      </ResultWrapper>
    </Lesson11Wrapper>
  );
}
export default Lesson11;
