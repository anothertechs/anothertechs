import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { Row, Col, Image } from "react-bootstrap";
import { indexpostimage } from "../components/index.module.css";

const Post = ({ data, category }) => {
  var similarPost = [];
  for (var i = 0; i < data.allMdx.nodes.length; ++i) {
    if (data.allMdx.nodes[i].frontmatter.category === category) {
      similarPost.push(data.allMdx.nodes[i]);
    }
  }
  similarPost = similarPost.sort(() => Math.random() - 0.5);
  similarPost = similarPost.slice(0, 5);

  return (
    <div>
      {similarPost.map((post, index) => (
        <div key={index} className="mt-3 pt-2">
          <Row>
            <Col md="4" sm="12">
              <Image
                src={post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp}
                alt={post.frontmatter.title}
                className={indexpostimage}
              />
            </Col>
            <Col>
              <div className="mt-4">
                <Link className="link-dark" to={`/${post.slug}`}>
                  <h4>{post.frontmatter.title}</h4>
                </Link>
                <p className="mt-3 text-muted pt-1">
                  {post.frontmatter.description}
                </p>
              </div>
            </Col>
          </Row>
          <hr />
        </div>
      ))}
    </div>
  );
};

const RelatedPost = ({ category }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            nodes {
              frontmatter {
                description
                title
                keywords
                category
                thumbnail {
                  childImageSharp {
                    fluid {
                      srcWebp
                    }
                  }
                }
              }
              slug
            }
          }
        }
      `}
      render={(data) => <Post data={data} category={category} />}
    />
  );
};

export default RelatedPost;
