import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export function SEOHead({
  title = "MyChef.ae - Private Chef Services in Dubai & UAE | Book Professional Chefs",
  description = "Dubai's premier private chef service. HACCP-certified chefs for intimate dinners, villa parties, cooking classes & meal prep across Palm Jumeirah, Dubai Marina, Downtown Dubai. Book now from AED 200/hour.",
  keywords = "private chef Dubai, personal chef UAE, chef services Dubai, private dining Dubai, home chef Dubai, villa catering Dubai, cooking classes Dubai, meal prep Dubai, halal chef Dubai, chef hire Dubai Marina, Palm Jumeirah chef, Downtown Dubai catering",
  ogImage = "/opengraph.jpg",
  ogType = "website",
  canonicalUrl,
  noindex = false
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'MyChef.ae');
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // OpenGraph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', window.location.origin + ogImage, true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'MyChef.ae', true);
    updateMetaTag('og:locale', 'en_AE', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', window.location.origin + ogImage);

    // Additional meta tags for mobile
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    updateMetaTag('theme-color', '#D4AF37'); // Primary gold color
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Geo tags for Dubai/UAE
    updateMetaTag('geo.region', 'AE-DU');
    updateMetaTag('geo.placename', 'Dubai');
    updateMetaTag('geo.position', '25.2048;55.2708'); // Dubai coordinates

    // Canonical URL
    if (canonicalUrl || !document.querySelector('link[rel="canonical"]')) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl || window.location.href.split('?')[0];
    }

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      "name": "MyChef.ae",
      "image": window.location.origin + ogImage,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Villa 6, Al Safa Street 99",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2048,
        "longitude": 55.2708
      },
      "url": window.location.origin,
      "telephone": "+97141234567",
      "email": "info@mychef.ae",
      "priceRange": "AED 200-2000",
      "servesCuisine": ["Middle Eastern", "Italian", "Japanese", "French", "Indian", "International"],
      "acceptsReservations": "true",
      "currenciesAccepted": "AED",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        "Dubai Marina",
        "Palm Jumeirah",
        "Downtown Dubai",
        "JBR",
        "Business Bay",
        "DIFC",
        "Arabian Ranches",
        "Emirates Hills",
        "Jumeirah",
        "Mirdif"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "487",
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "22:00"
      }
    };

    // Add or update JSON-LD script
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl, noindex]);

  return null;
}
