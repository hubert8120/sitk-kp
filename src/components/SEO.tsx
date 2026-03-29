import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

const BASE_URL = "https://sitkkoszalin.pl";

export const SEO = ({ title, description, canonical, type = "website" }: SEOProps) => {
  const fullTitle = title.includes("SITK") ? title : `${title} | SITK RP Koszalin`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
    </Helmet>
  );
};
