import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BlogsAd } from "../components/blogsAd";
import { product } from "../components/ads/amazon/Deals.module.css";

const Post = ({ data, category }) => {
  var similarPost = data.allMdx.nodes
    .filter((node) => node.slug.match(new RegExp(`\\b${category}\\b`, "gi")))
    .sort(() => Math.random() - 0.5)
    .slice(0, 7);

  return (
    <div className="">
      <div className="mt-2 ">
        <h4> Realate Post </h4>
      </div>
      {similarPost.map((post, index) => (
        <div key={index}>
          <Row className="mt-2 pt-1">
            <>
              <Col md="7" className="d-flex align-items-center">
                <GatsbyImage
                  imgStyle={{ borderRadius: "5%" }}
                  image={getImage(post.frontmatter.thumbnail)}
                  alt={post.frontmatter.title}
                />
              </Col>
              <Col className={product} md="5">
                <div className="mt-4">
                  <a className="link-dark" href={`/${post.slug}`}>
                    <p>{post.frontmatter.title}</p>
                  </a>
                </div>
              </Col>
            </>
            {index === 1 && <BlogsAd />}
            {index === 6 && <BlogsAd />}
          </Row>
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
