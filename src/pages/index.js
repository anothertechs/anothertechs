import * as React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, graphql } from "gatsby";
import { Image, Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";

const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <main>
      <Seo title="Home" />
      <NavBar />
      <Container>
        {posts.map((post, index) => (
          <div key={index} className="mt-3 pt-2">
            <Row>
              <Col md="5" sm="12">
                <Image
                  src={post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp}
                  alt={post.frontmatter.title}
                  width={"100%"}
                />
              </Col>
              <Col
                className="d-flex flex-row align-items-center"
                md="7"
                sm="12"
              >
                <div className="mt-4">
                  <Link className="link-dark" to={`${post.fields.slug}`}>
                    <h4>{post.frontmatter.title}</h4>
                  </Link>
                  <p className="mt-3 pt-1">{post.excerpt}</p>
                </div>
              </Col>
            </Row>
            <hr />
          </div>
        ))}
      </Container>
      <Footer />
    </main>
  );
};

export const recentBlogQuery = graphql`
  query RecentBlog {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: 7
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
              id
              fluid {
                srcWebp
              }
            }
          }
          date
        }
        excerpt(pruneLength: 300)
      }
    }
  }
`;

export default IndexPage;
