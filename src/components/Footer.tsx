import { Mail, Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <Link to="/">
                <img 
                  src="/lovable-uploads/54d6adae-46d3-456d-93ae-6585af92f0c2.png"
                  alt="PUBLIC LABEL" 
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-muted-foreground mb-4">
              A full-service commerce agency designed to fuel growth at every touchpoint.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-foreground hover:text-primary">
                <Linkedin />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-foreground hover:text-primary">
                <Twitter />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-foreground hover:text-primary">
                <Facebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-foreground hover:text-primary">
                <Instagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/#about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/#capabilities" className="text-muted-foreground hover:text-primary">Capabilities</Link></li>
              <li><Link to="/#growth-framework" className="text-muted-foreground hover:text-primary">Growth Framework</Link></li>
              <li><Link to="/#clients" className="text-muted-foreground hover:text-primary">Clients</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/#capabilities" className="text-muted-foreground hover:text-primary">Brick & Click Commerce</Link></li>
              <li><Link to="/#capabilities" className="text-muted-foreground hover:text-primary">On-Demand Commerce</Link></li>
              <li><Link to="/#capabilities" className="text-muted-foreground hover:text-primary">Strategic Foundation</Link></li>
              <li><Link to="/#capabilities" className="text-muted-foreground hover:text-primary">Seamless Execution</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a href="mailto:Morgan.McAlenney@publiclabelagency.com" className="text-muted-foreground hover:text-primary">
                  Morgan.McAlenney@publiclabelagency.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a href="tel:720-878-5176" className="text-muted-foreground hover:text-primary">
                  720-878-5176
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Public Label. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
