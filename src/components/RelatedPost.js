import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BlogsAd } from "../components/blogsAd";

const Post = ({ data, category }) => {
  var similarPost = data.allMdx.nodes
    .filter((node) => node.frontmatter.category === category)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <div>
      <div>
        <BlogsAd slot="9151719959" />
        <hr />
      </div>
      {similarPost.map((post, index) => (
        <div key={index} className="mt-3 pt-2">
          <Row>
            <Col sm="2" className="d-flex align-items-center">
              <GatsbyImage
                image={getImage(post.frontmatter.thumbnail)}
                alt={post.frontmatter.title}
              />
            </Col>
            <Col sm="10">
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
    </div>
  );
};

const RelatedPost = ({ category }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            nodes {
              frontmatter {
                description
                title
                keywords
                category
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: [WEBP]
                      width: 500
                    )
                  }
                }
              }
              slug
            }
          }
        }
      `}
      render={(data) => <Post data={data} category={category} />}
    />
  );
};

export default RelatedPost;
