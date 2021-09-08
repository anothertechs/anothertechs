import React from "react";
import { Row, Col } from "react-bootstrap";
import { BlogsAd } from "../components/blogsAd";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ShowBlogs({ posts }) {
  return (
    <div>
      <div className="m-4 p-2">
        <Row>
          <Col md={8} sm={12}>
            {posts.map((post, index) => (
              <div className="mt-3 pt-2">
                <Row>
                  <Col md="3" sm="12" className="d-flex align-items-center">
                    <GatsbyImage
                      image={getImage(post.frontmatter.thumbnail)}
                      alt={post.frontmatter.title}
                    />
                  </Col>
                  <Col md="9" sm="12">
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
          <Col md={4} sm={12}>
            <div className="d-flex align-items-center sticky-md-top">
              <div className="m-2 p-1">
                <BlogsAd slot="9825781021" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
