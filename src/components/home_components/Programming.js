import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { useStaticQuery, Link, graphql } from "gatsby";
import { getSrc, GatsbyImage, getImage } from "gatsby-plugin-image";

const Programming = () => {
  const data = useStaticQuery(graphql`
    query ProgrammingBlogs {
      allMdx(
        filter: {
          frontmatter: {
            category: { eq: "programming" }
            published: { eq: true }
          }
        }
        limit: 4
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            published
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [WEBP]
                  width: 500
                )
              }
            }
            date
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  `);

  const { nodes: posts } = data.allMdx;

  return (
    <div className="mt-2 pt-2">
      <div className="mt-5 pt-2">
        <h2 className=" text-uppercase  ">
          <u>programming</u>
        </h2>
      </div>
      <Row className="align-items-center">
        <Col md={4} sm={12}>
          <div className="d-fle flex-col">
            <div>
              <GatsbyImage
                className="rounded mx-auto d-block"
                image={getImage(posts[1].frontmatter.thumbnail)}
                alt={posts[1].frontmatter.title}
              />
            </div>
            <div>
              <Link className="link-dark" to={`${posts[1].fields.slug}`}>
                <h3>{posts[1].frontmatter.title}</h3>
              </Link>
              <p className="mt-3 pt-1">{posts[1].excerpt}</p>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="d-flex flex-column align-items-center">
            <div>
              <div className="d-flex align-items-center ">
                <div className="m-3 p-2">
                  <GatsbyImage
                    className="rounded mx-auto d-block"
                    image={getImage(posts[2].frontmatter.thumbnail)}
                    alt={posts[2].frontmatter.title}
                  />
                </div>
                <div>
                  <Link className="link-dark" to={`${posts[2].fields.slug}`}>
                    <h5>{posts[2].frontmatter.title}</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center ">
                <div className="m-3 p-2">
                  <GatsbyImage
                    className="rounded mx-auto d-block"
                    image={getImage(posts[3].frontmatter.thumbnail)}
                    alt={posts[3].frontmatter.title}
                  />
                </div>
                <div>
                  <Link className="link-dark" to={`${posts[3].fields.slug}`}>
                    <h5>{posts[3].frontmatter.title}</h5>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center ">
                <div className="m-3 p-2">
                  <GatsbyImage
                    className="rounded mx-auto d-block"
                    image={getImage(posts[0].frontmatter.thumbnail)}
                    alt={posts[0].frontmatter.title}
                  />
                </div>
                <div>
                  <Link className="link-dark" to={`${posts[0].fields.slug}`}>
                    <h5>{posts[0].frontmatter.title}</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Programming;
