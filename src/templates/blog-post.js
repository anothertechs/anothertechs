import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

export default function BlogPost({ data }) {
  deckDeckGoHighlightElement();
  const {
    mdx: { body },
  } = data;
  const title = data.mdx.frontmatter.title;
  console.log(data);
  const src =
    data.mdx.frontmatter.thumbnail.childrenImageSharp[0].fluid.srcWebp;

  return (
    <div>
      <Seo title={title} description={data.mdx.frontmatter.description} />
      <NavBar />
      <Container>
        <div className="mb-4 pb-2">
          <div className="mb-3 pb-2">
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
        description
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
