import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const pageMeta = {
  '/': {
    title: 'Chaitanya Khurana | Technical Product Manager for AI, FinTech & Data Products',
    description: 'Chaitanya Khurana is a Technical Product Manager and AI builder creating fintech systems, healthcare BI dashboards, RAG products, and data-driven automation.',
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
  const baseUrl = 'https://chaitanyak.com';
  const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;
  const keywords = [
    'Chaitanya Khurana',
    'Technical Product Manager',
    'AI Product Manager',
    'FinTech Product Manager',
    'RAG AI Developer',
    'Healthcare BI Dashboard',
    'Product Portfolio',
    'Data Scientist',
    'React Portfolio',
  ].join(', ');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.name,
    email: portfolioData.email,
    telephone: portfolioData.phone,
    address: portfolioData.location,
    jobTitle: 'Technical Product Manager',
    description: meta.description,
    url: baseUrl,
    sameAs: [
      'https://linkedin.com/in/chaitanya-khurana',
      'https://github.com/CHAITANYA-2002',
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'FinTech',
      'Healthcare Business Intelligence',
      'Product Management',
      'Data Science',
      'Cloud Engineering',
    ],
    hasPart: portfolioData.projects.map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.impact,
      keywords: project.tags.join(', '),
    })),
  };

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={portfolioData.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Chaitanya Khurana Portfolio" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${baseUrl}/monochromatic-hero.png`} />
      <meta property="og:image:alt" content="Chaitanya Khurana product portfolio visual" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${baseUrl}/monochromatic-hero.png`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
