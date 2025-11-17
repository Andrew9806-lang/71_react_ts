import { Link, useNavigate } from "react-router-dom";
import {
  ButtonLogo,
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./style";
import type { LayoutProps } from "./type";
import Button from "../Button/Button";

function Lyout({ children }: LayoutProps) {
  // children pomogaet perenesti vsyu stranicu
  const navigate = useNavigate();
  const goToHome = ()=>{
    navigate(-1);
  };
  return (
    <LayoutComponent>
      <Header>
    <Link to="/">
    <Logo />
    <ButtonLogo>
    <Button name="<--" onClick={goToHome} />
    </ButtonLogo>
    </Link>
        <NavContainer>
          <StyledNavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Home
          </StyledNavLink>

          <StyledNavLink
            to="/about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            About
          </StyledNavLink>

          <StyledNavLink
            to="/users"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Users
          </StyledNavLink>
          <StyledNavLink
            to="/clients"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
          >
            Clients
          </StyledNavLink>
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
    <Link to="/">
    <Logo />
    </Link>
      </Footer>
    </LayoutComponent>
  );
}
export default Lyout;
