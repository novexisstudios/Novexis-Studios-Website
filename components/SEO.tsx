import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
};

const SEO = ({ title, description, url }: SEOProps) => {
  const siteUrl = "https://novexisstudios.in";
  const defaultTitle = "Novexis Studios — AI Automation & Software Engineering";
  const defaultDescription =
    "Novexis Studios builds AI-powered business systems, workflow automation, AI agents and custom software that eliminate repetitive work and scale modern businesses.";
  const ogImage = `${siteUrl}/og-image.jpg`;

  const finalTitle = title ? title : defaultTitle;
  const finalDescription = description ? description : defaultDescription;

  return (
    <Helmet key={finalTitle}>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={url ? siteUrl + url : siteUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url ? siteUrl + url : siteUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
