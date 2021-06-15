import * as React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import img from "../images/photo_2021-06-13_08-31-26.jpg";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <main>
      <Seo title="About" />
      <NavBar />
      <div className="m-3 p-2">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <Image src={img} width="70%" roundedCircle />
            </Col>
            <Col xs={12} lg={6}>
              <div>
                <p className="h2 m-3 text-sm-center text-lg-left">
                  print("Hello World !")
                </p>
                <div className="d-flex mt-lg-4 pt-lg-4 mt-xs-2 pt-xs-2 align-items-center justify-content-center">
                  <p className="h6 text-mute">
                    This is my blog where I write about many things, including,
                    but not limited to Programming Languages, Framework, Machine
                    Learning, AI, Tech Related Blogs,Research, Tips and Tricks
                    and many more related topics
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex flex-column align-items-center mt-5- pt-5 justify-content-center">
            <p className="h2">Hi I'm Hatim.</p>
            <p className="text-mute">
              I'am a web developer, and machine learning parctitioner.
              <br />I have a Engineering degree in Computer Science(CSE). I
              Started this blog for two main reasons:
              <ol className="mt-3 mx-4 px-3">
                <li>
                  {" "}
                  Because I find prgrammming languages,software's and related
                  stuff very fascinating
                </li>
                <li>
                  Because I want to help people getting started and get good
                  applied on tech related stuff.
                </li>
              </ol>
            </p>
            <h4> Overwhelmed ?</h4>
            <p>
              {" "}
              I know what it is like to feel overwhelmed by the vast amounts of
              blogs, courses, books, papers and software tools available on
              Programming.
              <br /> It is difficult to know where to start and how to know
              which resources are worth the effort. It is easy to feel confused
              and thinking that there must be an easier path.
              <br /> You are not alone. There are thousands of developers that
              also feel overwhelmed. I used to be an overwhelmed developer.
            </p>
            <h4>Use Self-Study Small Projects</h4>
            <p>
              I knew the solution and was using it effectively, but it took me
              years to see it for what it was. As a professional software
              developer, it was part of my job to stay on top of tools,
              techniques, APIs and programming languages.
              <br /> Like many developers, I do this by designing and executing
              small projects on the side that use a tool or technique in order
              for me to learn it through applying it.
              <br /> You can be highly effective and deliver tons of value in
              your field without getting a <b>Degree!</b>.
            </p>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
