import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistSection from "@/components/WaitlistSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Award, Users, Share2 } from "lucide-react";
import { useBlogPosts } from "@/hooks/useBlog";
import { urlFor } from "@/lib/sanity";
import { renderPortableText } from "@/lib/portableText";
import { SEO, SEOConfigs } from "@/components/SEO";
import { BlogSkeleton } from "@/components/SkeletonLoader";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const { posts, loading, error } = useBlogPosts();
  const navigate = useNavigate();

  // Icon mapping for categories
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Awards':
        return Award;
      case 'Impact':
        return Users;
      default:
        return Users;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <SEO {...SEOConfigs.blog} />
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                SPIDA
                <span className="block bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  Blog & News
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Stay updated with the latest developments in African agriculture technology and our impact across farming communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <BlogSkeleton key={i} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Error Loading Blog Posts
              </h1>
              <p className="text-xl text-muted-foreground">{error}</p>
              <div className="mt-8">
                <Button onClick={() => window.location.reload()} className="bg-gradient-primary">
                  Try Again
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Show message if no posts exist
  if (!loading && posts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-16 bg-gradient-subtle">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                  SPIDA
                  <span className="block bg-gradient-primary bg-clip-text text-transparent leading-tight">
                    Blog & News
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Stay updated with the latest developments in African agriculture technology and our impact across farming communities
                </p>
              </div>
            </div>
          </section>

          {/* No Posts Message */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-foreground">No Blog Posts Yet</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Blog posts will appear here once they're published in Sanity Studio.
                </p>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To add your first blog post:
                  </p>
                  <ol className="text-left text-muted-foreground space-y-2 max-w-md mx-auto">
                    <li>1. Go to Sanity Studio: <code className="bg-muted px-2 py-1 rounded">http://localhost:3334</code></li>
                    <li>2. Click "Create" → "Post"</li>
                    <li>3. Fill in the post details</li>
                    <li>4. Click "Publish"</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Waitlist Section */}
          <WaitlistSection />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO {...SEOConfigs.blog} />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                SPIDA
                <span className="block bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  Blog & News
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Stay updated with the latest developments in African agriculture technology and our impact across farming communities
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-20">
              {posts.map((post, index) => {
                const IconComponent = getCategoryIcon(post.category);
                return (
                  <article key={post._id} className="group">
                  <Card className="border-0 shadow-elegant overflow-hidden hover:shadow-xl transition-all duration-300">
                    {/* Featured Image */}
                      {post.featuredImage && (
                      <div className="h-80 md:h-96 overflow-hidden">
                        <img 
                            src={urlFor(post.featuredImage).width(1200).height(600).fit('crop').url()}
                            alt={post.featuredImage.alt || post.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    
                    <CardHeader className="p-8 pb-6">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${post.gradient} flex items-center justify-center shadow-glow`}>
                              <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <Badge variant="secondary" className="mb-2 font-medium">
                              {post.category}
                            </Badge>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <CardTitle className="text-2xl md:text-3xl font-bold leading-tight mb-4 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-8 pt-0">
                        {/* Gallery Images */}
                        {post.galleryImages && post.galleryImages.length > 0 && (
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-foreground mb-4">
                            {post.category === 'Awards' ? 'Award Ceremony Photos' : 'Field Photos'}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {post.galleryImages.map((image, idx) => (
                              <div key={idx} className="aspect-video overflow-hidden rounded-xl shadow-md">
                                <img 
                                    src={urlFor(image).width(600).height(400).fit('crop').url()}
                                    alt={image.alt || `${post.category} photo ${idx + 1}`}
                                  loading="lazy"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="prose prose-lg max-w-none">
                          {renderPortableText(post.content)}
                      </div>
                      
                      {/* Article Actions */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-border">
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={async () => {
                              const shareData = {
                                title: post.title,
                                text: post.excerpt,
                                url: window.location.href,
                              };
                              if (navigator.share) {
                                try { await navigator.share(shareData); } catch {}
                              } else {
                                try {
                                  await navigator.clipboard.writeText(shareData.url);
                                  alert('Link copied to clipboard');
                                } catch {}
                              }
                            }}
                          >
                          <Share2 className="mr-2 w-4 h-4" />
                          Share Article
                        </Button>
                          <Button
                            className="bg-gradient-primary hover:shadow-glow"
                            onClick={() => {
                              window.location.assign('/about#impact');
                            }}
                          >
                          Learn More About Our Impact
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Stay Updated</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest news about SPIDA's impact across African agriculture delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
                />
                <Button className="bg-gradient-primary hover:shadow-glow px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Blog-Specific Waitlist Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Transform Your Farm?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Join thousands of farmers who are already using SPIDA's technology to increase their yields and profits.
              </p>
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow"
                  onClick={() => {
                    navigate('/#waitlist');
                    // Scroll to waitlist section after navigation
                    setTimeout(() => {
                      const waitlistElement = document.getElementById('waitlist');
                      if (waitlistElement) {
                        waitlistElement.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Join Our Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;