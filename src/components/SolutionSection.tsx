import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Smartphone, Satellite, TrendingUp, Shield, Zap } from "lucide-react";
import techImage from "@/assets/tech-icons.png";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Digital Platform",
      description: "Connect farmers directly to markets through our mobile app",
      benefit: "Eliminate middlemen, increase profits by 40%"
    },
    {
      icon: Satellite,
      title: "Smart Agriculture",
      description: "AI-powered insights for optimal planting and harvesting",
      benefit: "Increase yields by up to 50%"
    },
    {
      icon: TrendingUp,
      title: "Market Access",
      description: "Guaranteed buyers for your produce at fair prices",
      benefit: "Secure income, predictable cash flow"
    },
    {
      icon: Shield,
      title: "Financial Support",
      description: "Access to credit, insurance, and farming inputs",
      benefit: "No upfront costs, pay after harvest"
    }
  ];

  const features = [
    "Higher productivity per acre",
    "Guaranteed logistics and market access",
    "Access to financing and inputs",
    "Climate-smart farming practices",
    "Real-time market prices",
    "Quality assurance programs"
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Our Solution</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            We're Here to
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Fix It</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SPIDA combines local expertise with cutting-edge digital technologies to solve 
            these problems once and for all. Farmers focus on growing food, we handle everything else.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elegant transition-all duration-300 group border-primary/10 hover:border-primary/20"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-accent">
                        {solution.benefit}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Features & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                What Farmers Get With SPIDA
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => window.location.assign('/#waitlist')}
              >
                Join 10,000+ Farmers
              </Button>
              <p className="text-sm text-muted-foreground">
                No upfront costs • Pay after harvest • 24/7 support
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={techImage} 
                alt="Agricultural Technology Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-background border border-border rounded-xl p-4 shadow-elegant animate-float">
              <div className="text-2xl font-bold text-primary">50%</div>
              <div className="text-xs text-muted-foreground">Yield Increase</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-4 shadow-elegant animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-accent">95%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;