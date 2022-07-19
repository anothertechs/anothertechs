import React from "react";
//import { BlogsAd } from "../components/blogsAd";
import { Row, Col } from "react-bootstrap";
import { BlogCard } from "../components/BlogCard";
import AdSense from "react-adsense";

export default function ShowBlogs({ posts }) {
  return (
    <div>
      <div>
        <AdSense.Google
          client="ca-pub-2965086569594457"
          slot="9825781021"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />
      </div>
      <div className="m-4 p-2">
        <Row xs={1} md={2} lg={4} className="g-4">
          {posts.map((post, index) => (
            <div key={index}>
              <Col className="d-flex align-self-stretch">
                <BlogCard
                  img={post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp}
                  slug={`/${post.slug}`}
                  title={post.frontmatter.title}
                  excerpt={post.frontmatter.description}
                  date={post.frontmatter.date}
                />
              </Col>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}
