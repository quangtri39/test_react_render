import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NabBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/state" className="nav-link">
            State
          </Link>
          <Link to="/reducer" className="nav-link">
            Reducer
          </Link>
          <Link to="/redux" className="nav-link">
            Redux
          </Link>
          <Link to="/context" className="nav-link">
            Context
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
