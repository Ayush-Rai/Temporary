import { Navbar, Nav, Container } from "react-bootstrap";

import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <Navbar className={styles.navbar} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className={styles.navBrand} href="#home">
          <h1>Temporary</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={styles.navLink} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#link">
              Link
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#home">
              Home
            </Nav.Link>
            <Nav.Link className={styles.navLink} href="#link">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
