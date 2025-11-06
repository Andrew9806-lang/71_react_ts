import "./style.css";

function Lesson06() {
  // tipi peremennih
  //tip peremennih ukazivaetsya posle nazvaniya peremennoi cherez dvoetochie
  //1.tipisaciya strok - dlya etogo ispolsuetsya string
  let userName: string = "Mary";
  userName = `Tom`;
  // userName=true;
  // to est esli string ona snachalo slozhene sdelaet a potom slozhit chisla
  let result: string = 1 + 2 + "4";

  //2 tipisaciya chisel-number
  let simpleNumber: number = 23;
  simpleNumber = Infinity; //beskonechnost
  simpleNumber = 2.6;
  simpleNumber = -2;
  simpleNumber = NaN; // oshibka vichesleniya

  //3.Boolean tipisaciya logicheskogo tipa dannih
  let isAdmin: boolean = true;
  isAdmin = false;
  isAdmin = userName !== "Bob";
  //4.Undefined tipisaciya neopredelennogo tipa tolko undefined
  let age: undefined = undefined;
  //5.Null znachenie tozhe null
  let data: null = null;
  //6.Bigint eto bolshie chisla nado stavit v konce bukvu n
  let bigNumber: bigint = 12344444444444444433333332222222222333333n;
  //7.Symbol tipisaciya symbol
  let uniq: symbol = Symbol("discription");
  // 8.1 tipisaciya massiva- ukazivaem posle nazvaniya massiva tip dannih kotorie
  // budut hranitsya v massive,a zatem stavim kvadratnie skobki
  // mi ne mozhem dobavit drugoi tip dannih krome ukazannogo
  const colors: string[] = ["red", "blue", "green"];

  // dlya tipisacii massiva postoyannoi dlini (mozhno s raznimi znacheniyami
  //mozhno ispolzovat kortezh(tupel))
  const colorCode: [string, number] = ["blue", 673];

  //8.2 Tipisaciya funkcii
  //esli funkciya nechego ne vozvrashart
  const showMessage = (): void => {
    console.log("Hello");
  };
  // esli funkciya vozvrashaet znachenie togda prosto propisivaet ego tip
  const getSum=():number =>{
    const sum:number = 2+7;
    return sum
  };

  //tipisaciya parametrov funkcii to est parametri nuzhno tipisirovat
  const getUserData = (firstName:string,age:number):string=>{
    return `${firstName}- ${age}`
  };

  //avtomaticheskoe opredelenie tipov tsk zhe ne rabotaet s parametrami funkcii
  //tak kak on ne znaet chhto peredadim , a kogda zadadim znachenie on vidit
  let name ="Bob";
  const number=[4,5,6]; // tak delat nelzya 

  //10 Union tipi eto peremennya mozhet hranit raznie tipi dannih libo eto libo eto
  //raznie nelzya 
  let color:string| number = 78;
  color="blue";

  const example :(string|number)[]=[34,"green",67];

  return (
    <div className="lesson06-wrapper">
      <div>Lesson06-TypeScript</div>
      {/* {isAdmin && "Bob"} */}
      {getUserData("Tom",24)}
    </div>
  );
}
export default Lesson06;
