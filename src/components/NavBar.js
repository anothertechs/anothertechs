import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { navlink, burger } from "./index.module.css";
import { CodeSlash } from "react-bootstrap-icons";
/*
          <Form className="d-lg-flex mx-sm-2 px-sm-2">
            <FormControl
              className={input}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button
              className="mt-3 pt-2 mt-lg-0 pt-lg-0 mx-lg-2 px-lg-2"
              variant="outline-warning"
            >
              Search
            </Button>
 
 </Form>
 */

const NavBar = () => {
  const { title } = useSiteMetadata();
  return (
    <div className="mt-2 mb-3 pb-2">
      <Navbar
        style={{
          borderRadius: "7px",
        }}
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand className="mx-4 px-2 " href="/">
          <div className={navlink}>{title}</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <CodeSlash className={navlink} size={30} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <div className="mx-2 text-white text-uppercase px-1 mx-lg-0 px-lg-0 d-lg-flex">
              <Nav.Link href="/">
                <div className={navlink}>Home</div>
              </Nav.Link>
              <Nav.Link href="/blogs">
                <div className={navlink}>Blogs</div>
              </Nav.Link>
              <Nav.Link href="/about">
                <div className={navlink}>About</div>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
