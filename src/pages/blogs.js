import React from "react";
import { Link, graphql } from "gatsby";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Row, Container, Col, Card } from "react-bootstrap";
//import Dump from "../components/Dump";

//<Dump previous={data} />
//const { previous, next } = pageContext;
//const BlogIndex = ({ data, pageContext }) => {
const BlogIndex = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <div>
      <NavBar />
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {posts.map((post) => (
            <Col className="d-flex align-self-stretch">
              <Card className="p-2 border border-2 rounded" key={post.id}>
                <Card.Img
                  variant="top"
                  src={post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp}
                />
                <div className="mt-3 pt-2 ">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/${post.slug}`}
                    className="link-dark"
                  >
                    <Card.Title>{post.frontmatter.title}</Card.Title>
                  </Link>
                </div>
                <Card.Body>{post.excerpt}</Card.Body>
                <Card.Footer>
                  <small className="text-muted"> {post.frontmatter.date}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export const pageQuery = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY MMMM Do")
          published
          title
          thumbnail {
            childImageSharp {
              fluid {
                srcWebp
              }
            }
          }
        }
        id
        excerpt(pruneLength: 100)
        slug
      }
    }
  }
`;
export default BlogIndex;
