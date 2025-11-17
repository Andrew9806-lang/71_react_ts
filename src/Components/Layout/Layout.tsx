import { Link } from "react-router-dom";
import {
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
  StyledNavLink,
} from "./style";
import type { LayoutProps } from "./type";

function Lyout({ children }: LayoutProps) {
  // children pomogaet perenesti vsyu stranicu
  return (
    <LayoutComponent>
      <Header>
    <Link to="/">
    <Logo />
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
