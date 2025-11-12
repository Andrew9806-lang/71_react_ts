import { useState, type ChangeEvent ,useEffect} from "react";
import { InputsWrapper, Lesson10Wrapper, Result } from "./style"
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import axios from "axios";
function Lesson10() {
  const [userEmail, setUserEmail] = useState<string>("");
   const [userName, setUserName] = useState<string>("");


// ----------------------------------------
const [joke,setJoke]=useState<string>("")
const [error,setError]= useState<undefined|string>("");
const [isLoading,setIsloading] = useState<boolean>(false)


  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value);
  };
   const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
console.log("Lesson 10 rerender");

  //useEffect pro montirovanii komponenta (perviy render)
  // chtob funkciya (1i argument) vipolnilas tolko 1 raz(pri pervom randere)
  //nuzhno peredat pustoi massiv zavisimostei
  //useEffect daet nam chtom log ne vipolnalsya postoyanno 
  useEffect(()=>{console.log("Mounting");
  },[]);

 // useEffect при монтировании обновлении компонента (повторные рендеры)
  // Чтобы функция (1-й аргумент)  выполнялась каждый раз при изменении определённого
  // значения (состоянии) первого инпута, тогда во второй аргумент - массив зависимостей
  // нужно добавить соответствующую переменную
  // otslezhivaem izmeneniya pervogo inputa
  useEffect(() => {
    console.log("First input update");
  }, [userName]);

  //useEffect pri razmontirovanii komponenta 
  //Chtobi pered razmontirovaniem komponenta vipolnilas kakoeto deistviya 
  //nuzhno propisat vnutri funkcii kotoraya budet vozvrashatsya iz pervogo argumenta useEffect
  //pri etom massiv zavisimostei peredaem pusim 
  useEffect(()=>{
    return ()=>{console.log("Unmouting");
    }
  },[])
  // ---------------------------------------------------------------------
  const fetchJokeData= async ()=>{
    setJoke("")
    setError(undefined)
    try{
const result = await axios.get('https://official-joke-api.appspot.com/random_joke');
console.log(result.data);
const data = result.data;
setJoke(`${data.setup} - ${data.punchline}`)

    }catch(error:any){
      setError(error.message);

    }finally{

    }

}
    useEffect(()=>{fetchJokeData()
  },[]);

    useEffect(() => {
    console.log("First input update");
  }, [userName]);
  
  return (
    <Lesson10Wrapper>
      <InputsWrapper>
        <Input
          name="user_name"
          label="User name"
          id="user_name_id"
          placeholder="Enter your name"
          value={userName}
          onChange={onChangeName}
        />
        <Input
          name="user_email"
          label="User email"
          id="user_email_id"
          placeholder="Enter your email"
          value={userEmail}
          onChange={onChangeEmail}
        />
        <Button name="GET RESULT" onClick={fetchJokeData} />
      </InputsWrapper>
      <Result>{error ? error:joke}</Result>
    </Lesson10Wrapper>
  );
}
export default Lesson10;