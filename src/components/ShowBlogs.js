import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import { BlogsAd } from "../components/blogsAd";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ShowBlogs({ posts }) {
  return (
    <div>
      <Container>
        <Row>
          <Col md={10} sm={12}>
            {posts.map((post, index) => (
              <div className="mt-3 pt-2">
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
          </Col>
          <Col md={2} sm={12}>
            <div className="m-2 p-2 sticky-md-top">
              <div className="m-2 p-1">
                <BlogsAd slot="9825781021" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
