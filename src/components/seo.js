import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({
  description,
  lang,
  meta,
  title,
  siteurl,
  siteImage,
  keywords,
  schemaMarkup,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            siteUrl
            description
            author
            keywords
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const url = siteurl
    ? `${site.siteMetadata.url}${siteurl}/`
    : site.siteMetadata.url;
  const img =
    `${site.siteMetadata.siteUrl}${siteImage}` ||
    `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`;
  const keyword = keywords ? keywords : site.siteMetadata.keywords.join(",");

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keyword,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_name`,
          content: defaultTitle,
        },
        {
          property: `og:image`,
          content: img,
        },
        {
          property: `og:image:width`,
          content: 600,
        },
        {
          property: `og:image:height`,
          content: 500,
        },
        {
          name: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:url:secure_url`,
          content: url,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          property: `twitter:domain`,
          content: site.siteMetadata.url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: img,
        },
      ].concat(meta)}
    >
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  image: null,
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
