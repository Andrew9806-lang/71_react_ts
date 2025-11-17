import { Link ,useNavigate} from "react-router-dom";
import { Title, UsersPage } from "./styles";
import Button from "../../../Components/Button/Button";

function Users() {
  // huk vozvrashaet funkciyu s pomoshyu kotoroi mi mozhem perenapravlyat
  const navigate = useNavigate();
  const goToAboutPage = ()=>{
    navigate("/about")
  }
  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* <Link to="/users/user">Tom Smith</Link> */}
      {/* tut tak kak ona dochernyaa mozhno ne propisivat */}
        <Link to="/user">Tom Smith</Link>
      <Button name="Go to About page" onClick={goToAboutPage} />
    </UsersPage>
  );
}

export default Users;
