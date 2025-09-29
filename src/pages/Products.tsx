import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Tractor, BarChart3, ShoppingCart, ExternalLink } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "SpiTractor",
      icon: Tractor,
      title: "Boosting Productivity with Smart Mechanization",
      description: "SpiTractor brings affordable mechanization to smallholder farmers through AI-driven virtual farm clusters.",
      features: [
        "Farmers grouped in nearby communities and matched with tractors",
        "Shared tractor services at affordable costs", 
        "Replaces manual labour with horsepower to triple yields",
        "AI-powered Extension Agents that speak local languages",
        "Real-time advice and diagnostics"
      ],
      website: "https://spitractors.spida.africa/",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "SpiOptima", 
      icon: BarChart3,
      title: "Agri-Intelligence & Smart Financing",
      description: "SPIDA tackles climate uncertainty and lack of access to finance using climate data and AI predictions.",
      features: [
        "Climate data to predict weather patterns",
        "Farm simulation for better planning",
        "Farmer credit profiles from non-traditional data",
        "Better loans with reduced bank risk",
        "Data-driven models for forecasting and insurance"
      ],
      website: "https://spioptima.spida.africa/",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "SpiCommerce",
      icon: ShoppingCart,
      title: "Integrated Logistics & e-Marketplace",
      description: "Moving and selling smarter with direct farmer-to-consumer connections, eliminating middlemen.",
      features: [
        "Direct connections between farmers and consumers",
        "Verified transport partners with real-time tracking",
        "Guaranteed safety and quality standards",
        "Bulk supply for hotels, supermarkets, and processors",
        "Reduced food waste by up to 50%"
      ],
      website: "https://spi-ecommerce.spida.africa/",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Our
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Product Suite
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive solutions addressing every aspect of Africa's agricultural value chain
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {products.map((product, index) => (
                <div key={product.name} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-6`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{product.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="bg-gradient-primary hover:shadow-glow"
                        onClick={() => window.open(product.website, '_blank')}
                      >
                        Visit {product.name}
                        <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="lg">
                        Watch Demo
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                    <Card className="h-full border-0 shadow-elegant">
                      <CardHeader>
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <CardDescription className="text-lg">
                          Revolutionizing {product.name === 'SpiTractor' ? 'farm mechanization' : 
                                         product.name === 'SpiOptima' ? 'agricultural intelligence' : 
                                         'agricultural commerce'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className={`h-48 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                          <product.icon className="w-20 h-20 text-white/80" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Transform Your Farm?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of farmers already benefiting from our integrated agricultural solutions
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;