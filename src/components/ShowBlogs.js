import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import AdSense from "react-adsense";
import { showGrid } from "../components/index.module.css";

export default function ShowBlogs({ posts }) {
  let p = [];
  /* Understanding why i did this need GOD level of brain*/
  for (var i = 0, a = 0; a < posts.length; ++i) {
    if (i % 5 === 0) p.push({ ads: true });
    else {
      p.push(posts[a]);
      ++a;
    }
  }
  return (
    <div>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {p.map((post, index) => (
            <div>
              {post.ads === true ? (
                <Card className="p-2 border border-2 rounded">
                  <div className={showGrid}>
                    <Card.Body>
                      <AdSense.Google
                        client="ca-pub-2965086569594457"
                        layoutKey="+37+p5-27-5t+zh"
                        slot="4038477159"
                        style={{ display: "block" }}
                        format="fluid"
                        responsive="true"
                      />
                    </Card.Body>
                  </div>
                </Card>
              ) : (
                <Col className="d-flex align-self-stretch">
                  <Card className="p-2 border border-2 rounded" key={post.id}>
                    <Card.Img
                      variant="top"
                      width={300}
                      height={300}
                      src={
                        post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp
                      }
                    />
                    <div className="mt-3 pt-2 ">
                      <a
                        style={{ textDecoration: "none" }}
                        href={`/${post.slug}`}
                        className="link-dark"
                      >
                        <Card.Title>{post.frontmatter.title}</Card.Title>
                      </a>
                    </div>
                    <Card.Body>{post.excerpt}</Card.Body>
                    <Card.Footer>
                      <small className="text-muted">
                        {" "}
                        {post.frontmatter.date}
                      </small>
                    </Card.Footer>
                  </Card>
                </Col>
              )}
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
