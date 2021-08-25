import * as React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import AdSense from "react-adsense";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Another Techs",
    alternateName: "Another Techs",
    description:
      "Blogs about many things, including, but not limited to  programming languages, Framework, Machine Learning, AI,cryptocurrency,Tech Related Blogs,Research, Tips and Tricks and many more related topics",
    url: "https://anothertechs.com",
    logo: "https://anothertechs.com/static/about_phot-3af4d7af10290361c408910909a8fcc2.webp",
    sameAs: [
      "https://www.facebook.com/Another-Techs-102190855452182",
      "https://twitter.com/home",
      "https://www.instagram.com/anothertechs/",
      "https://github.com/anothertechs",
    ],
  };
  return (
    <main>
      <Seo title="Home" schemaMarkup={schema} />
      <NavBar />
      <Container>
        {posts.map((post, index) => (
          <div key={index} className="mt-3 pt-2">
            {index % 3 === 0 && (
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
              <Col md="5" sm="12">
                <GatsbyImage
                  image={getImage(post.frontmatter.thumbnail)}
                  alt={post.frontmatter.title}
                />
              </Col>
              <Col
                className="d-flex flex-row align-items-center"
                md="7"
                sm="12"
              >
                <div className="mt-4">
                  <Link className="link-dark" to={`${post.fields.slug}`}>
                    <h1>{post.frontmatter.title}</h1>
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
      limit: 15
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
              gatsbyImageData(placeholder: BLURRED, formats: [WEBP])
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
