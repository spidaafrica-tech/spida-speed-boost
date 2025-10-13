import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import SpidaLogo from "./SpidaLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about", section: null },
      { name: "Our Mission", href: "/#about", section: "about" },
      { name: "Leadership", href: "/about#leadership", section: "leadership" },
      { name: "Careers", href: "/careers", section: null }
    ],
    solutions: [
      { name: "Products", href: "/products", section: null },
      { name: "Smart Agriculture", href: "/products#spioptima", section: "spioptima" }
    ],
    resources: [
      { name: "Blog", href: "/blog", section: null },
      { name: "FAQ", href: "/faq", section: null }
    ]
  };

  const handleSectionClick = (e: React.MouseEvent, sectionId: string | null, href: string) => {
    e.preventDefault();
    
    if (sectionId) {
      // Check if this is a section on a specific page (like /about#leadership)
      if (href.includes('#') && href !== '/#') {
        // Extract the page path and section ID
        const [pagePath] = href.split('#');
        if (location.pathname !== pagePath) {
          // Navigate to the page first, then scroll to section
          navigate(pagePath);
          setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          // Already on the correct page, just scroll to section
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        // This is a section that exists on the home page
        if (location.pathname !== '/') {
          // If not on home page, navigate to home first, then scroll
          navigate('/');
          setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else {
          // If already on home page, just scroll
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    } else {
      // This is a regular page navigation or placeholder
      if (href !== '#') {
        navigate(href);
        // Always scroll to top when navigating to a new page
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <SpidaLogo size="lg" className="text-primary-foreground" />
              </div>
              
              <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
                Transforming Africa's agricultural landscape through technology and innovation, 
                ensuring every farmer thrives with higher productivity and guaranteed market access.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">hello@spida.africa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+2347089540773</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/spida-io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a 
                    href="https://x.com/spida_africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/spida__africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5 text-primary-foreground" />
                  </a>
                  <a 
                    href="https://www.facebook.com/spida.africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors duration-200"
                  >
                    <Facebook className="w-5 h-5 text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSectionClick(e, link.section, link.href)}
                    className="block text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <div className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSectionClick(e, link.section, link.href)}
                    className="block text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <div className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <button
                    key={index}
                    onClick={(e) => handleSectionClick(e, link.section, link.href)}
                    className="block text-left text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} SPIDA Africa. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;