import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfolioData } from '../data/portfolio';

const SEO = () => {
  const title = `${portfolioData.name} | ${portfolioData.headline}`;
  const description = `${portfolioData.name} is a Technical Product Manager specializing in AI/ML and full-stack development. ${portfolioData.heroHeadline}.`;
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://chaitanyak.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;700;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
