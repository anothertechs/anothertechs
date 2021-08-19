import React from 'react';
import {Row,Container,Col,Card} from 'react-bootstrap';
import AdSense from 'react-adsense';


export default function ShowBlogs({posts}) {
    return (
        <div>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          {posts.map((post,index) => (
            <Col className="d-flex align-self-stretch">
                {
                    index % 5 === 0 ? 
                    <div>
                        <AdSense.Google
                        client='ca-pub-2965086569594457'
                        slot='9151719959'
                        style={{ display: 'block' }}
                        format='fluid'
                        layout='in-article'
                        />

                    </div>:
              <Card className="p-2 border border-2 rounded" key={post.id}>
                <Card.Img
                  variant="top"
                  width={300}
                  height={300}
                  src={post.frontmatter.thumbnail.childImageSharp.fluid.srcWebp}
                />
                <div className="mt-3 pt-2 ">
                  <a
                    style={{ textDecoration: "none" }}
                    href={`/${post.slug}`}
                    className="link-dark"
                  >
                    <Card.Title>{post.frontmatter.title}</Card.Title>
                  </a>
                </div>
                <Card.Body>{post.excerpt}</Card.Body>
                <Card.Footer>
                  <small className="text-muted"> {post.frontmatter.date}</small>
                </Card.Footer>
              </Card>

                }
            </Col>
          ))}
        </Row>
      </Container>

        </div>
    )
}