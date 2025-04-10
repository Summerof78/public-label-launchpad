import { useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ClientGrid from '../components/ClientGrid';
import CaseStudyCard from '../components/CaseStudyCard';
import ServiceColumn from '../components/ServiceColumn';
import HeroSection from '../components/HeroSection';

const Index = () => {
  const animatedRefs = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      animatedRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !animatedRefs.current.includes(el)) {
      animatedRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section id="about" className="py-24 bg-background" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                WE MAKE BRANDS<br />IMPOSSIBLE TO IGNORE
              </h2>
              <h3 className="text-lg uppercase mb-6">WHO WE ARE</h3>
              <p className="text-xl font-semibold text-primary mb-6">
                A full-service commerce agency designed to fuel growth at every touchpoint.
              </p>
              <p className="mb-4">
                We create shopper-driven campaigns that <span className="font-bold">don't just engage—they convert.</span> Our approach is built on expertise, precision, and creativity engineered for results.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><span className="font-bold">We create the spark</span> that gets consumers to act.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><span className="font-bold">We accelerate momentum</span> by closing the gap between awareness and purchase.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p><span className="font-bold">We design for impact</span>, ensuring every execution leads to measurable conversion.</p>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/81555fb6-be8a-469c-b7e0-76f5d8c8613e.png" 
                alt="Public Label neon sign" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients Section */}
      <section id="clients" className="py-20 bg-muted" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center mb-16">
            WITH AN EXPERIENCED TEAM<br />TO SUPPORT YOU
          </h2>
          <ClientGrid section="COMPANY WE KEEP" />
        </div>
      </section>
      
      {/* Growth Framework Section */}
      <section id="growth-framework" className="py-24 bg-black text-white" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-8">GROWTH FRAMEWORK</h2>
            <p className="text-xl">WE DRIVE WHAT MATTERS: CONVERSION.</p>
            <p className="text-lg">OUR STRATEGIES FUEL <span className="text-primary font-bold">THREE KEY GROWTH DRIVERS:</span></p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary p-4 inline-block rounded-md mb-4">
                <img 
                  src="/public/lovable-uploads/06f2a0e0-955c-4943-81a9-a1e30404d770.png" 
                  alt="Get New People To Buy Icon" 
                  className="h-12 w-12"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3">
                <h3 className="text-xl font-bold uppercase">GET NEW PEOPLE TO BUY</h3>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary p-4 inline-block rounded-md mb-4">
                <img 
                  src="/public/lovable-uploads/06f2a0e0-955c-4943-81a9-a1e30404d770.png" 
                  alt="Get Them To Buy More Often Icon" 
                  className="h-12 w-12"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3">
                <h3 className="text-xl font-bold uppercase">GET THEM TO BUY MORE OFTEN</h3>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-primary p-4 inline-block rounded-md mb-4">
                <img 
                  src="/public/lovable-uploads/06f2a0e0-955c-4943-81a9-a1e30404d770.png" 
                  alt="Buy More Per Trip Icon" 
                  className="h-12 w-12"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3">
                <h3 className="text-xl font-bold uppercase">BUY MORE PER TRIP</h3>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-lg">We build strategies to do all three—fueled by proprietary tools, bold creativity, and commerce-first thinking.</p>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-background" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <h2 className="section-title mb-6">
                  WHERE COMMERCE<br />MEETS MOMENTUM
                </h2>
                <p className="uppercase text-lg mb-6">OUR CAPABILITIES</p>
              </div>
              <div>
                <p className="text-lg">
                  We create <span className="font-bold">commerce strategies that drive real business results</span> across two high-impact verticals:
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceColumn
              title="BRICK & CLICK COMMERCE"
              description="WINNING AT THE INTERSECTION OF ONLINE & IN-STORE."
              color="secondary"
              items={[
                "Retailer-specific strategy & execution",
                "Data-driven shopper insights & category growth planning",
                "Retail media & omnichannel campaign integration",
                "High-impact content syndication & marketplace SEO",
                "Dynamic creative built for conversion"
              ]}
              tools={[
                { name: "5t", description: "Custom, retailer-specific omni-plan builder" },
                { name: "AIM", description: "Monthly share of voice tracking" },
                { name: "Category Roadmap", description: "Shopper-led forecasting & growth mapping" },
                { name: "RADaR", description: "Performance analytics & competitive war gaming" }
              ]}
            />
            
            <ServiceColumn
              title="ON-DEMAND COMMERCE"
              description="CAPTURING DEMAND, DRIVING REPEAT PURCHASE."
              color="primary"
              items={[
                "E-commerce ecosystem optimization",
                "Amazon, Instacart, TikTok Shop",
                "SEO strategy & paid media acceleration",
                "AI-driven creative & product listing optimization",
                "DTC demand generation & social commerce consulting"
              ]}
              tools={[
                { name: "PMR", description: "Precision marketplace refinement" },
                { name: "Resonance", description: "AI-powered message optimization" }
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* Strategy Section */}
      <section className="py-24 bg-black text-white" ref={addToRefs}
        style={{ backgroundImage: "url('/public/lovable-uploads/ded1abae-3349-4817-b5a0-d78ba4817535.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <p className="uppercase text-lg mb-4">STRATEGY | PLANNING | TOOLS</p>
            <h2 className="section-title">SETTING IT UP</h2>
          </div>
        </div>
      </section>
      
      {/* How We Do It Section */}
      <section className="py-24 bg-black text-white" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title mb-8">DESIGNED TO DISRUPT.<br />BUILT TO PERFORM.</h2>
            <p className="text-xl mb-6">
              We don't just create—we engineer influence. Every piece of creative we develop is designed to drive action, balancing <span className="font-bold">brand equity</span> and <span className="font-bold">conversion</span> to ensure every touchpoint delivers results.
            </p>
            <p className="text-primary text-xl font-bold mt-12">HOW WE DO IT</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mt-10">
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                  alt="Strategic Foundation Icon" 
                  className="h-16"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3 mb-6">
                <h3 className="text-lg font-bold">STRATEGIC FOUNDATION</h3>
              </div>
              <p className="text-sm">
                We ground creative in insights—aligning brand truths with behavioral triggers that drive conversion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                  alt="Seamless Execution Icon" 
                  className="h-16"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3 mb-6">
                <h3 className="text-lg font-bold">SEAMLESS EXECUTION</h3>
              </div>
              <p className="text-sm">
                We connect online and in-store experiences, ensuring every message supports the shopper journey across all platforms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                  alt="10-5-1 Framework Icon" 
                  className="h-16"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3 mb-6">
                <h3 className="text-lg font-bold">10-5-1 FRAMEWORK</h3>
              </div>
              <p className="text-sm">
                Our in-store and retail creative follows a behavioral flow—attract from 10 ft away, engage in 5, convert in 1.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-8 flex justify-center">
                <img 
                  src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                  alt="Optimized For Attention Icon" 
                  className="h-16"
                />
              </div>
              <div className="bg-primary p-3 transform -rotate-3 mb-6">
                <h3 className="text-lg font-bold">OPTIMIZED FOR ATTENTION</h3>
              </div>
              <p className="text-sm">
                We use Resonance, an AI-powered scoring tool, to test and refine creative before launch—evaluating eye tracking, clarity, emotional tone, and cognitive load to ensure maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-24 bg-background" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="section-title mb-6">IMPACT IN ACTION</h2>
              <p className="uppercase text-lg mb-8">WORK THAT WORKS</p>
            </div>
            <div>
              <p className="text-lg">
                We don't just win awards—we win results. Our creative is made to convert. Here's a quick snapshot of the performance we've driven:
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Dreyer's"
              logo="/public/lovable-uploads/951ee33b-a36d-465a-8632-a67fb15b7dc7.png"
              metric="+8% CAGR"
              description="with Dreyer's portfolio platform"
            />
            
            <CaseStudyCard 
              title="Oreo"
              logo="/public/lovable-uploads/e4163406-3ecf-4fff-a5c6-937ccb6b5019.png"
              metric="$4.32 ROAS"
              description="on Oreo's national new item launch"
            />
            
            <CaseStudyCard 
              title="Stonewall Kitchen"
              logo="/public/lovable-uploads/5b9739b7-5f17-4e02-b3a7-0a825cd6a530.png"
              metric="+15% CAGR"
              description="on Amazon for Stonewall Kitchen"
            />
            
            <CaseStudyCard 
              title="Hoover"
              logo="/public/lovable-uploads/9f695f62-6a6f-4959-bbf9-3fd763d49fac.png"
              metric="+52% revenue growth"
              description="for Hoover through DTC creative optimization"
            />
            
            <CaseStudyCard 
              title="Evolve"
              logo="/public/lovable-uploads/20316ce9-1f00-4776-996b-58ca066760aa.png"
              metric="+3pts penetration"
              description="with Meijer's new millennial target"
            />
          </div>
        </div>
      </section>
      
      {/* Performance Section */}
      <section className="py-24 bg-black text-white" ref={addToRefs}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">
                REAL-TIME RESULTS.<br />ALIGNED INCENTIVES.
              </h2>
              <p className="uppercase text-lg mb-8">PERFORMANCE + PARTNERSHIP</p>
              
              <p className="text-2xl text-primary font-bold mb-6">
                We don't hide behind vague metrics. We measure. We iterate. We grow.
              </p>
              
              <p className="mb-6">
                And we put skin in the game with a Pay-for-Performance model.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p>Real-time insights in 6–8 weeks</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p>Predictive tools to forecast success</p>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <p>Flexible scopes with performance bonuses</p>
                </li>
              </ul>
              
              <p className="text-2xl text-primary font-bold mt-8">
                When you win, we win.<br />Simple as that.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="/public/lovable-uploads/bd29c930-b437-425d-a673-e219f59f4dc0.png" 
                alt="Public Label neon sign" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24" 
        style={{ backgroundImage: "url('/public/lovable-uploads/78b093b5-f73b-4ced-a399-de405a325443.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        ref={addToRefs}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
              <div className="text-center mb-10">
                <h2 className="section-title mb-6">
                  READY TO MOVE?<br />LET'S TALK.
                </h2>
                <p className="text-xl">COMMERCE DOESN'T WAIT. NEITHER SHOULD YOU.</p>
              </div>
              
              <ContactForm />
              
              <div className="mt-10 text-center">
                <p className="text-muted-foreground">
                  Morgan McAlenney, VP Business Development | Mobile: 720-878-5176 | Morgan.McAlenney@publiclabelagency.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
