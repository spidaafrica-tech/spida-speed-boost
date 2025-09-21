import { Card } from "@/components/ui/card";
import { AlertTriangle, TrendingDown, DollarSign, CloudRain, Users, Wrench } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Fragmented Markets",
      description: "Disconnected supply chains limiting farmer access to profitable markets"
    },
    {
      icon: Wrench,
      title: "Outdated Practices",
      description: "Manual farming methods reducing productivity and efficiency"
    },
    {
      icon: DollarSign,
      title: "Limited Financing",
      description: "Lack of accessible credit and investment for agricultural inputs"
    },
    {
      icon: CloudRain,
      title: "Climate Uncertainty",
      description: "No backup plans for weather-related crop failures and losses"
    },
    {
      icon: Users,
      title: "Middleman Exploitation",
      description: "Intermediaries draining profits that should go to hardworking farmers"
    },
    {
      icon: AlertTriangle,
      title: "Technology Gap",
      description: "Limited access to modern agricultural technology and digital tools"
    }
  ];

  return (
    <section className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-6">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">The Reality</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Africa's Food System Is
            <span className="block text-destructive">Broken</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Despite having fertile lands and hardworking farmers, broken systems have kept 
            our agricultural potential untapped. The challenges are clear and urgent.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-elegant transition-all duration-300 border-destructive/10 hover:border-destructive/20 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center group-hover:bg-destructive/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-destructive transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-foreground mb-4">
              These problems cost African farmers billions in lost income every year.
            </p>
            <p className="text-accent font-bold text-xl">
              But we have a solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;