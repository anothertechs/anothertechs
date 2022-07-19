import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";
import { blogCard } from "./index.module.css";

export const BlogCard = ({ img, slug, title, excerpt, date }) => {
  return (
    <div className={blogCard}>
      <Card className="p-2 border border-2 rounded">
        <Card.Img variant="top" width={300} height={300} src={img} />
        <div className="mt-3 pt-2 ">
          <Link
            style={{ textDecoration: "none" }}
            to={slug}
            className="link-dark"
          >
            <Card.Title>{title}</Card.Title>
          </Link>
        </div>
        <Card.Body>{excerpt}</Card.Body>
        <Card.Footer>
          <small className="text-muted"> {date}</small>
        </Card.Footer>
      </Card>
    </div>
  );
};
