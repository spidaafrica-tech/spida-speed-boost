// src/components/SEO.tsx
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEO = ({ 
  title, 
  description, 
  image = '/placeholder.svg', 
  url, 
  type = 'website',
  keywords = [],
  author = 'SPIDA Africa',
  publishedTime,
  modifiedTime
}: SEOProps) => {
  const fullTitle = title.includes('SPIDA') ? title : `${title} | SPIDA Africa`;
  const fullUrl = url ? `https://spida.africa${url}` : 'https://spida.africa';
  const fullImage = image.startsWith('http') ? image : `https://spida.africa${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update meta keywords
    if (keywords.length > 0) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords.join(', '));
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords.join(', ');
        document.head.appendChild(meta);
      }
    }
    
    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    updateMetaTag('og:type', type);
    updateMetaTag('og:title', fullTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', fullImage);
    updateMetaTag('og:url', fullUrl);
    updateMetaTag('og:site_name', 'SPIDA Africa');
    
    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="twitter:${name}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', `twitter:${name}`);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    updateTwitterTag('card', 'summary_large_image');
    updateTwitterTag('site', '@spida_africa');
    updateTwitterTag('title', fullTitle);
    updateTwitterTag('description', description);
    updateTwitterTag('image', fullImage);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }
    
    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebSite',
      "name": fullTitle,
      "description": description,
      "url": fullUrl,
      "image": fullImage,
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "SPIDA Africa",
        "logo": {
          "@type": "ImageObject",
          "url": "https://spida.africa/favicon.svg"
        }
      },
      ...(type === 'article' && publishedTime && {
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime
      })
    };
    
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
  }, [fullTitle, description, fullImage, fullUrl, type, keywords, author, publishedTime, modifiedTime]);

  return null; // This component doesn't render anything
};

// Predefined SEO configurations for common pages
export const SEOConfigs = {
  home: {
    title: "SPIDA Africa - Transforming African Agriculture",
    description: "Revolutionizing Africa's agricultural sector through technology and innovation. Higher productivity, guaranteed logistics, and assured sales for African farmers.",
    keywords: ["African agriculture", "farming technology", "agricultural solutions", "food system", "agricultural productivity", "farming in Africa"],
    url: "/"
  },
  
  about: {
    title: "About SPIDA Africa - Our Mission & Vision",
    description: "Learn about SPIDA Africa's mission to transform African agriculture through technology, innovation, and sustainable farming practices.",
    keywords: ["about SPIDA", "agricultural mission", "African farming", "sustainable agriculture", "farming innovation"],
    url: "/about"
  },
  
  products: {
    title: "SPIDA Products - Smart Agriculture Solutions",
    description: "Discover SPIDA's innovative agricultural products: SpiTractor, SpiOptima, and SpiCommerce. Smart solutions for modern farming.",
    keywords: ["agricultural products", "smart farming", "SpiTractor", "SpiOptima", "SpiCommerce", "farming technology"],
    url: "/products"
  },
  
  blog: {
    title: "SPIDA Blog - Agricultural News & Insights",
    description: "Stay updated with the latest developments in African agriculture technology and SPIDA's impact across farming communities.",
    keywords: ["agricultural blog", "farming news", "agricultural technology", "African agriculture", "farming insights"],
    url: "/blog"
  },
  
  careers: {
    title: "Careers at SPIDA Africa - Join Our Mission",
    description: "Join SPIDA Africa's mission to transform African agriculture. Explore career opportunities in technology, agriculture, and innovation.",
    keywords: ["careers", "jobs", "agricultural careers", "technology jobs", "African agriculture jobs"],
    url: "/careers"
  },
  
  faq: {
    title: "FAQ - Frequently Asked Questions | SPIDA Africa",
    description: "Find answers to common questions about SPIDA Africa's agricultural solutions, services, and how we support African farmers.",
    keywords: ["FAQ", "frequently asked questions", "agricultural support", "farming help", "SPIDA support"],
    url: "/faq"
  }
};