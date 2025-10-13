import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Mail } from "lucide-react";
import { SEO, SEOConfigs } from "@/components/SEO";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO {...SEOConfigs.careers} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8">
                <Users className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium text-primary">Join Our Team</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-normal">
                Careers at
                <span className="block bg-gradient-primary bg-clip-text text-transparent leading-normal">
                  SPIDA Africa
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Be part of the team transforming Africa's agricultural landscape through technology and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 rounded-2xl p-12 shadow-elegant">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <Calendar className="w-10 h-10 text-primary-foreground" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Opening Coming Soon
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're currently building our careers platform and preparing exciting opportunities 
                  for passionate individuals who want to make a difference in African agriculture.
                </p>
                
                <div className="bg-background/50 border border-border rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    What We're Looking For
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Software Engineers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Data Scientists</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Agricultural Specialists</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Business Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Marketing Professionals</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Operations Managers</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:shadow-glow"
                    onClick={() => window.location.href = 'mailto:careers@spida.africa?subject=Career Inquiry'}
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Send Us Your Resume
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    Email us at <span className="text-primary font-medium">careers@spida.africa</span> 
                    to express your interest and we'll notify you when positions open.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Work With SPIDA?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join a mission-driven team that's revolutionizing agriculture across Africa
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Impact-Driven</h3>
                  <p className="text-muted-foreground">
                    Make a real difference in the lives of millions of African farmers and their communities.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Innovation Focus</h3>
                  <p className="text-muted-foreground">
                    Work with cutting-edge technology and be part of groundbreaking agricultural solutions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Growth Opportunity</h3>
                  <p className="text-muted-foreground">
                    Join a fast-growing startup with unlimited potential for career advancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
