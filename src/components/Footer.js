import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Github } from "react-bootstrap-icons";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { navlink } from "./index.module.css";

function Footer() {
  const { title } = useSiteMetadata();
  return (
    <div
      style={{ backgroundColor: "black", borderRadius: "7px" }}
      className="mt-5 pt-4 d-flex align-items-center "
    >
      <Container>
        <div>
          <Row>
            <Col xs={12} lg={4}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="m-3 p-2">
                  <Link
                    className={navlink}
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                </div>
                <div className="m-3 p-2">
                  <Link
                    className={navlink}
                    style={{ textDecoration: "none" }}
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </div>
                <div className="m-3 p-2">
                  <Link
                    className={navlink}
                    style={{ textDecoration: "none" }}
                    to="/blogs"
                  >
                    About
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="text-white m-3 p-2">
                  <h4>{title}</h4>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="m-3 p-2">
                  <Link to="#" className={navlink}>
                    <Facebook size={25} />
                  </Link>
                </div>
                <div className="m-3 p-2">
                  <Link to="#" className={navlink}>
                    <Instagram size={25} />
                  </Link>
                </div>
                <div className="m-3 p-2">
                  <Link to="#" className={navlink}>
                    <Twitter size={25} />
                  </Link>
                </div>
                <div className="m-3 p-2">
                  <Link to="#" className={navlink}>
                    <Github size={25} />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <hr className="bg-light border-2 border-top border-light" />
        <div>
          <p className="text-white text-center">
            &copy; {new Date().getFullYear()} {title}. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
