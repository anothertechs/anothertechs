import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import AdSense from "react-adsense";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ShowBlogs({ posts }) {
  return (
    <div>
      <Container>
        {posts.map((post, index) => (
          <div key={index} className="mt-3 pt-2">
            {index % 5 === 0 && (
              <Row>
                <AdSense.Google
                  client="ca-pub-2965086569594457"
                  layoutKey="-an-7l-bz+qf+1nf"
                  slot="9095362719"
                  style={{ display: "block" }}
                  format="fluid"
                />
                <hr />
              </Row>
            )}
            <Row>
              <Col md="4" sm="12">
                <GatsbyImage
                  image={getImage(post.frontmatter.thumbnail)}
                  alt={post.frontmatter.title}
                />
              </Col>
              <Col>
                <div className="mt-4">
                  <a className="link-dark" href={`/${post.slug}`}>
                    <h4>{post.frontmatter.title}</h4>
                  </a>
                  <p className="mt-3 text-muted pt-1">
                    {post.frontmatter.description}
                  </p>
                </div>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </Container>
    </div>
  );
}
