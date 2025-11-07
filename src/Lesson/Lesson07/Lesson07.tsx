import "./style.css";

function Lesson07() {
  //tip any - luboi tip
  let city: any = "Berlin";
  city = 23;
  city = true;
  city = [34, "Berlin", null, false];

  // tipisaciya objecta est 2 sposoba
  //cherez interface znak ? chto eto neobezatelno
  interface User {
    name: string;
    age: number;
    //znak vioprosa ukazivaet na to chto svoistvo neobyazatelno
    isAdmin?: boolean;
  }
  const userData: User = {
    name: "john",
    age: 23,
  };
  interface Adress {
    city: string;
    postcode: string | number;
  }
  const adress: Adress = {
    city: "Paris",
    postcode: 12345,
    street: "Main Street",
  };

  const adress2: Adress = {
    city: "London",
    postcode: 123456,
    street: "Main Street",
  };

  //vozmozhnosti interface
  //sozdanie odnoimennih interface- interface s takim zhe imenem ne budet otdelnim interfase
  //prosto budet dopolnayt predidushiy
  //mi mozhem dobovlyat kakoi to komponent ,svoistvo
  interface Adress {
    street: string;
  }

  // vozmozhnost 2
  //nasledovanie interface
  interface Person {
    fullName: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const PersonData: Person = {
    fullName: "Adam smith",
    email: "asd@gmail.com",
  };

  const adminData: Admin = {
    fullName: "John Johns",
    adminId: 2334456,
    email: "as@gmail.com",
  };

  //Tipisaciya objecta cherez type
  // zdes ispolzuem taype dlya sozdaniya uslozhnenogo tipa peremennih

  type Weight = string | number | null;
  let personWeight: Weight = "56kg";
  let userWeight: Weight = 45;

  //ispolzovanie type dlya tipisacii objecta
  type Animal = {
    name: string;
    weight: Weight;
    // tut weight mi sozdali vishe poetomu vsya tipisaciya pereshla k etomu komponentu
  };
  const animalData: Animal = {
    name: "Lion",
    weight: 200,
  };
  //Odnoimennie tipi (type) sozdavat nelzya
  // type Animal = string;

  //Objedenenie tipov eto kak nasledovanie u inteface
  type ZooAnimal = Animal & { country: string };

  const zebra: ZooAnimal = {
    country: "Afrika",
    name: "Zebra",
    weight: null,
  };
  // Generic eto peremennaya v kotoruyu mi mozhem podstavit nuzhniy tip v moment ispolzovaniya
  // Generic & Type
  type CUstomType<T> = [number, string, T];
  type CUstomType3<T = string> = [number, string, T];
  // znachenie po umolchaniyu

  const arrayMix: CUstomType<boolean> = [24, "Bob", true];
  const arrayMix2: CUstomType<number> = [40, "mary", 2345];
  const arrayMix3: CUstomType3 = [56, "Tom", "Berlin"];

  //Generic & Interface
  interface fruit<T = number> {
    title: string;
    adress: T;
  }

  const fruit1: fruit = {
    title: "Apple",
    adress: 45,
  };

  const fruit2: fruit<string> = {
    title: "Grape",
    adress: "4356",
  };

  //ENUM-----
  //chislovoe perecheslenie
  // esli mi prisvoim chislo to ot etogo chisla ostalnie budut brat chislovoe znachenoie 5-6-7 i td
  enum Colors {
    Red, // 0
    black, //1
    green, //2
  }
  let currentColor: Colors = Colors.black;

  console.log(currentColor);

  // strikovoe perecheslinie
  // enum dlya cvetov svetofora
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELOW = "yelow",
    GREEN = "green",
  }

  const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Stop";
      case TRAFFIC_LIGHT.YELOW:
        return "Progotovtes idti";
      case TRAFFIC_LIGHT.GREEN:
        return "Mozhno  idti";
    }
  };
  //tipizirovat
  interface Info {
id:number
name:string
  };
   const arrayUsers:Info[] = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Mary" },
  ];

  return <div className="lesson07-wrapper">{getAction(TRAFFIC_LIGHT.RED)}</div>;
}
export default Lesson07;
