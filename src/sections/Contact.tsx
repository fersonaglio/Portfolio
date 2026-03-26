import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-foreground mb-4">
            GET IN TOUCH
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear from you! Feel free to reach out for opportunities or just to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-sm">
              <h3 className="font-montserrat font-bold text-xl text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:sonaglio3@gmail.com"
                  className="flex items-center gap-4 p-4 bg-blue-100 dark:bg-blue-900/20 rounded-2xl hover:bg-blue-200 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-foreground">sonaglio3@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/fernando-sonaglio0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pink-100 dark:bg-pink-900/20 rounded-2xl hover:bg-pink-200 dark:hover:bg-pink-900/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <p className="font-semibold text-foreground">Fernando Sonaglio</p>
                  </div>
                </a>

                <a
                  href="https://github.com/fersonaglio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-100 dark:bg-green-900/20 rounded-2xl hover:bg-green-200 dark:hover:bg-green-900/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-semibold text-foreground">@fersonaglio</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-yellow-100 dark:bg-yellow-900/20 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-foreground">Chapecó, SC - Brazil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-sm">
            <h3 className="font-montserrat font-bold text-xl text-foreground mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-white font-montserrat font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span>Message sent!</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
