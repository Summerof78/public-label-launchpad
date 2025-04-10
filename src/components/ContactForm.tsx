
import { useState } from 'react';
import { toast } from "sonner";
import { Mail, Send, User, Briefcase } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interests: {
      newBusiness: false,
      careers: false,
      generalInquiry: false
    }
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      interests: {
        ...prev.interests,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success("Thank you for your message! We'll be in touch soon.", {
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        interests: {
          newBusiness: false,
          careers: false,
          generalInquiry: false
        }
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-muted-foreground">
              <User size={18} />
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              placeholder="Your full name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-muted-foreground">
              <Mail size={18} />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block mb-2 font-medium">Company</label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-muted-foreground">
              <Briefcase size={18} />
            </span>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-4 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <div>
          <p className="mb-2 font-medium">I'm interested in:</p>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newBusiness"
                name="newBusiness"
                checked={formData.interests.newBusiness}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
              />
              <label htmlFor="newBusiness" className="ml-2">New Business Opportunities</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="careers"
                name="careers"
                checked={formData.interests.careers}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
              />
              <label htmlFor="careers" className="ml-2">Career Opportunities</label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="generalInquiry"
                name="generalInquiry"
                checked={formData.interests.generalInquiry}
                onChange={handleCheckboxChange}
                className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
              />
              <label htmlFor="generalInquiry" className="ml-2">General Inquiry</label>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            className="btn-primary w-full flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                Submitting...
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
