import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { blogpostimage } from "../components/index.module.css";

export default function BlogPost({ data }) {
  deckDeckGoHighlightElement();
  const {
    mdx: { body },
  } = data;
  const title = data.mdx.frontmatter.title;
  const keywords = data.mdx.frontmatter.keywords;
  var date = new Date();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  var desc =
    "Updated " + month + "," + year + ":" + data.mdx.frontmatter.description;
  const src =
    data.mdx.frontmatter.thumbnail.childrenImageSharp[0].fluid.srcWebp;

  return (
    <div>
      <Seo
        title={title}
        description={desc}
        siteurl={data.mdx.slug}
        siteImage={src}
        keywords={keywords}
      />
      <NavBar />
      <Container>
        <div className="mb-4 pb-2">
          <div className="mb-3 pb-2">
            <img src={src} alt={title} className={blogpostimage} />
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
      id
      slug
      frontmatter {
        date(formatString: "YYYY MMMM Do")
        title
        description
        keywords
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
