import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Row, Col } from "react-bootstrap";
import Seo from "../components/seo";
import { BlogCard } from "../components/BlogCard";

//import Dump from "../components/Dump";

//<Dump previous={data} />
//const { previous, next } = pageContext;
//const BlogIndex = ({ data, pageContext }) => {
const BlogIndex = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Another Techs",
    alternateName: "Another Techs Blogs",
    description:
      "Blogs about many things, including, but not limited to  programming languages, Framework, Machine Learning, AI,cryptocurrency,Tech Related Blogs,Research, Tips and Tricks and many more related topics",
    url: "https://anothertechs.com/blogs",
    logo: "https://anothertechs.com/static/about_phot-3af4d7af10290361c408910909a8fcc2.webp",
    sameAs: [
      "https://www.facebook.com/Another-Techs-102190855452182",
      "https://twitter.com/home",
      "https://www.instagram.com/anothertechs/",
      "https://github.com/anothertechs",
    ],
  };
  return (
    <div>
      <Seo title="Blogs" schemaMarkup={schema} />
      <NavBar />
      <Row xs={1} md={2} lg={4} className="g-4">
        {posts.map((post) => (
          <>
            <Col className="d-flex align-self-stretch">
              <BlogCard
                img={post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp}
                slug={`/${post.slug}`}
                title={post.frontmatter.title}
                excerpt={post.excerpt}
                date={post.frontmatter.date}
              />
            </Col>
          </>
        ))}
      </Row>
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
