import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#about" },
      { name: "Leadership", href: "#" },
      { name: "Careers", href: "#" }
    ],
    solutions: [
      { name: "Digital Platform", href: "#solutions" },
      { name: "Smart Agriculture", href: "#solutions" },
      { name: "Market Access", href: "#solutions" },
      { name: "Financial Support", href: "#solutions" }
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-2xl font-bold">SPIDA</span>
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
                  <span className="text-sm">+254 (0) 700 000 000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <div className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Solutions</h3>
              <div className="space-y-3">
                {footerLinks.solutions.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <div className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
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