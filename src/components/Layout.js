import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link
              to="/"
              style={{
                textDecoration: "none",
                paddingLeft: 13,
                color: "white",
              }}
            >
              FakeGiffy
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  paddingLeft: 13,
                  color: "white",
                }}
              >
                Home
              </Link>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  paddingLeft: 13,
                  color: "white",
                }}
              >
                Contact
              </Link>
              <Link
                to="/gallery"
                style={{
                  textDecoration: "none",
                  paddingLeft: 13,
                  color: "white",
                }}
              >
                Gallery
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}
export default Layout;
