import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
//import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
//import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";

//const shortcodes = { Link };

//const { next, previous } = pageContext;
export default function BlogPost({ data }) {
  const {
    mdx: { body },
  } = data;
  const title = data.mdx.frontmatter.title;
  const src =
    data.mdx.frontmatter.thumbnail.childrenImageSharp[0].fluid.srcWebp;

  return (
    <div>
      <Seo title={title} />
      <NavBar />
      <Container>
        <div className="mb-4 pb-2">
          <div>
            <img src={src} alt={title} width={"100%"} />
          </div>
          <div>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "YYYY MMMM Do")
        title
        thumbnail {
          childrenImageSharp {
            fluid {
              srcWebp
            }
          }
        }
      }
      body
    }
  }
`;
