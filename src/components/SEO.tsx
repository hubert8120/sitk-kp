import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const BASE_URL = "https://sitkkoszalin.pl";

export const SEO = ({ title, description, canonical, type = "website", breadcrumbs }: SEOProps) => {
  const fullTitle = title.includes("SITK") ? title : `${title} | SITK RP Koszalin`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  // Define navigation items for sitelinks
  const navItems = [
    { name: "O nas", url: `${BASE_URL}/o-nas` },
    { name: "Usługi", url: `${BASE_URL}/uslugi` },
    { name: "Szkolenia", url: `${BASE_URL}/szkolenia` },
    { name: "Aktualności", url: `${BASE_URL}/aktualnosci` },
    { name: "Członkostwo", url: `${BASE_URL}/czlonkostwo` },
    { name: "Kontakt", url: `${BASE_URL}/kontakt` }
  ];

  const graph: any[] = [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "SITK RP Oddział w Koszalinie",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/favicon.png`,
        "width": 512,
        "height": 512
      },
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Kupiecka 5",
        "addressLocality": "Koszalin",
        "postalCode": "75-671",
        "addressCountry": "PL"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+48 94 345 52 66",
          "contactType": "office",
          "email": "biuro@sitkkoszalin.pl"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+48 94 342 40 01",
          "contactType": "office"
        }
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      "name": "SITK RP Oddział w Koszalinie",
      "image": `${BASE_URL}/favicon.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ul. Kupiecka 5",
        "addressLocality": "Koszalin",
        "postalCode": "75-671",
        "addressCountry": "PL"
      },
      "telephone": "+48 94 345 52 66",
      "url": BASE_URL,
      "priceRange": "N/A"
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "name": "SITK RP Koszalin",
      "url": BASE_URL,
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      }
    }
  ];

  // Add Breadcrumbs if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}${canonical || ""}/#breadcrumb`,
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.item.startsWith("http") ? crumb.item : `${BASE_URL}${crumb.item}`
      }))
    });
  }

  // Add SiteNavigationElement to the root page to help with Sitelinks
  if (!canonical || canonical === "/") {
    graph.push({
      "@type": "ItemList",
      "@id": `${BASE_URL}/#navigation`,
      "name": "Nawigacja główna",
      "itemListElement": navItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "url": item.url
      }))
    });
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": graph
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
