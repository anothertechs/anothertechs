import * as React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, graphql } from "gatsby";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AmazonHomePageAds } from "../components/ads/amazon/homeSide";

const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;

  const programmingPost = posts
    .filter((post) => post.frontmatter.category === "programming")
    .slice(0, 5);

  const cryptoPost = posts
    .filter((post) => post.frontmatter.category === "crypto")
    .slice(0, 5);

  const otherPosts = posts
    .filter((post) => {
      if (
        post.frontmatter.category === "crypto" ||
        post.frontmatter.category === "programming"
      )
        return false;
      return true;
    })
    .slice(0, 5);

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
      <div>
        <NewPost post={posts[1]} />
      </div>
      <div className="m-2 p-2">
        <div clasName="container">
          <div className="row">
            <div className="col-md-9">
              <ProgrammingPost posts={programmingPost} name={"Coding"} />
            </div>
            <div className="col-md-3 ">
              <AmazonHomePageAds />
            </div>
          </div>
          <div className="mt-3 pt-2">
            <div className="row">
              <div className="col-md-6">
                <Posts posts={cryptoPost} name={"Trading"} />
              </div>
              <div className="col-md-6">
                <Posts posts={otherPosts} name={"Other"} />
              </div>
            </div>
          </div>
          <div>
            <form method="get" action="/blogs">
              <button type="submit" className="btn btn-secondary">
                More
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

function Posts({ posts, name }) {
  return (
    <div className="">
      <div>
        <p style={{ fontSize: 30 }}>
          <u>{name}</u>
        </p>
      </div>
      {posts.map((post, index) => (
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <GatsbyImage
              image={getImage(post.frontmatter.thumbnail)}
              alt={post.frontmatter.title}
            />
          </div>
          <div className="col-md-6">
            <Link className="link-dark" to={`${post.fields.slug}`}>
              <h5>{post.frontmatter.title}</h5>
            </Link>
            <p className="mt-2 pt-1 alert-light" style={{ fontSize: 15 }}>
              {post.excerpt}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgrammingPost({ posts, name }) {
  const firstPost = posts[0];
  const restPost = posts.slice(1, 4);
  return (
    <div className="container">
      <div className="mb-1 pb-2">
        <p style={{ fontSize: 30 }}>
          {" "}
          <u>{name}</u>
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <div>
              <GatsbyImage
                image={getImage(firstPost.frontmatter.thumbnail)}
                alt={firstPost.frontmatter.title}
              />
            </div>
            <div className="mt-1 pt-2">
              <Link className="link-dark" to={`${firstPost.fields.slug}`}>
                <h4>{firstPost.frontmatter.title}</h4>
              </Link>
              <p className="mt-2 pt-1 alert-light" style={{ fontSize: 16 }}>
                {firstPost.excerpt}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          {restPost.map((post, index) => (
            <div className="row mt-2 pt-2">
              <div className="col-6">
                <GatsbyImage
                  image={getImage(post.frontmatter.thumbnail)}
                  alt={post.frontmatter.title}
                />
              </div>
              <div className="col-6 d-flex align-items-center">
                <Link className="link-dark" to={`${post.fields.slug}`}>
                  <h6>{post.frontmatter.title}</h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewPost({ post }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 d-flex align-items-md-center">
          <GatsbyImage
            image={getImage(post.frontmatter.thumbnail)}
            alt={post.frontmatter.title}
          />
        </div>
        <div className="col-sm-6 d-flex justify-content-start align-items-sm-center alert-secondary">
          <div>
            <Link className="link-dark" to={`${post.fields.slug}`}>
              <h2>{post.frontmatter.title}</h2>
            </Link>
            <p className="mt-3 pt-1 ">{post.excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const recentBlogQuery = graphql`
  query RecentBlog {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          category
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
