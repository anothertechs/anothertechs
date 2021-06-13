import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
//import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
//import { Link } from "gatsby";
import { Container } from "react-bootstrap";

//const shortcodes = { Link };

//const { next, previous } = pageContext;
export default function BlogPost({ data }) {
  const {
    mdx: { body },
  } = data;
  return (
    <div>
      <NavBar />
      <Container>
        <div className="mb-4 pb-2">
          <MDXRenderer>{body}</MDXRenderer>
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
      }
      body
    }
  }
`;
