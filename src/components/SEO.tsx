// src/components/SEO.tsx
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.wunjocreations.es";
const SITE_NAME = "Wunjo Creations";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  /** Ruta de la página, ej. "/experiencias". Se usa para construir el canonical. */
  path: string;
  /** URL absoluta de la imagen para Open Graph / Twitter. */
  image?: string;
  /** Si es true, indica a los buscadores que no indexen ni sigan la página. */
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
}: SEOProps) => {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* SEO Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
