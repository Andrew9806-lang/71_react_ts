import { Link, useNavigate } from "react-router-dom";
import { ClientsPage } from "./style";
import Button from "../../../Components/Button/Button";

function Clients() {
  const navigate = useNavigate();
  const goToFacebook = () => {
    navigate("/clients/facebook");
  };
  const goToGmail = () => {
    navigate("/clients/gmail");
  };
  const goToMercedes= ()=>{
    navigate("/clients/mercedes");
  };

  return (
    <ClientsPage>
      Content About Clients
      <Link to="/clients/facebook">FaceBook</Link>
      <Button name="go to about FaceBook" onClick={goToFacebook} />
      <Link to="/clients/gmail">Gmail</Link>
      <Button name="go to about Gmail" onClick={goToGmail} />
      <Link to="/clients/mercedes">Mercedes</Link>
      <Button name="go to about Mercedes" onClick={goToMercedes} />
    </ClientsPage>
  );
}
export default Clients;
