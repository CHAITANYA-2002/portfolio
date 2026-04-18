import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const pageMeta = {
  '/': {
    title: 'Chaitanya Khurana — Technical Product Manager & AI Builder',
    description: 'Portfolio of Chaitanya Khurana — Technical PM shipping AI products with measurable outcomes across fintech, automation, and data engineering.',
  },
  '/projects': {
    title: 'Projects — Chaitanya Khurana',
    description: 'Explore AI products, fintech systems, and data engineering projects built by Chaitanya Khurana.',
  },
  '/journey': {
    title: 'Journey — Chaitanya Khurana',
    description: 'From engineering foundations to AI product leadership — the narrative arc of Chaitanya Khurana\'s career.',
  },
  '/skills': {
    title: 'Skills — Chaitanya Khurana',
    description: 'Product leadership, AI/ML engineering, and cloud ecosystem skills of Chaitanya Khurana.',
  },
  '/contact': {
    title: 'Contact — Chaitanya Khurana',
    description: 'Get in touch with Chaitanya Khurana for PM engagements, AI product partnerships, or consulting.',
  },
};

const SEO = () => {
  const location = useLocation();
  const meta = pageMeta[location.pathname] || pageMeta['/'];

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={`https://chaitanyak.com${location.pathname}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Helmet>
  );
};

export default SEO;
