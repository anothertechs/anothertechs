import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Github } from "react-bootstrap-icons";
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
                  <a
                    className={navlink}
                    style={{ textDecoration: "none" }}
                    href="/"
                  >
                    Home
                  </a>
                </div>
                <div className="m-3 p-2">
                  <a
                    className={navlink}
                    style={{ textDecoration: "none" }}
                    href="/blogs"
                  >
                    Blogs
                  </a>
                </div>
                <div className="m-3 p-2">
                  <a
                    className={navlink}
                    style={{ textDecoration: "none" }}
                    href="/about"
                  >
                    About
                  </a>
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
                  <a
                    href="https://www.facebook.com/Another-Techs-102190855452182"
                    className={navlink}
                  >
                    <Facebook size={25} />
                  </a>
                </div>
                <div className="m-3 p-2">
                  <a
                    href="https://www.instagram.com/hatim_master/"
                    className={navlink}
                  >
                    <Instagram size={25} />
                  </a>
                </div>
                <div className="m-3 p-2">
                  <a
                    href="https://twitter.com/anothertechs"
                    className={navlink}
                  >
                    <Twitter size={25} />
                  </a>
                </div>
                <div className="m-3 p-2">
                  <a href="https://github.com/Master52" className={navlink}>
                    <Github size={25} />
                  </a>
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
