import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Seo from "../components/seo";
import ShowBlogs from "../components/ShowBlogs";

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.nodes;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Another Techs",
    alternateName: "Another Techs Blogs",
    description:
      "Blogs about many things, including, but not limited to  programming languages, Framework, Machine Learning, AI,cryptocurrency,Tech Related Blogs,Research, Tips and Tricks and many more related topics",
    url: `https://anothertechs.com/${posts[0].frontmatter.category}`,
    logo: "https://anothertechs.com/static/about_phot-3af4d7af10290361c408910909a8fcc2.webp",
    sameAs: [
      "https://www.facebook.com/Another-Techs-102190855452182",
      "https://twitter.com/home",
      "https://www.instagram.com/hatim_master/",
      "https://github.com/anothertechs",
    ],
  };
  return (
    <div>
      <Seo title={posts[0].frontmatter.category} schemaMarkup={schema} />
      <NavBar />
      <ShowBlogs posts={posts} />
      <Footer />
    </div>
  );
};

export const pageQuery = graphql`
  query PostByCategory($category: String!) {
    allMdx(
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: $category } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY MMMM Do")
          category
          title
          description
          thumbnail {
            childImageSharp {
              fluid {
                srcWebp
              }
            }
          }
        }
        excerpt(pruneLength: 100)
        slug
      }
    }
  }
`;

export default BlogIndex;
